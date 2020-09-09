//https://iquilezles.org/www/articles/distfunctions/distfunctions.htm
// https://qiita.com/aa_debdeb/items/4c35f59cc6ead09c822d
//https://stackoverflow.com/questions/9841863/reflection-refraction-with-chromatic-aberration-eye-correction

precision highp float;

uniform vec2  u_resolution;
uniform float u_time;

float pi=acos(-1.);

mat2 rot(float a)
{
    float c=cos(a),s=sin(a);
    return mat2(c,s,-s,c);
}

float sphere(vec3 p, float r)
{
    float d = length(p) - r;
    return d;
}

float sdBox( vec3 p, vec3 b )
{
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
}

float sdCylinder( vec3 p, vec3 c )
{
  return length(p.xz-c.xy)-c.z;
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

vec3 rep(vec3 p,float r)
{
    return mod(p,r)-.5*r;
}

vec3 hsv(float h,float s,float v)
{
    return((clamp(abs(fract(h+vec3(0.,2.,1.)/3.)*6.-3.)-1.,0.,1.)-1.)*s+1.)*v;
}

/////----------

float map(vec3 p)
{
	return sphere(p, 3.);
}

float samplingMap(vec3 p)
{
	p.xz *= rot(u_time * 0.1);
	p.yx *= rot(u_time * 0.1);
	return sdBox(p-vec3(5.), vec3(2.0));
}

vec3 getNormal(vec3 p)
{
    float d = 0.0001;
	vec2 z = vec2(0.);
    return normalize(vec3(
        map(p + vec3(d, z)) - map(p + vec3(-d, z)),
        map(p + vec3(z.x, d, z.x)) - map(p + vec3(z.x, -d, z.x)),
        map(p + vec3(z, d)) - map(p + vec3(z, -d))
    ));
}

vec3 samplingMarch(vec3 ro, vec3 rd) 
{
	vec3 sampleCol;
	float dist;
	float rayDepth = 0.;

	for (int i = 0; i < 32; i++) 
	{
		vec3 rayPos = ro + rd * rayDepth;
		dist  = samplingMap(rayPos);
		
		if (dist < 0.01) 
		{
			sampleCol = vec3(1.);
		}

		rayDepth += dist;
	}

	sampleCol += ground(ro, rd,-5.0);

	return sampleCol;	
}

float schlickFresnel(float ri, float cosine) 
{
	float r0 = (1.0 - ri) / (1.0 + ri);
	r0 = r0 * r0;
	return r0 + (1.0 - r0) * pow(1.0 - cosine, 5.0);
}

float rI = 1.5;
vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
vec3 lightColor = vec3(2.0);
vec3 substanceColor = vec3(0.90, 0.95, 1.0);

vec3 march(vec3 ro, vec3 rd)
{
	vec3 rayCol = vec3(0.);
	float dist;
	float rayDepth = 0.;
	
	for(int i = 0; i < 64; i++)
	{
		vec3 rayPos = ro + rd * rayDepth;
		dist = map(rayPos);

		if(dist < 0.001)
		{
			vec3 n = getNormal(rayPos);
			vec3 refl = reflect(rd, n);
			float eta = 1. / rI;
			vec3 refr = refract(rd, n, eta);

			float f = schlickFresnel(rI, max(0.0, dot(-rd, n)));

			vec3 spec = f * lightColor * pow(max(0.0, dot(refl, lightDir)), 4.0);
			
			vec3 op = rayPos + refr * 100.0;
			for (int j = 0; j < 32; j++) 
			{
				float d = map(op);
				op += -refr * d;
				if (d < 0.001) 
				{
					vec3 n2 = getNormal(op);
					vec3 refr_2 = refract(refr, -n2, rI);

					if (length(refr_2) > 0.01) 
					{
						return spec + substanceColor * samplingMarch(op, refr_2);
					} else {
						vec3 refl_2 = reflect(refr, -n2);
						return spec + substanceColor * samplingMarch(op, refl_2);
					}
				}
			}
		}

		rayDepth += dist;
	}

	return samplingMarch(ro,rd);
}

void main( void ) {

	vec2 p = (gl_FragCoord.xy * 2.- u_resolution) / min(u_resolution.y, u_resolution.x);

	vec3 camOffset = vec3(10.0 * cos(u_time * 0.2), 5.0 * sin(u_time * 0.3) + 3.0, 10.0 * sin(u_time * 0.2));
    vec3 ro = vec3(0.,0.,-15);
	ro += camOffset;
    vec3 ta = vec3(0.);
    vec3 z = normalize(ta - ro);
    vec3 up = vec3(0., 1., 0.);
    vec3 x = normalize(cross(z, up));
    vec3 y = normalize(cross(x, z));
	vec3 rd = normalize(x * p.x + y * p.y + z * 2.5);

	vec3 col = march(ro, rd);

	gl_FragColor = vec4(col, 1.);
}