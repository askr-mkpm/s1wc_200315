attribute vec3 position;

uniform mat4 mvpMatrix;
uniform vec2 resolution;

void main(void)
{
    float r = resolution.x / resolution.y;
    vec3 pos = position;
    pos.x *= r;
    // pos.y *= r * 0.009 + 1.;

    pos.x *= 1.03;
    pos.y *= 1.02;
    pos.y *= 1. + pow(resolution.x / 10000., 2.2);
    gl_Position = mvpMatrix * vec4(pos, 1.0);
}