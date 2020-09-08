attribute vec3 position;

uniform mat4 mvpMatrix;
uniform vec2 u_resolution;

vec2 resolution = u_resolution;

void main(void)
{
    float r = resolution.x / resolution.y;
    vec3 pos = position;
    pos.x *= r;

    pos.xy *= 200.;

    // pox.x += 1.;

    pos.z -= 3.;
    
    gl_Position  = mvpMatrix * vec4(pos, 1.0);
}