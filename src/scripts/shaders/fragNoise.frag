precision highp float;

uniform vec2 resolution;
uniform sampler2D texture;

float rand(vec2 co)
{
    return fract(sin(dot(co,vec2(12.9898, 78.233))) * 43758.5453);
}

//https://www.shadertoy.com/view/4ttXWM
float distortion = 0.3;			// the bias of the barrel distortion
const float iterations = 2.;	// how many samples to use for edge blur
float strength = 0.01;			// how much edge blur is applied (to obscure the r, g, b separation)
float separation = 0.03;			// how much to separate the r, g and b

vec4 Aberrate (sampler2D source, vec2 uv, float amount)
{
    float ct = iterations * 2.0;
    return texture2D(source, 0.5 + uv / sqrt(1.0 + amount * dot(uv, uv)))/ct;
}

void main() 
{
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec2 uv2 = gl_FragCoord.xy / resolution.xy - 0.5;
    vec4 tex = texture2D( texture, uv );

    vec4 A = vec4(0, 0, 0, 1);

    for (float i = -iterations; i < iterations; i++)
    {
        A.r += Aberrate(texture, uv2, i * strength + (distortion + separation)).r;
    }
    
    for (float i = -iterations; i < iterations; i++)
    {
        A.g += Aberrate(texture, uv2, i * strength + distortion).g;
    }
    
    for (float i = -iterations; i < iterations; i++)
    {
        A.b += Aberrate(texture, uv2, i * strength + (distortion - separation)).b;
    }
        
    tex = A;

    float nv = rand(uv);
    float noisePower = 0.2;

    nv *= noisePower;
    nv += 1.;

    tex *= nv;
    
    gl_FragColor = tex;
}