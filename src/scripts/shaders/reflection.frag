precision highp float;

uniform vec2  u_resolution;
uniform float u_time;

float pi=acos(-1.);

#define MULTI_REFRACTION

//https://qiita.com/aa_debdeb/items/4c35f59cc6ead09c822d
// https://stackoverflow.com/questions/9841863/reflection-refraction-with-chromatic-aberration-eye-correction

float sphere(vec3 p, float r) {
	return length(p) - r;
}

float box(vec3 p, vec3 s, float r) {
	vec3 d = abs(p) - s;
	return length(max(d, 0.0)) - r;	
}


vec3 rep(vec3 p, float r)
{
  return mod(p,r)- 0.5*r;
}

float scene(vec3 p) {
	return box(p, vec3(1.0,1.1,2.1),1.);
}

vec3 normal(vec3 p) {
	float d = 0.01;
	return normalize(vec3(
		scene(p + vec3(d, 0.0, 0.0)) - scene(p - vec3(d, 0.0, 0.0)),
		scene(p + vec3(0.0, d, 0.0)) - scene(p - vec3(0.0, d, 0.0)),
		scene(p + vec3(0.0, 0.0, d)) - scene(p - vec3(0.0, 0.0, d))
	));
}

vec3 ground(vec3 ro, vec3 rd, float h) 
{
	vec2 p = (gl_FragCoord.xy * 2. - u_resolution) / min(u_resolution.x, u_resolution.y);

	if (rd.y > 0.0) {
		return  0.8 + 0.5*cos(u_time+p.xyx+vec3(1,cos(u_time),3))+0.2;
	}
	float d = (ro.y - h) / rd.y;
	vec2 uv = ro.xz + d * rd.xz;
	float l = length(d * rd.xz);
	return (sin(uv.x * 5.0) * sin(uv.y * 5.0) > 0.0 ? vec3(1.0, 1.0, 1.0) : vec3(0.3961, 0.7333, 0.8196)) * (1.3 - smoothstep(0.0, 120.0, l));
}

vec3 background(vec3 ro, vec3 rd) {
	return ground(ro, rd, -5.0);	
}

float schlickFresnel(float ri, float cosine) {
	float r0 = (1.0 - ri) / (1.0 + ri);
	r0 = r0 * r0;
	return r0 + (1.0 - r0) * pow(1.0 - cosine, 5.0);
}

float refractionIndex = 1.5;

float a = 1.2;
float etaR = 1.14*a;
float etaG = 1.12*a;
float etaB = 1.10*a;
float fresnelPower = 0.1;
float F = ((1.0 - etaG) * (1.0 - etaG)) / ((1.0 + etaG) * (1.0 + etaG));

vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
vec3 lightColor = vec3(2.0);
vec3 substanceColor = vec3(0.90, 0.95, 1.0);

vec3 raymarch(vec3 ro, vec3 rd) {
	vec3 p = ro;
	

	for (int i = 0; i < 32; i++) {
		float d  = scene(p);
		p += rd * d;
		if (d < 0.01) {
			vec3 n = normal(p);
			vec3 reflected = reflect(rd, n);
			float f = schlickFresnel(refractionIndex, max(0.0, dot(-rd, n)));
			vec3 spec = f * lightColor * pow(max(0.0, dot(reflected, lightDir)), 4.0);

			//https://stackoverflow.com/questions/9841863/reflection-refraction-with-chromatic-aberration-eye-correction
			vec3 refractR = refract(rd, n, 1./etaR);
			vec3 refractG = refract(rd, n, 1./etaG);
			vec3 refractB = refract(rd, n, 1./etaB);

			//vec3 refracted = refract(rd, n, 1.0 / refractionIndex);
			vec3 refracted = vec3(refractR.r, refractG.g, refractB.b);

			float ratio = F + (1.0 - F) * pow(1.0 - dot(-ro, n), fresnelPower);

			spec = mix(refracted, spec,ratio);
			
			vec3 op = p + refracted * 15.0;

			return spec + substanceColor * background(op, refracted);
			
			for (int j = 0; j < 32; j++) {
				float d = scene(op);
				op += -refracted * d;
				if (d < 0.01) {
					vec3 n2 = normal(op);
					vec3 refracted2 = refract(refracted, -n2, refractionIndex);
					if (length(refracted2) > 0.01) {
						return spec + substanceColor * background(op, refracted2);
					} else {
						vec3 reflected2 = reflect(refracted, -n2);
						return spec + substanceColor * background(op, reflected2);
					}
				}
			}
		}
	}
	return background(ro, rd);
}

void main( void ) {

	vec2 st = (2.0 * gl_FragCoord.xy - u_resolution) / min(u_resolution.y, u_resolution.x);
	
	vec3 ro = vec3(0.0 , 5.0, 10.0);
	vec3 ta = vec3(0.0);
	
	vec3 front = normalize(ta - ro);
	vec3 right = normalize(cross(front, vec3(0.0, 1.0, 0.0)));
	vec3 up = normalize(cross(right, front)); 
	
	vec3 rd = normalize(st.x * right + st.y * up + front * 2.0);
	
	vec3 c = raymarch(ro, rd);
	
	gl_FragColor = vec4(c, 1.0);

}