//https://iquilezles.org/www/articles/distfunctions/distfunctions.htm

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

vec3 background(vec3 ro, vec3 rd) 
{
	return ground(ro, rd, -5.0);	
}

vec3 march(vec3 ro, vec3 rd)
{
	vec3 rayCol = vec3(0.);
	float sceneDist;
	float rayDepth = 0.;

	for(int i = 0; i < 64; i++)
	{
		sceneDist = map(ro + rd * rayDepth);

		if(sceneDist < 0.001)
		{
			rayCol = vec3(1.);
			return rayCol;
		}
		rayDepth += sceneDist;
	}

	return background(ro,rd);
}

void main( void ) {

	vec2 p = (gl_FragCoord.xy * 2.- u_resolution) / min(u_resolution.y, u_resolution.x);

	vec3 camOffset = vec3(0.);
    vec3 ro = vec3(0., 0., -25.);
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