import {PureBase} from './libs';
import {matIV} from './libs';
import {minPrimitive} from './libs';

import vertQuad from '../shaders/vertQuad.vert';
import fragQuad from '../shaders/fragQuad.frag';
import raymarchHeart from '../shaders/raymarchHeart.frag';
import Byob from '../shaders/Byob.frag';
import Sobel from '../shaders/Sobel.frag';
import s1main from '../shaders/s1main.frag';
import vertMatQuad from '../shaders/vertMatQuad.vert';
import vertBg from '../shaders/vertBg.vert';
import fragBg from '../shaders/fragBg.frag';
import fragNoise from '../shaders/fragNoise.frag';
import vertShadow from '../shaders/vertShadow.vert';
import fragShadow from '../shaders/fragShadow.frag';

const m = new matIV();
const mp = new minPrimitive();
let gl: WebGLRenderingContext;
let cw: number;
let ch: number;
let startTime: number;
let pb: PureBase;

let rayPrg: WebGLProgram;
let mainPrg: WebGLProgram;
let s1_byobPrg: WebGLProgram;
let s1_sobelPrg: WebGLProgram;
let s1_mainPrg: WebGLProgram;
let s1_quadPrg: WebGLProgram;
let s2_bgPrg: WebGLProgram;
let s2_shadPrg: WebGLProgram;
let s2_noisePrg: WebGLProgram;

export class PureRaymarch
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

        rayPrg = pb.createProgram(vertQuad, raymarchHeart);
        mainPrg = pb.createProgram(vertQuad, fragQuad);
        s1_byobPrg = pb.createProgram(vertQuad, Byob);
        s1_sobelPrg = pb.createProgram(vertQuad, Sobel);
        s1_mainPrg = pb.createProgram(vertQuad, s1main);
        s1_quadPrg = pb.createProgram(vertMatQuad, fragQuad);
        s2_bgPrg = pb.createProgram(vertBg, fragBg);
        s2_shadPrg = pb.createProgram(vertShadow, fragShadow);
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

        let s1_byobBuffer = pb.createFrameBuffer(cw, ch);
        let s1_sobelBuffer = pb.createFrameBuffer(cw, ch);
        let s1_rayBuffer = pb.createFrameBuffer(cw, ch);
        let s1_mainBuffer = pb.createFrameBuffer(cw, ch);
        let s2_NoiseBuffer = pb.createFrameBuffer(cw, ch);
        let mainBuffer = pb.createFrameBuffer(cw,ch);

        startTime = new Date().getTime();

        let renderRaymarch = function(target, time, width, height)
        {
            gl.bindFramebuffer(gl.FRAMEBUFFER, target);

            pb.clear(0.,0.,0.,1.,1.);
            gl.viewport( 0, 0, width, height);
            gl.useProgram(rayPrg);
            gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );
            
            pb.setAttribute(rayPrg, quadVboList, 'position', 3);

            pb.uniform1f(rayPrg, 'u_time', time);
            pb.uniform2fv(rayPrg, 'u_resolution',[width, height]);

            gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
        }

        let renderMain = function(target, buffer)
        {
            gl.bindFramebuffer(gl.FRAMEBUFFER, target);

            pb.clear(0.,0.,0.,1.,1.);
            gl.viewport( 0, 0, cw, ch);
            gl.useProgram(mainPrg);
            // gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );
            
            pb.setAttribute(mainPrg, quadVboList, 'position', 3);

            pb.uniform2fv(mainPrg, 'resolution',[cw, ch]);
            pb.uniform1i(mainPrg, 'texture', 0);

            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, buffer);

            gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
        }

        let renderByob = function(target, width, height)
        {
            gl.bindFramebuffer(gl.FRAMEBUFFER, target);

            pb.clear(0.,0.,0.,1.,1.);
            gl.viewport( 0, 0, width, height);
            gl.useProgram(s1_byobPrg);
            // gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );
            
            pb.setAttribute(s1_byobPrg, quadVboList, 'position', 3);

            pb.uniform2fv(s1_byobPrg, 'u_resolution',[width, height]);

            gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
        }

        let renderSobel = function(target, buffer, width, height)
        {
            gl.bindFramebuffer(gl.FRAMEBUFFER, target);

            pb.clear(0.,0.,0.,1.,1.);
            gl.viewport( 0, 0, width, height);
            gl.useProgram(s1_sobelPrg);
            // gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );
            
            pb.setAttribute(s1_sobelPrg, quadVboList, 'position', 3);

            pb.uniform1i(s1_sobelPrg, 'texture', 0);
            pb.uniform2fv(s1_sobelPrg, 'resolution',[width, height]);

            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, buffer);

            gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
        }

        let renders1main = function(target, buffer_byob, buffer_sobel, width, height)
        {
            gl.bindFramebuffer(gl.FRAMEBUFFER, target);

            pb.clear(0.,0.,0.,1.,1.);
            gl.viewport( 0, 0, width, height);
            gl.useProgram(s1_mainPrg);
            // gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );
            
            pb.setAttribute(s1_mainPrg, quadVboList, 'position', 3);

            pb.uniform2fv(s1_mainPrg, 'resolution',[width, height]);
            pb.uniform1i(s1_mainPrg, 'texture_byob', 0);
            pb.uniform1i(s1_mainPrg, 'texture_sobel', 1);

            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, buffer_byob);
            gl.activeTexture(gl.TEXTURE1);
            gl.bindTexture(gl.TEXTURE_2D, buffer_sobel);

            gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
        }

        let renders1quad = function(target, buffer, width, height)
        {
            gl.bindFramebuffer(gl.FRAMEBUFFER, target);

            gl.viewport( 0, 0, width, height);
            gl.useProgram(s1_quadPrg);
            // gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );
            
            pb.setAttribute(s1_quadPrg, quadVboList, 'position', 3);

            pb.uniformMatrix4fv(s1_quadPrg, 'mvpMatrix', mvpMatrix);
            pb.uniform2fv(s1_quadPrg, 'resolution',[width, height]);
            pb.uniform1i(s1_quadPrg, 'texture', 0);

            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, buffer);

            m.identity(mMatrix);
            m.multiply(tmpMatrix, mMatrix, mvpMatrix);

            gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
        }

        let renders2Bg = function(target, width, height, time)
        {
            gl.bindFramebuffer(gl.FRAMEBUFFER, target);

            gl.viewport( 0, 0, width, height);
            gl.useProgram(s2_bgPrg);
            gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );
            
            pb.setAttribute(s2_bgPrg, quadVboList, 'position', 3);

            pb.uniformMatrix4fv(s2_bgPrg, 'mvpMatrix', mvpMatrix);
            pb.uniform2fv(s2_bgPrg, 'resolution',[width, height]); 
            pb.uniform1f(s2_bgPrg, 'time',time);

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

        let renderShad = function(target,width, height)
        {
            gl.bindFramebuffer(gl.FRAMEBUFFER, target);

            gl.viewport( 0, 0, width, height);
            gl.useProgram(s2_shadPrg);
            // gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );
            
            pb.setAttribute(s2_shadPrg, quadVboList, 'position', 3);

            pb.uniformMatrix4fv(s2_shadPrg, 'mvpMatrix', mvpMatrix);
            pb.uniform2fv(s2_shadPrg, 'resolution',[width, height]);

            m.identity(mMatrix);
            m.multiply(tmpMatrix, mMatrix, mvpMatrix);

            gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
        }
        //-------------

        let render = function()
        {
            let time = (new Date().getTime() - startTime) * 0.001;

            gl.disable(gl.DEPTH_TEST);

            renders2Bg(s2_NoiseBuffer.f, cw, ch, time);
            renderShad(s2_NoiseBuffer.f, cw, ch);
            renderByob(s1_byobBuffer.f, cw, ch);
            renderRaymarch(s1_rayBuffer.f, time, cw, ch);
            renderSobel(s1_sobelBuffer.f, s1_rayBuffer.t, cw, ch);
            renders1main(s1_mainBuffer.f, s1_byobBuffer.t, s1_sobelBuffer.t, cw, ch);
            renders1quad(s2_NoiseBuffer.f, s1_mainBuffer.t, cw, ch);
            renderNoise(mainBuffer.f, s2_NoiseBuffer.t, cw, ch);
            renderMain(null, mainBuffer.t);
            // renderMain(null, .t);

            gl.flush();

            requestAnimationFrame(render);
        }

        render();

    }

    // public resize(): void
    // {
    //     cw = window.innerWidth;
    //     ch = window.innerHeight;
    
    //     gl.canvas.width  = cw;
    //     gl.canvas.height = ch;
        
    //     gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    //     pb.uniform2fv(rayPrg, 'u_resolution',[cw, ch]);
    //     pb.uniform2fv(mainPrg, 'resolution',[cw, ch]);
    //     pb.uniform2fv(s1_byobPrg, 'u_resolution',[cw, ch]);
    //     pb.uniform2fv(s1_sobelPrg, 'resolution',[cw, ch]);
    //     pb.uniform2fv(s1_mainPrg, 'resolution',[cw, ch]);
    //     pb.uniform2fv(s1_quadPrg, 'resolution',[cw, ch]);
    //     pb.uniform2fv(s2_bgPrg, 'resolution',[cw, ch]);
    //     pb.uniform2fv(s2_noisePrg, 'resolution',[cw, ch]);
    //     pb.uniform2fv(s2_shadPrg, 'resolution',[cw, ch]);
    // }
}