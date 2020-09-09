precision highp float;

uniform vec2  u_resolution;
uniform float u_time;

vec2 resolution=u_resolution;
float time=u_time;

float pi=acos(-1.);

//https://www.shadertoy.com/view/4s23WK

vec2 Rot(vec2 p, float t) {
	float c = cos(t); float s = sin(t);
	return vec2(p.x*c+p.y*s,
				-p.x*s+p.y*c);
}
vec2 RotCS(vec2 p, float c, float s) {
	return vec2( p.x*c+p.y*s,
				-p.x*s+p.y*c);
}


vec3 random3(vec3 c) {
	float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
	vec3 r;
	r.z = fract(512.0*j);
	j *= .125;
	r.x = fract(512.0*j);
	j *= .125;
	r.y = fract(512.0*j);
	r = r-0.5;
	
	//rotate for extra flow!
	float t = -time*.5;
	r.xy = Rot(r.xy,t);

	return r;
}

/* skew constants for 3d simplex functions */
const float F3 =  0.3333333;
const float G3 =  0.1666667;

/* 3d simplex noise */
float noise(vec3 p) {
	 /* 1. find current tetrahedron T and its four vertices */
	 /* s, s+i1, s+i2, s+1.0 - absolute skewed (integer) coordinates of T vertices */
	 /* x, x1, x2, x3 - unskewed coordinates of p relative to each of T vertices*/
	 
	 /* calculate s and x */
	 vec3 s = floor(p + dot(p, vec3(F3)));
	 vec3 x = p - s + dot(s, vec3(G3));
	 
	 /* calculate i1 and i2 */
	 vec3 e = step(vec3(0.0), x - x.yzx);
	 vec3 i1 = e*(1.0 - e.zxy);
	 vec3 i2 = 1.0 - e.zxy*(1.0 - e);
	 	
	 /* x1, x2, x3 */
	 vec3 x1 = x - i1 + G3;
	 vec3 x2 = x - i2 + 2.0*G3;
	 vec3 x3 = x - 1.0 + 3.0*G3;
	 	
	 /* 2. find four surflets and store them in d */
	 vec4 w, d;
	 
	 /* calculate surflet weights */
	 w.x = dot(x, x);
	 w.y = dot(x1, x1);
	 w.z = dot(x2, x2);
	 w.w = dot(x3, x3);
	 
	 /* w fades from 0.6 at the center of the surflet to 0.0 at the margin */
	 w = max(0.6 - w, 0.0);
	 
	 /* calculate surflet components */
	 d.x = dot(random3(s), x);
	 d.y = dot(random3(s + i1), x1);
	 d.z = dot(random3(s + i2), x2);
	 d.w = dot(random3(s + 1.0), x3);
	 
	 /* multiply d by w^4 */
	 w *= w;
	 w *= w;
	 d *= w;
	 
	 /* 3. return the sum of the four surflets */
	 return dot(d, vec4(52.0));
}


//iq 2d simplex noise

vec2 hash( vec2 p )
{
	p = vec2( dot(p,vec2(127.1,311.7)),
			  dot(p,vec2(269.5,183.3)) );

	vec2 h = -1.0 + 2.0*fract(sin(p)*43758.5453123);

#if 1	
	//extra rotations for more flow!
	float t = -time*0.7;
	float co = cos(t); float si = sin(t);	
	h = RotCS(h,co,si);
#endif
	return h;
}


float noise( in vec2 p )
{
    const float K1 = 0.366025404; // (sqrt(3)-1)/2;
    const float K2 = 0.211324865; // (3-sqrt(3))/6;

	vec2 i = floor( p + (p.x+p.y)*K1 );
	
    vec2 a = p - i + (i.x+i.y)*K2;
    vec2 o = (a.x>a.y) ? vec2(1.0,0.0) : vec2(0.0,1.0); //vec2 of = 0.5 + 0.5*vec2(sign(a.x-a.y), sign(a.y-a.x));
    vec2 b = a - o + K2;
	vec2 c = a - 1.0 + 2.0*K2;

#if 1	
	//even more extra rotations for more flow!
	float t = time*.5;
	float co = cos(t); float si = sin(t);	
	a = RotCS(a,co,si);
	b = RotCS(b,co,si);
	c = RotCS(c,co,si);
#endif
	
    vec3 h = max( 0.5-vec3(dot(a,a), dot(b,b), dot(c,c) ), 0.0 );

	vec3 n = h*h*h*h*vec3( dot(a,hash(i+0.0)), dot(b,hash(i+o)), dot(c,hash(i+1.0)));

    return dot( n, vec3(70.0) );
	
}

float pot(vec2 pos)
{
	float t = time*.1;

	vec3 p = vec3(pos+vec2(time*.4,0.),t);
	
	float n = noise(p);
	n += 0.5 *noise(p*2.13);
	n += 3. * noise(pos*0.333);
	
	return n;
}

vec2 field(vec2 pos)
{
	float s = 1.5;
	pos *= s;
	
	float n = pot(pos);
	
	float e = 0.1;
	float nx = pot(vec2(pos+vec2(e,0.)));
	float ny = pot(vec2(pos+vec2(0.,e)));
	
	return vec2(-(ny-n),nx-n)/e;
}

void main()
{
    vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);

    float lod = 0.;
    
    vec3 col = 0.5 + 0.5*cos(time+p.xyx+vec3(0,2.+sin(time),4)+lod);//0.5 + 0.5*cos(time+p.xyx+vec3(0,2,4));
    vec3 col_2 = 0.5 + 0.5*cos(time+p.xyx+vec3(1,cos(time),3)+lod);

	p.x *= resolution.x/resolution.y;
	p.y = 1. - p.y;
	vec2 src_uv = p;
	
	vec3 d = vec3(0.);
	vec3 e = vec3(0.);
	for (int i=0; i<25; i++)
	{
		d += 0.5 + 0.5*cos(time+p.xyx+vec3(0,2.,4)+lod);//texture(iChannel0,p+iTime*0.05,lod).xyz;
		e += 0.5 + 0.5*cos(time+p.xyx+vec3(1,1,3)+lod);//texture(iChannel0,-p.yx*3.+iTime*0.0125,lod).xyz;
		
		vec2 new_uv = field(p)*.00625*.5;
	
		lod += length(new_uv)*2.;
		p += new_uv;
	}
	
	vec3 c = col;

	d *= (1./20.);
	e *= (1./25.);
	c = mix(c,d,length(d));
	c = mix(c,e,length(e));
	c += 0.2;

	gl_FragColor = vec4( c,1.);
}