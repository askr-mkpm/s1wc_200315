attribute vec3 position;

uniform mat4 mvpMatrix;
uniform vec2 resolution;

void main(void)
{
    float r = resolution.x / resolution.y;
    vec3 pos = position;
    pos.x *= r;
    gl_Position  = mvpMatrix * vec4(pos, 1.0);
}