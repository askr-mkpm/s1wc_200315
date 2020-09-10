let gl: WebGLRenderingContext;
export class PureBase
{
    constructor(webgl: WebGLRenderingContext)
    {
        gl = webgl;
    }

    public createProgram(vert : string, frag : string) : WebGLProgram 
    {
        const vertexShader = gl.createShader(gl.VERTEX_SHADER)!;
        this.compileShader(vertexShader, vert);

        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!;
        this.compileShader(fragmentShader, frag);

        const program = gl.createProgram()!;
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);

        return program;
    }

    public compileShader(shader : WebGLShader, code : string) : void 
    {
        gl.shaderSource(shader, code);
        gl.compileShader(shader);
    }

    public createVbo(data): WebGLBuffer 
    {
        const vbo = gl.createBuffer();

        gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        return vbo;
    }

    public createFrameBuffer(w:number, h:number)
    {
        let frameBuffer: WebGLFramebuffer = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);

        let depthBuffer: WebGLFramebuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, w, h);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthBuffer);
        
        let textureBuffer: WebGLFramebuffer = gl.createTexture();
		gl.bindTexture(gl.TEXTURE_2D, textureBuffer);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.FLOAT, null);
        
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, textureBuffer, 0);

        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        return {f : frameBuffer, d : depthBuffer, t : textureBuffer};
    }

    public clear(r,g,b,a,depth): void
    {
        gl.clearColor(r,g,b,a);
        gl.clearDepth(depth);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }

    public setAttribute(prg, data, name, stride): void
    {
        let attLocation;
        attLocation = gl.getAttribLocation(prg, name);

        for(let i in data)
        {
			gl.bindBuffer(gl.ARRAY_BUFFER, data[i]);
			gl.enableVertexAttribArray(attLocation);
			gl.vertexAttribPointer(attLocation, stride, gl.FLOAT, false, 0, 0);
        }
        
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }
    
    public uniform1f(prg, name, data): void
    {
        let uniLocation;
        uniLocation = gl.getUniformLocation(prg, name);
        gl.uniform1f(uniLocation, data);
    }

    public uniform1i(prg, name, data): void
    {
        let uniLocation;
        uniLocation = gl.getUniformLocation(prg, name);
        gl.uniform1i(uniLocation, data);
    }

    public uniform2fv(prg, name, data): void
    {
        let uniLocation;
        uniLocation = gl.getUniformLocation(prg, name);
        gl.uniform2fv(uniLocation, data);
    }

    public uniform4fv(prg, name, data): void
    {
        let uniLocation;
        uniLocation = gl.getUniformLocation(prg, name);
        gl.uniform4fv(uniLocation, data);
    }

    public uniformMatrix4fv(prg, name, data): void
    {
        let uniLocation;
        uniLocation = gl.getUniformLocation(prg, name);
        gl.uniformMatrix4fv(uniLocation, false,data);
    }

    public create_cube_texture(source, target, cubeTexture)
    {
        // インスタンス用の配列
        let cImg = new Array();
        
        for(var i = 0; i < source.length; i++)
        {
            // インスタンスの生成
            cImg[i] = new cubeMapImage();
            
            // イメージオブジェクトのソースを指定
            cImg[i].data.src = source[i];
        }
        
        // キューブマップ用イメージのコンストラクタ
        function cubeMapImage()
        {
            // イメージオブジェクトを格納
            this.data = new Image();
            
            // イメージロードをトリガーにする
            this.data.onload = function(){
                // プロパティを真にする
                this.imageDataLoaded = true;
                
                // チェック関数を呼び出す
                checkLoaded(cubeTexture);
            };
        }
        
        // イメージロード済みかチェックする関数
        function checkLoaded(cubeTexture)
        {
            // 全てロード済みならキューブマップを生成する関数を呼び出す
            if( cImg[0].data.imageDataLoaded &&
                cImg[1].data.imageDataLoaded &&
                cImg[2].data.imageDataLoaded &&
                cImg[3].data.imageDataLoaded &&
                cImg[4].data.imageDataLoaded &&
                cImg[5].data.imageDataLoaded){generateCubeMap(cubeTexture);}
        }
        
        // キューブマップを生成する関数
        function generateCubeMap(cubeTexture)
        {
            // テクスチャオブジェクトの生成
            var tex = gl.createTexture();
            
            // テクスチャをキューブマップとしてバインドする
            gl.bindTexture(gl.TEXTURE_CUBE_MAP, tex);
            
            // ソースを順に処理する
            for(var j = 0; j < source.length; j++){
                // テクスチャへイメージを適用
                gl.texImage2D(target[j], 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, cImg[j].data);
            }
            
            // ミップマップを生成
            gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
            
            // テクスチャパラメータの設定
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            
            // キューブマップテクスチャを変数に代入
            cubeTexture = tex;
            
            // テクスチャのバインドを無効化
            gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
        }
    }
}