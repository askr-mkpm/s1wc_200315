//https://iquilezles.org/www/articles/distfunctions/distfunctions.htm
// https://qiita.com/aa_debdeb/items/4c35f59cc6ead09c822d
//https://stackoverflow.com/questions/9841863/reflection-refraction-with-chromatic-aberration-eye-correction

precision highp float;

uniform vec2  u_resolution;
uniform float u_time;

//---

const float pi = acos(-1.);

mat2 rot(float a)
{
    float c=cos(a),s=sin(a);
    return mat2(c,s,-s,c);
}

vec3 rep(vec3 p,float r)
{
    return mod(p,r)-.5*r;
}

vec3 round(vec3 p, float c)
{
	vec3 r;
	r.x = floor(p.x/c+0.5);
	r.y = floor(p.y/c+0.5);
	r.z = floor(p.z/c+0.5);
	return r;
}

vec3 opRepLim( in vec3 p, in float c, in vec3 l)
{
	vec3 r = round(p,c);
    return p-c*clamp(r,-l,l);
}

vec3 hsv(float h,float s,float v)
{
    return((clamp(abs(fract(h+vec3(0.,2.,1.)/3.)*6.-3.)-1.,0.,1.)-1.)*s+1.)*v;
}

float rand(vec3 n)
{ 
    return fract(sin(dot(n, vec3(12.9898, 4.1414,14.6313))) * 43758.5453);
}

float rand_(vec2 n) { 
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

//---

float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

float hash( float n )
{
    return fract(sin(n)*43758.5453);
}

float noise( in vec3 x ) 
{
    vec3 p = floor(x);
    vec3 f = fract(x);

    f = f*f*(3.0-2.0*f);
    float n = p.x + p.y*57.0 + 113.0*p.z;
    return mix(mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
                   mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y),
               mix(mix( hash(n+113.0), hash(n+114.0),f.x),
                   mix( hash(n+170.0), hash(n+171.0),f.x),f.y),f.z);
}

vec3 noise3(vec3 x) 
{
	return vec3( noise(x+vec3(123.456,.567,.37)),
				 noise(x+vec3(.11,47.43,19.17)),
				 noise(x) );
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise_ (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

float noise_2(vec2 p){
	vec2 ip = floor(p);
	vec2 u = fract(p);
	u = u*u*(3.0-2.0*u);
	
	float res = mix(
		mix(rand_(ip),rand_(ip+vec2(1.0,0.0)),u.x),
		mix(rand_(ip+vec2(0.0,1.0)),rand_(ip+vec2(1.0,1.0)),u.x),u.y);
	return res*res;
}


#define OCTAVES 6
float fbm (in vec2 st) 
{
    float value = 0.0;
    float amplitude = .5;
    float frequency = 0.;

    for (int i = 0; i < OCTAVES; i++) 
	{
        value += amplitude * noise_(st);
        st *= 2.;
        amplitude *= .5;
    }
    return value;
}

//---

float sdSphere(vec3 p, float s)
{
    return length(p) - s;
}

//https://www.shadertoy.com/view/ld3SDl
float sdBubble(vec3 p, float r)
{
	float  t = u_time * 0.5;
	vec3 n = vec3(sin(t * 0.5), sin(t * 0.3), cos(t * 0.2));
	vec3 q = 0.1 * (noise3(p + n) - 0.5);
	
	return length(q + p) - r;
}

vec2 pMod2(inout vec2 p, float size)
{
	float halfsize = size*0.5;
	vec2 c = floor((p+halfsize)/size);
	p = mod(p+halfsize,size)-halfsize;
	return c;
}

//https://www.shadertoy.com/view/4dcBRN
float randBubble(vec3 p)
{
	//     vec2 index = pMod2(p.xz, 5.0);
    // float valNoise = noise_(index);

	float d = sdSphere(opRepLim(p,3., vec3(1.)), 0.5);
	// for(int i = 0; i < 3; i++)
	// {
	// 	p.x += float(i);
	// 	p.y += float(i)*1.2;
	// 	d = min(d, sdSphere(rep(p,3.), 0.5));
	// }
    return d;
	// return sdBubble(q, 2.0*e*s);
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

float sdBoundingBox( vec3 p, vec3 b, float e )
{
       p = abs(p  )-b;
  vec3 q = abs(p+e)-e;
  return min(min(
      length(max(vec3(p.x,q.y,q.z),0.0))+min(max(p.x,max(q.y,q.z)),0.0),
      length(max(vec3(q.x,p.y,q.z),0.0))+min(max(q.x,max(p.y,q.z)),0.0)),
      length(max(vec3(q.x,q.y,p.z),0.0))+min(max(q.x,max(q.y,p.z)),0.0));
}

float sdCappedTorus(in vec3 p, in vec2 sc, in float ra, in float rb)
{
p.yz = p.yz*rot(pi*0.5);
  p.x = abs(p.x);
  float k = (sc.y*p.x>sc.x*p.y) ? dot(p.xy,sc) : length(p.xy);
  return sqrt( dot(p,p) + ra*ra - 2.0*ra*k ) - rb;
}

//---

float map(vec3 p)
{
	float d;
	d = randBubble(p);
	return d;
}

float samplingMap(vec3 p)
{
	float d;

	vec3 rp = rep(p,19.);
  	vec3 rpp = vec3(p.x, rp.y, p.z);

	vec3 cp_1 = vec3(p.x+ 10., p.y, p.z+ 10.);
	vec3 cp_2 = vec3(p.x+ 20., p.y, p.z+ 10.);
	vec3 cp_3 = vec3(p.x+ 10., p.y, p.z- 10.);

	float c = sdCylinder(cp_1, vec3(1.));
	c = min(c, sdCylinder(cp_2, vec3(1.)));
	c = min(c, sdCylinder(cp_3, vec3(1.)));
	float b = sdCappedTorus(rpp, vec2(0.), 25., 1.);
	float tb = sdBoundingBox(rpp,vec3(20., 9.7, 20.), 1.5);
	d = b;

	return d;
}

//---

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

float rI = 1.5;
vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
vec3 lightColor = vec3(2.0);
vec3 substanceColor = vec3(0.90, 0.95, 1.0);

vec3 sky(vec3 lightDir, vec3 rd, vec3 ro)
{
	vec3 col;
	float sundot = clamp(dot(rd,lightDir),0.0,1.0);

	vec3 blueSky = vec3(0.3,.55,0.8);
	vec3 redSky = vec3(0.8,0.8,0.6);
	
	vec3 sky = mix(blueSky, redSky, 1.5*pow(sundot, 8.));
	
	col =  sky*(1.0-0.8*rd.y);

	col += 0.1*vec3(0.9, 0.3, 0.9)*pow(sundot, 0.5);
	col += 0.2*vec3(1., 0.7, 0.7)*pow(sundot, 1.);
	col += 0.95*vec3(1.)*pow(sundot, 256.);

	col = mix( col, 0.9*vec3(0.9,0.75,0.8), pow( 1.-max(rd.y+0.1,0.0), 8.0));

	// clouds
	float cloudSpeed = 0.01;
	float cloudFlux = .5;
	
	// layer 1
	vec3 cloudColour = mix(vec3(1.0, 1.0, 1.0), 0.35*redSky,pow(sundot, 2.));
	
	vec2 sc = cloudSpeed * 50.*u_time * ro.xz + rd.xz*(1000.0-ro.y)/rd.y;
	col = mix( col, cloudColour, 0.5*smoothstep(0.5,0.8,fbm(0.0005*sc+fbm(0.0005*sc+u_time*cloudFlux))));
	
	// cloud layer 2
	sc = cloudSpeed * 30.*u_time * ro.xz + rd.xz*(500.0-ro.y)/rd.y;
	col = mix( col, cloudColour, 0.5*smoothstep(0.5,0.8,fbm(0.0002*sc+fbm(0.0005*sc+u_time*cloudFlux))));

	return col;
}

vec3 samplingMarch(vec3 ro, vec3 rd) 
{
	vec3 sampleCol = sky(lightDir, rd, ro);
	float dist;
	float rayDepth = 0.;

	for (int i = 0; i < 32; i++) 
	{
		vec3 rayPos = ro + rd * rayDepth;
		dist  = samplingMap(rayPos);
		
		if (dist < 0.001) 
		{
			vec3 tc = vec3(1.);
			vec3 fc = vec3(0.);
			float l = abs(0. - rayPos.y)*0.;
			sampleCol = mix(tc, fc, l);
		}

		rayDepth += dist;
	}

	// sampleCol += ground(ro, rd,-5.0);
	// sampleCol += sky(lightDir, rd, ro);

	return sampleCol;	
}

float schlickFresnel(float ri, float cosine) 
{
	float r0 = (1.0 - ri) / (1.0 + ri);
	r0 = r0 * r0;
	return r0 + (1.0 - r0) * pow(1.0 - cosine, 5.0);
}

vec3 march(vec3 ro, vec3 rd)
{
	vec3 rayCol = samplingMarch(ro,rd);
	float dist;
	float rayDepth = 0.;
	
	for(int i = 0; i < 64; i++)
	{
		vec3 rayPos = ro + rd * rayDepth;
		dist = map(rayPos);
		float dist2 = samplingMap(rayPos);

		if(dist < 0.001 && dist < dist2)
		{
			vec3 n = getNormal(rayPos);
			vec3 refl = reflect(rd, n);
			float eta = 1. / rI;
			vec3 refr = refract(rd, n, eta);

			float f = schlickFresnel(rI, max(0.0, dot(-rd, n)));

			vec3 spec = f * lightColor;// * pow(max(0.0, dot(refl, lightDir)), 4.0);
			return spec;// + substanceColor * samplingMarch(rayPos, refr);
			
			// vec3 op = rayPos + refr * 100.0;
			// for (int j = 0; j < 32; j++) 
			// {
			// 	float d = map(op);
			// 	op += -refr * d;
			// 	if (d < 0.001 && dist < dist2) 
			// 	{
			// 		vec3 n2 = getNormal(op);
			// 		vec3 refr_2 = refract(refr, -n2, rI);

			// 		if (length(refr_2) > 0.01) 
			// 		{
			// 			rayCol = spec + substanceColor * samplingMarch(op, refr_2);
			// 			return rayCol;
			// 		} else {
			// 			vec3 refl_2 = reflect(refr, -n2);
			// 			rayCol = spec + substanceColor * samplingMarch(op, refl_2);
			// 			return rayCol;
			// 		}
			// 	}
			// }
		}

		rayDepth += dist;
	}

	return rayCol;//samplingMarch(ro,rd);
}

void main( void ) 
{
	vec2 p = (gl_FragCoord.xy * 2.- u_resolution) / min(u_resolution.y, u_resolution.x);

	vec3 camOffset = vec3(5.0 * cos(u_time * 0.2), 15.0 * sin(u_time * 0.3) + 3.0, 5.0 * sin(u_time * 0.2));
    vec3 ro = vec3(0.,0.,-15);
	ro += camOffset;
    vec3 ta = vec3(0.);
    vec3 z = normalize(ta - ro);
    vec3 up = vec3(0., 1., 0.);
    vec3 x = normalize(cross(z, up));
    vec3 y = normalize(cross(x, z));
	vec3 rd = normalize(x * p.x + y * p.y + z * 2.5);

	vec3 col = march(ro, rd);

	//vignette
    float vg = pow(sqrt(dot(p,p)) * 0.4,3.)+1.;
    float vig = 1.0 / pow(vg,2.5);
	col *= vig;

	gl_FragColor = vec4(col, 1.);
}