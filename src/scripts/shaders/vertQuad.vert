attribute vec3 position;
// uniform float u_time_date;

void main(void){
	gl_Position = vec4(position, 1.0);
}