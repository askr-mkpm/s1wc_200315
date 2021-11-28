precision highp float;

uniform vec2 u_resolution;
uniform float u_time_date;

vec2 resolution = u_resolution;

const float pi = acos(-1.);

float time_hour = floor(u_time_date/10000.);

float rand(vec2 co)
{
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

//https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float noise(vec2 p, float freq )
{
	float unit = resolution.x / freq;
	vec2 ij = floor(p/unit);
	vec2 xy = mod(p,unit)/unit;
	xy = .5*(1.-cos(pi*xy));
	float a = rand((ij+vec2(0.,0.)));
	float b = rand((ij+vec2(1.,0.)));
	float c = rand((ij+vec2(0.,1.)));
	float d = rand((ij+vec2(1.,1.)));
	float x1 = mix(a, b, xy.x);
	float x2 = mix(c, d, xy.x);
	return mix(x1, x2, xy.y);
}

float pNoise(vec2 p, int res)
{
	float persistance = .5;
	float n = 0.;
	float normK = 0.;
	float f = 4.;
	float amp = 1.;
	int iCount = 0;
	for (int i = 0; i<50; i++)
	{
		n+=amp*noise(p, f);
		f*=2.;
		normK+=amp;
		amp*=persistance;
		if (iCount == res) break;
		iCount++;
	}
	float nf = n/normK;
	return nf*nf*nf*nf;
}

vec3 byob(vec2 cuv, vec3 col_1, vec3 col_2)
{
    vec3 col;
    float cm = 0.8;
    col_1 *= cm;
    col_2 *= cm;
    // vec3 col_1 = vec3(1.0, 0.902, 0.0) * cm;
    // vec3 col_2 = vec3(1.0, 0.8118, 0.2) * cm;

    float t = mod(floor(cuv.x) + floor(cuv.y), 2.);

    col = mix(col_1, col_2, t);

    return col;
}

vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

vec3 rgb2hsv(vec3 c)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

void main() 
{
    vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);
    vec2 cuv = gl_FragCoord.xy / resolution;

    cuv.x *= resolution.x / resolution.y;
    cuv *= 13.;

    vec4 col_1 = vec4(byob(cuv, vec3(1.0, 0.902, 0.0), vec3(1.0, 0.8118, 0.2)), 1.);
    vec4 col_2 = vec4(byob(cuv * 3. + vec2(0.7), vec3(1.0, 0.9451, 0.4667), vec3(1.0, 0.8627, 0.4157)) + vec3(0.2), 0.1);
    vec4 col_3 = vec4(byob(cuv * 1.5 + vec2(-0.7, 0.2), vec3(1.0, 0.9451, 0.4667), vec3(1.0, 0.8627, 0.4157)) + vec3(0.2), 0.1);
    vec4 col_4 = vec4(byob(cuv * 4. + vec2(0.2, 0.4), vec3(1.0, 0.9686, 0.6941), vec3(1.0, 0.8745, 0.4667)) + vec3(0.2), 0.1);

    vec4 col = col_1;
    col *= col_2;
    col *= col_3;
    col *= col_4;
    col.rgb += vec3(0.09);

	vec3 col_hsv = rgb2hsv(col.rgb);
	vec4 col_s = vec4(hsv2rgb(vec3(col_hsv.x, 0., col_hsv.z-0.2)), 1.);
    
    gl_FragColor = mix(col, col_s, step(time_hour,12.));
}