precision highp float;

uniform vec2  u_resolution;
uniform float u_time;

float pi=acos(-1.);

#define MULTI_REFRACTION

//https://qiita.com/aa_debdeb/items/4c35f59cc6ead09c822d


float sphere(vec3 p, float r) {
	return length(p) - r;
}

float scene(vec3 p) {
	return sphere(p, 3.0);
}

vec3 normal(vec3 p) {
	float d = 0.01;
	return normalize(vec3(
		scene(p + vec3(d, 0.0, 0.0)) - scene(p - vec3(d, 0.0, 0.0)),
		scene(p + vec3(0.0, d, 0.0)) - scene(p - vec3(0.0, d, 0.0)),
		scene(p + vec3(0.0, 0.0, d)) - scene(p - vec3(0.0, 0.0, d))
	));
}

vec3 ground(vec3 ro, vec3 rd, float h) {
	if (rd.y > 0.0) {
		return vec3(.0);
	}
	float d = (ro.y - h) / rd.y;
	vec2 uv = ro.xz + d * rd.xz;
	float l = length(d * rd.xz);
	return (sin(uv.x * 5.0) * sin(uv.y * 5.0) > 0.0 ? vec3(0.95) : vec3(0.5)) * (1.0 - smoothstep(0.0, 80.0, l));
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
			vec3 refracted = refract(rd, n, 1.0 / refractionIndex);
			
			#ifdef MULTI_REFRACTION
			vec3 op = p + refracted * 100.0;
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
			#else
			return spec + substanceColor * background(p, refracted);
			#endif
		}
	}
	return background(ro, rd);
}

void main( void ) {

	vec2 st = (2.0 * gl_FragCoord.xy - u_resolution) / min(u_resolution.y, u_resolution.x);
	
	vec3 ro = vec3(10.0 , 5.0, 10.0);
	vec3 ta = vec3(0.0);
	
	vec3 front = normalize(ta - ro);
	vec3 right = normalize(cross(front, vec3(0.0, 1.0, 0.0)));
	vec3 up = normalize(cross(right, front)); 
	
	vec3 rd = normalize(st.x * right + st.y * up + front * 2.0);
	
	vec3 c = raymarch(ro, rd);
	
	gl_FragColor = vec4(c, 1.0);

}