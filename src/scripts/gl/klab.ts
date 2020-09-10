import {PureBase} from './libs';
import {matIV} from './libs';
import {minPrimitive} from './libs';

import vertQuad from '../shaders/vertQuad.vert';
import vertBg from '../shaders/vertBg.vert';
import fragBg from '../shaders/fragBg.frag';
import fakeFluid from '../shaders/fakefluid.frag';
import reflection from '../shaders/reflection.frag';
import fragNoise from '../shaders/fragNoise.frag';
import fluid from '../shaders/fluid.frag';
import bubble from '../shaders/bubble.frag';

const m = new matIV();
const mp = new minPrimitive();
let gl: WebGLRenderingContext;
let cw: number;
let ch: number;
let startTime: number;
let pb: PureBase;

let s2_bgPrg: WebGLProgram;
let s2_noisePrg: WebGLProgram;

export class klab
{
    constructor(canvas: HTMLCanvasElement)
    {
        cw = window.innerWidth;
        ch = window.innerHeight;
        canvas.width = cw;
        canvas.height = ch;

        gl = canvas.getContext("webgl");
        pb = new PureBase(gl);

        gl.getExtension('OES_texture_float');
        gl.getExtension('OES_float_linear');
        gl.getExtension('OES_texture_half_float');

        s2_bgPrg = pb.createProgram(vertBg, bubble);
        s2_noisePrg = pb.createProgram(vertQuad, fragNoise);
    }

    public init(): void
    {
        const quadPos = mp.quad();
        const quadVbo: WebGLBuffer = pb.createVbo(quadPos);
        const quadVboList: WebGLBuffer[] = [quadVbo];

        const mMatrix = m.identity(m.create());
        const vMatrix = m.identity(m.create());
        const pMatrix = m.identity(m.create());
        const tmpMatrix = m.identity(m.create());
        const mvpMatrix = m.identity(m.create());
        m.lookAt([0.0, 0.0, 5.0], [0, 0, 0], [0, 1, 0], vMatrix);
        m.perspective(45, cw / ch, 0.1, 10.0, pMatrix);
        m.multiply(pMatrix, vMatrix, tmpMatrix);

        // テクスチャ関連
        var cubeTexture = null;
        
        // キューブマップ用イメージのソースを配列に格納
        var cubeSourse = new Array( './images/cube_PX.png',
                                    './images/cube_PY.png',
                                    './images/cube_PZ.png',
                                    './images/cube_NX.png',
                                    './images/cube_NY.png',
                                    './images/cube_NZ.png');
        

        // キューブマップ用のターゲットを格納する配列
        var cubeTarget = new Array( gl.TEXTURE_CUBE_MAP_POSITIVE_X,
                                    gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
                                    gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
                                    gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
                                    gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
                                    gl.TEXTURE_CUBE_MAP_NEGATIVE_Z);
        
        // キューブマップテクスチャの生成
        pb.create_cube_texture(cubeSourse, cubeTarget, cubeTexture);

        let s2_NoiseBuffer = pb.createFrameBuffer(cw, ch);

        startTime = new Date().getTime();

        let renders2Bg = function(target, width, height, time)
        {
            gl.bindFramebuffer(gl.FRAMEBUFFER, target);

            gl.viewport( 0, 0, width, height);
            gl.useProgram(s2_bgPrg);
            gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );
            
            pb.setAttribute(s2_bgPrg, quadVboList, 'position', 3);

            pb.uniformMatrix4fv(s2_bgPrg, 'mvpMatrix', mvpMatrix);
            pb.uniform2fv(s2_bgPrg, 'u_resolution',[width, height]); 
            pb.uniform1f(s2_bgPrg, 'u_time',time);

            pb.uniform1i(s2_bgPrg, 'cubeTexture', 0);
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_CUBE_MAP, cubeTexture);

            console.log(cubeTexture);

            m.identity(mMatrix);
            m.multiply(tmpMatrix, mMatrix, mvpMatrix);

            gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
        }

        let renderNoise = function(target, buffer, width, height)
        {
            gl.bindFramebuffer(gl.FRAMEBUFFER, target);

            pb.clear(0.,0.,0.,1.,1.);
            gl.viewport( 0, 0, width, height);
            gl.useProgram(s2_noisePrg);
            // gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );
            
            pb.setAttribute(s2_noisePrg, quadVboList, 'position', 3);

            pb.uniform2fv(s2_noisePrg, 'resolution',[width, height]);
            pb.uniform1i(s2_noisePrg, 'texture', 0);

            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, buffer);

            gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
        }

        //-------------

        let render = function()
        {
            let time = (new Date().getTime() - startTime) * 0.001;

            gl.disable(gl.DEPTH_TEST);

            renders2Bg(s2_NoiseBuffer.f, cw, ch, time);
            renderNoise(null, s2_NoiseBuffer.t, cw, ch);

            gl.flush();

            requestAnimationFrame(render);
        }

        render();

    }
}