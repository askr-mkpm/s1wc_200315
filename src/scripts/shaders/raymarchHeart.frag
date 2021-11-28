precision highp float;

uniform float u_time;
uniform float u_time_date;
uniform vec2  u_resolution;
uniform int depthBool;//0 == false, 1 == true

vec2 resolution=u_resolution;
float time=u_time* 0.001;

float time_hour = floor(u_time_date/10000.);
float time_minutes = floor((u_time_date - time_hour*10000.) / 100.);
float time_seconds = floor((u_time_date - time_hour*10000. - time_minutes*100.));

float pi=acos(-1.);

mat2 rot(float a)
{
    float c=cos(a),s=sin(a);
    return mat2(c,s,-s,c);
}

float box(vec3 p,vec3 r)
{
    p=abs(p)-r;
    return max(max(p.x,p.y),p.z);
}

float sphere(vec3 p, float r)
{
    float d = length(p) - r;
    return d;
}

vec3 rep(vec3 p,float r)
{
    return mod(p,r)-.5*r;
}

float ifsbox(vec3 p)
{
    for(int i=0;i<3;i++)
    {
        p=abs(p)-2.;
    }
    return box(rep(p,9.),vec3(1.,4.,3.));
}

vec3 hsv(float h,float s,float v)
{
    return((clamp(abs(fract(h+vec3(0.,2.,1.)/3.)*6.-3.)-1.,0.,1.)-1.)*s+1.)*v;
}

//ref: https://www.iquilezles.org/www/articles/distfunctions/distfunctions.htm
float displacement(vec3 p, vec3 v) 
{
  return sin(v.x * p.x) * sin(v.y * p.y) * sin(v.z * p.z);
}

vec3 camOffset = vec3(7.2 * 0.8 + cos(time) * 0.2, -0. * -0.1 + sin(time) * 0.5, 1.9);

float spDisplace(vec3 p, float size, vec3 v)
{
    p += camOffset;
    float d1 = sphere(p, size);
    float d2 = displacement(p, v);
    return d1+d2;
}

float rootSpeed = time  * 30.;

float sceneHeart(vec3 p, float size)
{
    float d;
    p.z -= rootSpeed;
    p.z -= 5.;

    float d1 = sphere(p + vec3(3. + cos(time), 0.5 - 0.5*sin(time),0.), size * 0.8);
    float d2 = spDisplace(p, size, vec3(time_hour));//sphere(p, size);

    d = mix(d1, d2, smoothstep(0.3, 0.7, sin(u_time* 0.001 / 1.5)));

    return d;
}

vec3 repz(vec3 p,float r)
{
    p.z = mod(p.z, r) - 0.5 * r;
    return p;
}

vec3 ifsPos(vec3 p)
{
    for(int i=0;i<3;i++)
    {
        p = abs(p) - 0.5;
        p.xy *= rot(0.7);
        // p.zx *= rot(0.8);
    }
    return p;
}

float load(vec3 p)
{
    float d;

    float sf = floor(time_seconds/10.);

    vec2 s1 = vec2(1.+sf/10., 0.15);
    vec2 s2 = vec2(0.3+sf/10., 0.01);
    vec2 s3 = vec2(2.+sf/3., 0.5);

    vec3 p1;
    p1 = abs(p);
    p1.x -= 0.5;
    p1.y += 0.3;
    p1.xy *= rot(0.25 * pi*sf);



    vec3 p2;
    p2 = abs(p);
    float dx = box(rep(p1, 7.-sf), vec3(s1.xyy));
    float dy = box(rep(p1, 6.+sf), vec3(s1.yxy));
    float dz = box(rep(p2, 112.), vec3(s2.yyx));

    vec3 p3;
    p3 = p;
    p3.xy *= rot(0.5*sf * pi);
    float dx_a = box(rep(p3, 9.+sf), vec3(s1.xyy));
    float dy_a = box(rep(p3, 5.-sf), vec3(s1.yxy));
    float dz_a = box(rep(p3, 82.), vec3(s1.yyx));

    vec3 p4 = p;
    // p4.xy *= 4.;
    p4.x += sin(p4.z ) * .8;
    p4.y += cos(p4.z ) * .8;
    float d4 = length(p4.xy) - abs(sin(time)) * 0.1;

    vec3 p5 = p;
    p5 = abs(p5);
    p5.x += 0.3 * sin(time * 1.) + 5.;
    p5.y += 0.;
    float dx_b = box(rep(p5, 9.), vec3(s3.xyy));
    float dy_b = box(rep(p5, 5.), vec3(s3.yxy));
    float dz_b = box(rep(p5, 5.), vec3(s3.yyx));
    
    float d1 = dx;
    d1 = min(d1, dy);
    d1 = min(d1, dz);

    float d2 = dx_a;
    d2 = min(d2, dy_a);
    d2 = min(d2, dz_a);

    float d3 = dx_b;
    d3 = min(d3, dy_b);
    d3 = min(d3, dz_b);

    d = min(d1, d2);
    d = max(d, d3);
    // d = min(d, d4);

    return d;
}

float sceneLoad(vec3 p)
{
    float d;

    d = load(p);//load(ifsPos(p));
    // d = min(d, particle(p, 0.5, 3.));
    // d = min(d, particle(p, 3., 1.));
    
    return d;
}

float map(vec3 p)
{
    float m;

    float t = u_time*0.001 ;
    float tt = t - floor(t);
    float size = exp(abs(tt - 0.5) * -1. * 15.)/2.;
    size += 2.5;

    float dh = sceneHeart(p, size);
    float dl = sceneLoad(p);

    m = min(dh, dl);
    // m= dl;

    return m;
}

vec3 fog(vec3 col, vec3 fogCol, float dist, float val) 
{
    float value = 1. - exp(-1. * dist * val);
    return mix(col, fogCol, value);
}

vec3 rayMarching(vec3 ro, vec3 rd) 
{
    vec3 rayCol;
    ro.z += rootSpeed;

    float sceneDist;
    float rayDepth = floor(time_minutes/10.);

    for(int i = 0; i < 100; i++) 
    {
        sceneDist = map(ro + rd * rayDepth);

        if(sceneDist < 0.001) 
        {
            break;
        }

        rayDepth += sceneDist;
    }

    if(rayDepth > 80.) 
    {
        vec3 bgCol = vec3(0.);
        vec3 d_bgCol = vec3(0.);

        if(depthBool == 1)
        {
            rayCol = d_bgCol;
        }else{
            rayCol = bgCol;
        }
        
        return rayCol;
    }

    vec3 rayPos = ro + rd * rayDepth;

    rayCol = vec3(1.);
    rayCol = fog(rayCol, vec3(0.0, 0.0, 0.0), rayDepth, 0.07);

    float d = 20. / rayDepth * 0.8 ;
    vec3 depthCol = vec3(1.) * d;

    vec3 mainCol;
    if(depthBool == 1)
    {
        mainCol = depthCol;
    }else{
        mainCol = rayCol;
    }

    return mainCol;
}

void main()
{
    vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);
    
    float mf = time_minutes;
    // mix(25., -25., step(mf, 30.))
    //  floor(mf/10.)*5.
    
    vec3 ro = vec3((mf - floor(mf/10.)*10.), floor(mf/10.), -25.);
    // vec3 ro = vec3(0.,0.,-25.);
    ro += camOffset;

    vec3 ta = vec3(0.);

    vec3 z = normalize(ta - ro);
    vec3 up = vec3(0., 1., 0.);

    vec3 x = normalize(cross(z, up));
    vec3 y = normalize(cross(x, z));

    vec3 rd = normalize(x * p.x + y * p.y + z * 2.5 );

    vec3 c = rayMarching(ro, rd);

    gl_FragColor=vec4(c, 1.);
}