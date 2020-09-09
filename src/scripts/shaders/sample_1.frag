//https://iquilezles.org/www/articles/distfunctions/distfunctions.htm

precision highp float;

uniform vec2  u_resolution;
uniform float u_time;

float pi=acos(-1.);

float sol(vec3 pos) {
    return pos.y;
}

float cube(vec3 pos, vec3 off) {
    pos -= off;
    vec3 d = abs(pos) - vec3(0.5);
    return length(max(d, 0.0)) + min(max(d.x, max(d.y, d.z)), 0.0);
}

vec2 map(vec3 pos) {
    float closest = 1000.0;
    float id = -1.0;
    
    float dist = sol(pos);
    if (dist < closest) { closest = dist; id = 0.5; }
    
    dist = cube(pos, vec3(0.0, 0.48, 0.0));
    if (dist < closest) { closest = dist; id = 1.5; }
    
    return vec2(closest, id);
}

vec2 trace(vec3 ro, vec3 rd) {
    float depth = 0.0;
    float id = -1.0;
    for (int i = 0; i < 200; i++) {
        vec2 info = map(ro + rd * depth);
        if (abs(info.x) <= 0.001) {
            id = info.y;
            break;
        }
        depth += info.x;
    }
    return vec2(depth, id);
}

vec3 getSkyColor(vec3 rd) {
    vec3 sky = vec3(0.67, 0.79, 0.89);
    return mix(sky, vec3(1.0), clamp(rd.y * 5.0, 0.0, 1.0));
}

vec3 getTileColor(vec3 pos) {
    vec3 baseColor = vec3(0.9, 0.9, 0.9);
    vec3 u = mod(floor(pos * 2.0), 2.0);
    float att = 1.0 - clamp(abs(u.x - u.z), 0.0, 0.2);
    return vec3(baseColor * att);
}

vec3 getColor(float id, vec3 pos, vec3 rd) {
    if (id < -0.5) { return getSkyColor(rd); } // sky
    if (id < 1.0) { return getTileColor(pos); } // ground
    if (id < 2.0) { return vec3(1.0, 0.5, 0.0); }
    return vec3(1.0, 0.0, 0.0); // red for undefined
}

vec3 getNormal(vec3 pos) {
    const float epsilon = 0.001;
    float mapped = map(pos).x;
    return normalize(vec3(
        mapped - map(vec3(pos.x - epsilon, pos.yz)).x,
        mapped - map(vec3(pos.x, pos.y - epsilon, pos.z)).x,
        mapped - map(vec3(pos.x, pos.y, pos.z - epsilon)).x
    ));
}

float getShadowIntensity(vec3 ro, vec3 rd) {
    float depth = 1e-3;
    float res = 1.0;
    for (int i = 0; i < 25; i++) {
        vec2 info = map(ro + rd * depth);
        res = min(res, 20.0 * info.x / depth);
        if (res < 1e-3) { break; }
        depth += info.x;
    }
    return res;
}

vec3 rand3d(float f) {
    return fract(sin(
        vec3(f) * vec3(12.456, 92.125, 102.215)
    ) * 41235.56) * 2.0 - 1.0;
}

float getAmbientOcclusion(vec3 pos, vec3 n) {
    float totalAO = 0.0;
    for (int i = 0; i < 25; i++) {
        vec3 ray = rand3d(float(i));
        ray = pow(ray, vec3(3.0));
        ray = sign(dot(ray, n)) * ray;
        vec2 info = map(pos + n * 1e-3 + 0.15 * ray);
        totalAO += clamp(info.x * 48.0, 0.0, 1.0);
    }
    totalAO /= 25.0;
    return clamp(totalAO, 0.0, 1.0);
}

vec2 mapRefr(vec3 pos) {
    float closest = 1000.0;
    float id = -1.0;
    
    float dist = sol(pos);
    if (dist < closest) { closest = dist; id = 0.5; }

    // We removed the ball here (as it is refractive material)
    
    return vec2(closest, id);
}

vec3 getNormalRefr(vec3 pos) {
    const float epsilon = 0.001;
    float mapped = mapRefr(pos).x;
    return normalize(vec3(
        mapped - mapRefr(vec3(pos.x - epsilon, pos.yz)).x,
        mapped - mapRefr(vec3(pos.x, pos.y - epsilon, pos.z)).x,
        mapped - mapRefr(vec3(pos.x, pos.y, pos.z - epsilon)).x
    ));
}

// traceRefr takes up less iterations, so to save cycles.
vec2 traceRefr(vec3 ro, vec3 rd) {
    float depth = 0.0;
    float id = -1.0;
    for (int i = 0; i < 100; i++) {
        vec2 info = mapRefr(ro + rd * depth);
        if (abs(info.x) <= 0.001) {
            id = info.y;
            break;
        }
        depth += info.x;
    }
    return vec2(depth, id);
}
void main() 
{
    vec2 p = (gl_FragCoord.xy * 2.- u_resolution) / min(u_resolution.y, u_resolution.x);
	vec2 xy = p;

    vec3 ro = vec3(3.0 * sin(u_time), 2.0, 3.0 * cos(u_time));
    vec3 center = vec3(0.0, 0.5, 0.0);

    vec3 front = normalize(center - ro);
    vec3 right = normalize(cross(front, vec3(0.0, 1.0, 0.0)));
    vec3 up = normalize(cross(right, front));
    
    mat4 lookAt = mat4(
        vec4(right, 0.0),
        vec4(up, 0.0),
        vec4(front, 0.0),
        vec4(0.0, 0.0, 0.0, 1.0)
    );
    vec3 rd = normalize(vec3(lookAt * vec4(xy, 2.0, 1.0)));

    vec2 info = trace(ro, rd);
    vec3 pos = ro + rd * info.x;
    vec3 n = getNormal(pos);

    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));

    vec3 light = vec3(1.0);
    if (info.y > 0.0 && info.y < 1.0) {
        light = vec3(0.0);
        float ambient = 1.0;
        float diffuse = max(dot(n, lightDir), 0.0);
        float dome = 0.2 + 0.8 * clamp(n.y, 0.0, 1.0);
        float sol = 0.2 + 0.8 * clamp(-n.y, 0.0, 1.0);
        float back = max(dot(n, vec3(-lightDir.x, 0.0, -lightDir.z)), 0.0);
        float shadow = getShadowIntensity(pos + n * 1e-3, lightDir);
        float ao = getAmbientOcclusion(pos, n);

        light += ambient * vec3(0.22, 0.22, 0.1) * shadow * ao;
        light += diffuse * vec3(0.97, 0.99, 0.99) * shadow;
        light += dome * vec3(0.19, 0.20, 0.26) * 2.0 * ao;
        light += sol * vec3(0.2, 0.22, 0.22) * ao;
        light += back * vec3(0.1, 0.11, 0.2) * ao;
    } else if (info.y > 1.0 && info.y < 2.0) { // refraction
        vec3 refr = refract(rd, n, 1.0 / 1.33); // water
        info = traceRefr(pos, refr); // trace along the refracted place
        
        light = vec3(1.0);
        pos = pos + refr * info.x; // get traced refracted position
        n = getNormalRefr(pos); // get traced normal
        if (info.y > 0.0 && info.y < 1.0) { // calc lighting
            light = vec3(0.0);
            float ambient = 1.0;
            float diffuse = max(dot(n, lightDir), 0.0);
            float dome = 0.2 + 0.8 * clamp(n.y, 0.0, 1.0);
            float sol = 0.2 + 0.8 * clamp(-n.y, 0.0, 1.0);
            float back = max(dot(n, vec3(-lightDir.x, 0.0, -lightDir.z)), 0.0);
            float shadow = getShadowIntensity(pos + n * 1e-3, lightDir);
            float ao = getAmbientOcclusion(pos, n);
    
            light += ambient * vec3(0.22, 0.22, 0.1) * shadow * ao;
            light += diffuse * vec3(0.97, 0.99, 0.99) * shadow;
            light += dome * vec3(0.19, 0.20, 0.26) * 2.0 * ao;
            light += sol * vec3(0.2, 0.22, 0.22) * ao;
            light += back * vec3(0.1, 0.11, 0.2) * ao;
        }
    }

    vec3 objColor = getColor(info.y, pos, rd) * light;
    objColor = pow(objColor, vec3(0.4545));

    gl_FragColor = vec4(objColor, 1.0);
}
