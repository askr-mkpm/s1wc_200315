precision mediump float;

uniform sampler2D texture;
uniform vec2 resolution;

float intensity(in vec4 color)
{
	return sqrt((color.x*color.x)+(color.y*color.y)+(color.z*color.z));
}

//https://www.forceflow.be/thesis/thesis-code/(CC BY-NC-SA 3.0)
vec3 sobel(vec2 r, vec2 center)
{
		  // get samples around pixel
    float tleft = intensity(texture2D(texture,center + vec2(-r.x,r.y)));
    float left = intensity(texture2D(texture,center + vec2(-r.x,0)));
    float bleft = intensity(texture2D(texture,center + vec2(-r.x,-r.y)));
    float top = intensity(texture2D(texture,center + vec2(0,r.y)));
    float bottom = intensity(texture2D(texture,center + vec2(0,-r.y)));
    float tright = intensity(texture2D(texture,center + vec2(r.x,r.y)));
    float right = intensity(texture2D(texture,center + vec2(r.x,0)));
    float bright = intensity(texture2D(texture,center + vec2(r.x,-r.y)));

      // Sobel masks (to estimate gradient)
      //        1 0 -1     -1 -2 -1
      //    X = 2 0 -2  Y = 0  0  0
      //        1 0 -1      1  2  1

    float x = tleft + 2.0*left + bleft - tright - 2.0*right - bright;
    float y = -tleft - 2.0*top - tright + bleft + 2.0 * bottom + bright;
    float color = sqrt((x*x) + (y*y));
	  // if (color > limit){return vec3(0.0,0.0,0.0);}
    // return vec3(1.0,1.0,1.0);

    return vec3(color);
}

void main()
{
	vec2 uv = gl_FragCoord.xy / resolution;
	vec2 r = vec2(1. / resolution.x, 1. / resolution.y);

	gl_FragColor = vec4(sobel(r, uv),1.);
}