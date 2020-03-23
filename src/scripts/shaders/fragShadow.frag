precision highp float;

uniform vec2 resolution;

void main() 
{
    vec2 uv = gl_FragCoord.xy / resolution;
    vec4 col = vec4(vec3(0.4), 1.);
    gl_FragColor = col;
}