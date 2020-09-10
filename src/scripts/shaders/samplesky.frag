precision highp float;

uniform vec2  u_resolution;
uniform float u_time;

const mat2 m2 = mat2(0.8,-0.6,0.6,0.8);

float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 st) {
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

#define OCTAVES 6
float fbm (in vec2 st) {
    // Initial values
    float value = 0.0;
    float amplitude = .5;
    float frequency = 0.;
    //
    // Loop of octaves
    for (int i = 0; i < OCTAVES; i++) {
        value += amplitude * noise(st);
        st *= 2.;
        amplitude *= .5;
    }
    return value;
}
vec2 map (in vec3 p) {
	float mountains = 19. * fbm(p.xz*0.091);
    float trees = -.35 * fbm(p.xz*10.);
    float rocks = -.002 * fbm(p.xz*100.);
    float result = p.y + mountains + trees; // + rocks;
    
    return vec2(result, 1.0);
}

vec3 mapColour (in vec3 pos, in vec3 nor) {    
    float darken = (1.0 - 0.5 * length(normalize(pos)));
	vec3 tint = vec3(.7, .7, .6);
    // vec3 texture = texture( iChannel1, 0.006125*pos.xz, -100. ).xyz;
    
    return   tint;
}

vec2 raymarch (in vec3 ro, in vec3 rd) {
    vec2 h = vec2(0.001, 0.);
    float t = 0.;
    float tmax = 100.;
    
    for (int i = 0; i < 100; i++){
        if (abs(h.x) < 0.001*t || t > tmax) break;
        h = map(ro + t * rd);
        t += 0.25 * h.x;
    }
    
    if(t > tmax) h.y = -1.;
    
    return vec2(t, h.y);
}

float shadow( in vec3 ro, in vec3 rd, in float maxt)
{
	float res = 1.0;
    float dt = 0.04;
    float t = .02;
    for( int i=0; i < 20; i++ )
    {       
        float h = map(ro + rd*t).x;
        if( h<0.001 )
            return 0.0;
        res = min( res, maxt*h/t );
        t += h;
    }
    return res;
}

vec3 calcNormal( in vec3 pos, in float t )
{
    // show more detail the closer we are to the object
    vec3  eps = vec3(0.002 * t,0.0,0.0);
    vec3 nor;
    nor.x = map(pos+eps.xyy).x - map(pos-eps.xyy).x;
    nor.y = map(pos+eps.yxy).x - map(pos-eps.yxy).x;
    nor.z = map(pos+eps.yyx).x - map(pos-eps.yyx).x;
    return normalize(nor);
}

void main()
{
	vec2 q = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = -1.0 + 2.0 * q;
    p.x *= u_resolution.x/u_resolution.y;

	
    // camera
	float an1 = 0.2*u_time;//-6.2831*mo.x;
	float an2 = clamp( 0.8 + 0.6*sin(2.2+u_time*0.11), 0.3, 1.35 );
    vec3 ro = 10.0*normalize(vec3(sin(an2)*cos(an1), cos(an2)-0.5, sin(an2)*sin(an1) ));
    vec3 ww = normalize(vec3(0.0,0.0,0.0) - ro);
    vec3 uu = normalize(cross( vec3(0.0,1.0,0.0), ww ));
    vec3 vv = normalize(cross(ww,uu));
    vec3 rd = normalize( p.x*uu + p.y*vv - 1.4*ww );

    // raymarch
    vec3 col =  vec3(0.);//texture( iChannel0, rd ).xyz;
    vec2 march = raymarch(ro, rd);
    
    vec3 light = normalize(vec3(0.9, 0.1, 0.9));
    vec3 ambient = 5. * vec3(0.1, 0.15, 0.2);
    float sundot = clamp(dot(rd,light),0.0,1.0);
    vec3 pos = ro + march.x * rd;
    
    // if we hit geometry
    if(march.y > 0.) {
        vec3 nor = calcNormal(pos, march.x);
        
        float lambert = clamp(dot(nor, light), 0., 1.);
        col = mapColour(pos, nor);
        col = mix( col, mapColour(pos, nor) * lambert, 0.8);
        
        //snow
        //float snow = clamp(dot(normalize(nor), vec3(0., 1., 0.)), 0., 1.);
        //snow = pow(snow, 5.);
        //col = mix(col, vec3(1.)*snow, clamp(rd.y + 1., 0., 1.)*0.5);
        
        // fog
        float fo = 1.-exp(-0.04*march.x );
        vec3 fco = 0.9*vec3(0.5,0.7,0.9) + 0.1*vec3(1.0,0.8,0.5)*pow( sundot, 4.0 );
		col = mix( col, fco, fo );
        
        float sh = shadow( pos, light, 10.);
    	col = 0.8*col + 0.2* col* sh ;// + ambient * (1.0 - sh);
    }
    
    // sky
    if(march.y < 0.){
        // sky colour        
        vec3 blueSky = vec3(0.3,.55,0.8);
        vec3 redSky = vec3(0.8,0.8,0.6);
        
        vec3 sky = mix(blueSky, redSky, 1.5*pow(sundot, 8.));
        
        col =  sky*(1.0-0.8*rd.y);
        
        // // stars
        // float s = texture( iChannel0, rd.xz * 1.25, -100. ).x;
        // s += texture( iChannel0, rd.xz* 4., -100. ).x;
        
        // s = pow(s, 17.0) * 0.00005 * max(rd.y, -0.2) * pow((1. - max(sundot, 0.)), 2.); 
        // if (s > .0)
        // {
        //     vec3 backStars = vec3(s);
        //     col += backStars;
        // }
        
        // sun
        col += 0.1*vec3(0.9, 0.3, 0.9)*pow(sundot, 0.5);
        col += 0.2*vec3(1., 0.7, 0.7)*pow(sundot, 1.);
        col += 0.95*vec3(1.)*pow(sundot, 256.);
        
        // clouds
        float cloudSpeed = 0.01;
        float cloudFlux = 0.5;
        
        // layer 1
        vec3 cloudColour = mix(vec3(1.0,0.95,1.0), 0.35*redSky,pow(sundot, 2.));
        
		vec2 sc = cloudSpeed * 50.*u_time * ro.xz + rd.xz*(1000.0-ro.y)/rd.y;
		col = mix( col, cloudColour, 0.5*smoothstep(0.5,0.8,fbm(0.0005*sc+fbm(0.0005*sc+u_time*cloudFlux))));
        
        // cloud layer 2
        sc = cloudSpeed * 30.*u_time * ro.xz + rd.xz*(500.0-ro.y)/rd.y;
		col = mix( col, cloudColour, 0.5*smoothstep(0.5,0.8,fbm(0.0002*sc+fbm(0.0005*sc+u_time*cloudFlux))));
        
        // horizon        
        col = mix( col, 0.9*vec3(0.9,0.75,0.8), pow( 1.-max(rd.y+0.1,0.0), 8.0));
        
        
    }
    // contrast
    col = clamp(col, 0., 1.);
    col = col*col*(3.0-2.0*col);
    
    
    // saturation (amplify colour, subtract grayscale)
    float sat = 0.2;
    col = col * (1. + sat) - sat*dot(col, vec3(0.33));
    
    // vignette
    col = col * (1.0 - dot(p, p) * 0.1);
    
	gl_FragColor = vec4(col,1.0);
}