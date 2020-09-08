precision highp float;

uniform vec2 resolution;
uniform float time;

vec2 rand(vec2 co)
{
    vec2 rd = fract(sin(vec2( dot(co,vec2(127.1,311.7)),dot(co,vec2(269.5,183.3)) ))*43758.5453123);
    return rd * 2. - 1.;
}

//ref: https://thebookofshaders.com/11/
float noise(vec2 co) 
{
    vec2 i = floor(co);
    vec2 f = fract(co);
    vec2 u = f * f * (3. - 2. * f);

    vec2 r = vec2(1., 0.);
    vec2 a = rand(i + r.yy);
    vec2 b = rand(i + r.xy);
    vec2 c = rand(i + r.yx);
    vec2 d = rand(i + r.xx);

    float aa = dot(a, f - r.yy);
    float bb = dot(b, f - r.xy);
    float cc = dot(c, f - r.yx);
    float dd = dot(d, f - r.xx);

    return mix(mix(aa, bb, u.x), mix(cc, dd, u.x), u.y);
}

void main() 
{
    vec2 uv = gl_FragCoord.xy / resolution;

    vec3 color = vec3(1.0, 0.4824, 0.0);

    vec2 pos = vec2(uv.x*5.0 + time * -1., uv.y * 5.);

    color = vec3( noise(pos)*.5+.5 );
    // color *= color;

    vec3 c = mix(vec3(0.9), color, 0.15);

    vec4 col = vec4(uv.x, uv.y,1.,1.);
    // vec3 c = 0.5 + 0.5*cos(time+uv.xyx+vec3(0,2,4));


    gl_FragColor = col;
}