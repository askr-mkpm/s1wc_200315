precision highp float;

uniform vec2 resolution;
uniform sampler2D texture_byob;
uniform sampler2D texture_sobel;

void main() 
{
    vec2 uv = gl_FragCoord.xy / resolution;
    vec4 tex_ray = texture2D( texture_byob, uv );
    vec4 tex_sobel = texture2D(texture_sobel, uv); 

    tex_ray += tex_sobel;
    
    gl_FragColor = tex_ray;
}