precision highp float;

uniform vec2 resolution;
uniform sampler2D texture;

float rand(vec2 co)
{
    return fract(sin(dot(co,vec2(12.9898, 78.233))) * 43758.5453);
}

void main() 
{
    vec2 uv = gl_FragCoord.xy / resolution;
    vec4 tex = texture2D( texture, uv );

    float nv = rand(uv);
    float noisePower = 0.3;

    nv *= noisePower;
    nv += 1.;

    tex *= nv;
    
    gl_FragColor = tex;
}