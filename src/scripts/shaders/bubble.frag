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
		}

		rayDepth += sceneDist;
	}
	
	return rayCol;
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