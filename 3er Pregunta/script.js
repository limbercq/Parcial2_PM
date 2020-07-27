const canvas = document.getElementById('glcanvas');
const gl = canvas.getContext('webgl2');

// clear screen

gl.clearColor(0, 0, 1, 1);
gl.clear(gl.COLOR_BUFFER_BIT);

//Declare shader

const vertexShader = `#version 300 es
    precision mediump float;
    in vec2 position;    
    in vec3 color;
    out vec3 vColor;
    uniform mat4 modelMatrix;
    void main()
    {
        gl_Position = modelMatrix * vec4(position, 0, 15);
        vColor = color;
    }
`;

const fragmentShader = `#version 300 es
    precision mediump float;
    out vec4 fragColor;
    in vec3 vColor;
    void main()
    {
        fragColor = vec4(vColor, 1);
    }
`;

//Compile shader

const vs = gl.createShader(gl.VERTEX_SHADER);
const fs = gl.createShader(gl.FRAGMENT_SHADER);

gl.shaderSource(vs, vertexShader);
gl.shaderSource(fs, fragmentShader);
gl.compileShader(vs);
gl.compileShader(fs);

if(!gl.getShaderParameter(vs, gl.COMPILE_STATUS)){
    console.error(gl.getShaderInfoLog(vs));
}

if(!gl.getShaderParameter(fs, gl.COMPILE_STATUS)){
    console.error(gl.getShaderInfoLog(fs));
}

const program = gl.createProgram();
gl.attachShader(program, vs);
gl.attachShader(program, fs);
gl.linkProgram(program);

if(!gl.getProgramParameter(program, gl.LINK_STATUS)){
    console.error(gl.getProgramInfoLog(program));
}

gl.useProgram(program);

const cara = {
    radius: 3.1,
    vertices: 35,
    coords: [],
    color: []
}

const cuerpo = {
    radius: 6,
    vertices: 35,
    coords: [],
    color: []
}
const ojoIzq = {
    radius: 0.5,
    vertices: 35,
    coords: [],
    color: []
}
const ojoDer = {
    radius: 0.5,
    vertices: 35,
    coords: [],
    color: []
}

const boton1 = {
    radius: 0.8,
    vertices: 35,
    coords: [],
    color: []
}
const boton2 = {
    radius: 0.8,
    vertices: 35,
    coords: [],
    color: []
}
const boton3 = {
    radius: 0.8,
    vertices: 35,
    coords: [],
    color: []
}

const boca = {
    radius: 0.8,
    vertices: 35,
    coords: [],
    color: []
}
const nariz = [
    -0.5, 0.5, //0
    0.5, 0.5, //1
    0, -0.5 //2
];
const brazaIzq = [
    -2.5, -0.2, 
    2.5, -0.2, 
    -2.5, 1, 
    2.5, 0.2
];

const brazaDer = [
    -2.5, -0.2, 
    2.5, -0.2, 
    -2.5, 0.2, 
    2.5, 0.9
];
//
// brazaDer
//

const positionBuffer11 = gl.createBuffer();
const colorBuffer11 = gl.createBuffer();
const position11 = gl.getAttribLocation(program, 'position');
const mMatrix11 = gl.getUniformLocation(program, 'modelMatrix');
const color11 = gl.getAttribLocation(program, 'color');

const modelMatrix11 = mat4.create();
mat4.translate(
modelMatrix11,
modelMatrix11,
[0.5,-0.1, 0]
);

gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer11);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(brazaDer), gl.STATIC_DRAW);

gl.uniformMatrix4fv(mMatrix11, false, modelMatrix11);
gl.enableVertexAttribArray(position11);
gl.vertexAttribPointer(position11, 2, gl.FLOAT, gl.FALSE, 0, 0);

gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer11);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(brazaDer.color), gl.STATIC_DRAW);
gl.enableVertexAttribArray(color11);
gl.vertexAttribPointer(color11, 3, gl.FLOAT, gl.FALSE, 0, 0);
gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);  
//
// brazaIzq
//

const positionBuffer10 = gl.createBuffer();
const colorBuffer10 = gl.createBuffer();
const position10 = gl.getAttribLocation(program, 'position');
const mMatrix10 = gl.getUniformLocation(program, 'modelMatrix');
const color10 = gl.getAttribLocation(program, 'color');

const modelMatrix10 = mat4.create();
mat4.translate(
modelMatrix10,
modelMatrix10,
[-0.5,-0.1, 0]
);

gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer10);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(brazaIzq), gl.STATIC_DRAW);

gl.uniformMatrix4fv(mMatrix10, false, modelMatrix10);
gl.enableVertexAttribArray(position10);
gl.vertexAttribPointer(position10, 2, gl.FLOAT, gl.FALSE, 0, 0);

gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer10);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(brazaIzq.color), gl.STATIC_DRAW);
gl.enableVertexAttribArray(color10);
gl.vertexAttribPointer(color10, 3, gl.FLOAT, gl.FALSE, 0, 0);
gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);  

for(i = 0; i < cuerpo.vertices; i++){
    const circumference = 2 * Math.PI * (i / cuerpo.vertices);
    const x = cuerpo.radius * Math.cos(circumference);
    const y = cuerpo.radius * Math.sin(circumference);
    cuerpo.coords.push(x, y);
    cuerpo.color.push(1, 1, 1);
}



const positionBuffer2 = gl.createBuffer();
const colorBuffer2 = gl.createBuffer();
const position2 = gl.getAttribLocation(program, 'position');
const mMatrix1 = gl.getUniformLocation(program, 'modelMatrix');

const modelMatrix1 = mat4.create();
mat4.translate(
    modelMatrix1,
    modelMatrix1,
    [0,-0.3, 0]
);


gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer2);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cuerpo.coords), gl.STATIC_DRAW);

gl.uniformMatrix4fv(mMatrix1, false, modelMatrix1);
gl.enableVertexAttribArray(position2);
gl.vertexAttribPointer(position2, 2, gl.FLOAT, gl.FALSE, 0, 0);

gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer2);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cuerpo.color), gl.STATIC_DRAW);
const color2 = gl.getAttribLocation(program, 'color');
gl.enableVertexAttribArray(color2);
gl.vertexAttribPointer(color2, 3, gl.FLOAT, gl.FALSE, 0, 0);
gl.drawArrays(gl.TRIANGLE_FAN, 0, cuerpo.vertices);

//
//  Cara
// 
    for(i = 0; i < cara.vertices; i++){
        const circumference = 2 * Math.PI * (i / cara.vertices);
        const x = cara.radius * Math.cos(circumference);
        const y = cara.radius * Math.sin(circumference);
        cara.coords.push(x, y);
        cara.color.push(1, 1, 1);
    }
    const positionBuffer = gl.createBuffer();
    const colorBuffer = gl.createBuffer();
    const position = gl.getAttribLocation(program, 'position');

    const mMatrix = gl.getUniformLocation(program, 'modelMatrix');

    const modelMatrix = mat4.create();
    mat4.translate(
        modelMatrix,
        modelMatrix,
        [0,0.3, 0]
    );


    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cara.coords), gl.STATIC_DRAW);

    gl.uniformMatrix4fv(mMatrix, false, modelMatrix);

    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, gl.FALSE, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cara.color), gl.STATIC_DRAW);
    const color = gl.getAttribLocation(program, 'color');
    gl.enableVertexAttribArray(color);
    gl.vertexAttribPointer(color, 3, gl.FLOAT, gl.FALSE, 0, 0);

    gl.drawArrays(gl.TRIANGLE_FAN, 0, cara.vertices);   

//
//  OjoIzq
// 

for(i = 0; i < ojoIzq.vertices; i++){
    const circumference = 2 * Math.PI * (i / ojoIzq.vertices);
    const x = ojoIzq.radius * Math.cos(circumference);
    const y = ojoIzq.radius * Math.sin(circumference);
    ojoIzq.coords.push(x, y);
    ojoIzq.color.push(0, 0, 0);
}



const positionBuffer3 = gl.createBuffer();
const colorBuffer3 = gl.createBuffer();
const position3 = gl.getAttribLocation(program, 'position');
const mMatrix3 = gl.getUniformLocation(program, 'modelMatrix');
const color3 = gl.getAttribLocation(program, 'color');

const modelMatrix3 = mat4.create();
mat4.translate(
    modelMatrix3,
    modelMatrix3,
    [-0.1,0.35, 0]
);


gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer3);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(ojoIzq.coords), gl.STATIC_DRAW);

gl.uniformMatrix4fv(mMatrix3, false, modelMatrix3);
gl.enableVertexAttribArray(position3);
gl.vertexAttribPointer(position3, 2, gl.FLOAT, gl.FALSE, 0, 0);

gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer3);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(ojoIzq.color), gl.STATIC_DRAW);
gl.enableVertexAttribArray(color3);
gl.vertexAttribPointer(color3, 3, gl.FLOAT, gl.FALSE, 0, 0);
gl.drawArrays(gl.TRIANGLE_FAN, 0, ojoIzq.vertices);  

//
// ojoDer
//
for(i = 0; i < ojoDer.vertices; i++){
const circumference = 2 * Math.PI * (i / ojoDer.vertices);
const x = ojoDer.radius * Math.cos(circumference);
const y = ojoDer.radius * Math.sin(circumference);
ojoDer.coords.push(x, y);
ojoDer.color.push(0, 0, 0);
}

const positionBuffer4 = gl.createBuffer();
const colorBuffer4 = gl.createBuffer();
const position4 = gl.getAttribLocation(program, 'position');
const mMatrix4 = gl.getUniformLocation(program, 'modelMatrix');
const color4 = gl.getAttribLocation(program, 'color');

const modelMatrix4 = mat4.create();
mat4.translate(
modelMatrix4,
modelMatrix4,
[0.1,0.35, 0]
);


gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer4);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(ojoDer.coords), gl.STATIC_DRAW);

gl.uniformMatrix4fv(mMatrix4, false, modelMatrix4);
gl.enableVertexAttribArray(position4);
gl.vertexAttribPointer(position4, 2, gl.FLOAT, gl.FALSE, 0, 0);

gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer4);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(ojoDer.color), gl.STATIC_DRAW);
gl.enableVertexAttribArray(color4);
gl.vertexAttribPointer(color4, 3, gl.FLOAT, gl.FALSE, 0, 0);
gl.drawArrays(gl.TRIANGLE_FAN, 0, ojoDer.vertices);  

//
// boton1
//
for(i = 0; i < boton1.vertices; i++){
const circumference = 2 * Math.PI * (i / boton1.vertices);
const x = boton1.radius * Math.cos(circumference);
const y = boton1.radius * Math.sin(circumference);
boton1.coords.push(x, y);
boton1.color.push(1, 0, 0);
}

const positionBuffer5 = gl.createBuffer();
const colorBuffer5 = gl.createBuffer();
const position5 = gl.getAttribLocation(program, 'position');
const mMatrix5 = gl.getUniformLocation(program, 'modelMatrix');
const color5 = gl.getAttribLocation(program, 'color');

const modelMatrix5 = mat4.create();
mat4.translate(
modelMatrix5,
modelMatrix5,
[0,-0.1, 0]
);

gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer5);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(boton1.coords), gl.STATIC_DRAW);

gl.uniformMatrix4fv(mMatrix5, false, modelMatrix5);
gl.enableVertexAttribArray(position5);
gl.vertexAttribPointer(position5, 2, gl.FLOAT, gl.FALSE, 0, 0);

gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer5);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(boton1.color), gl.STATIC_DRAW);
gl.enableVertexAttribArray(color5);
gl.vertexAttribPointer(color5, 3, gl.FLOAT, gl.FALSE, 0, 0);
gl.drawArrays(gl.TRIANGLE_FAN, 0, boton1.vertices);  

//
// boton2
//
for(i = 0; i < boton2.vertices; i++){
const circumference = 2 * Math.PI * (i / boton2.vertices);
const x = boton2.radius * Math.cos(circumference);
const y = boton2.radius * Math.sin(circumference);
boton2.coords.push(x, y);
boton2.color.push(1, 0, 0);
}

const positionBuffer6 = gl.createBuffer();
const colorBuffer6 = gl.createBuffer();
const position6 = gl.getAttribLocation(program, 'position');
const mMatrix6 = gl.getUniformLocation(program, 'modelMatrix');
const color6 = gl.getAttribLocation(program, 'color');

const modelMatrix6 = mat4.create();
mat4.translate(
modelMatrix6,
modelMatrix6,
[0,-0.3, 0]
);

gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer6);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(boton2.coords), gl.STATIC_DRAW);

gl.uniformMatrix4fv(mMatrix6, false, modelMatrix6);
gl.enableVertexAttribArray(position6);
gl.vertexAttribPointer(position6, 2, gl.FLOAT, gl.FALSE, 0, 0);

gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer6);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(boton2.color), gl.STATIC_DRAW);
gl.enableVertexAttribArray(color6);
gl.vertexAttribPointer(color6, 3, gl.FLOAT, gl.FALSE, 0, 0);
gl.drawArrays(gl.TRIANGLE_FAN, 0, boton2.vertices);  

//
// boton3
//
for(i = 0; i < boton3.vertices; i++){
const circumference = 2 * Math.PI * (i / boton3.vertices);
const x = boton3.radius * Math.cos(circumference);
const y = boton3.radius * Math.sin(circumference);
boton3.coords.push(x, y);
boton3.color.push(1, 0, 0);
}

const positionBuffer7 = gl.createBuffer();
const colorBuffer7 = gl.createBuffer();
const position7 = gl.getAttribLocation(program, 'position');
const mMatrix7 = gl.getUniformLocation(program, 'modelMatrix');
const color7 = gl.getAttribLocation(program, 'color');

const modelMatrix7 = mat4.create();
mat4.translate(
modelMatrix7,
modelMatrix7,
[0,-0.5, 0]
);

gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer7);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(boton3.coords), gl.STATIC_DRAW);

gl.uniformMatrix4fv(mMatrix7, false, modelMatrix7);
gl.enableVertexAttribArray(position7);
gl.vertexAttribPointer(position7, 2, gl.FLOAT, gl.FALSE, 0, 0);

gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer7);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(boton3.color), gl.STATIC_DRAW);
gl.enableVertexAttribArray(color7);
gl.vertexAttribPointer(color7, 3, gl.FLOAT, gl.FALSE, 0, 0);
gl.drawArrays(gl.TRIANGLE_FAN, 0, boton3.vertices);  

//
// boca
//
for(i = 0; i < boca.vertices; i++){
const circumference = 2 * Math.PI * (i / boca.vertices);
const x = boca.radius * Math.cos(circumference);
const y = boca.radius * Math.sin(circumference);
boca.coords.push(x, y);
boca.color.push(0, 0, 0);
}

const positionBuffer8 = gl.createBuffer();
const colorBuffer8 = gl.createBuffer();
const position8 = gl.getAttribLocation(program, 'position');
const mMatrix8 = gl.getUniformLocation(program, 'modelMatrix');
const color8 = gl.getAttribLocation(program, 'color');

const modelMatrix8 = mat4.create();
mat4.translate(
modelMatrix8,
modelMatrix8,
[0,0.2, 0]
);

gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer8);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(boca.coords), gl.STATIC_DRAW);

gl.uniformMatrix4fv(mMatrix8, false, modelMatrix8);
gl.enableVertexAttribArray(position8);
gl.vertexAttribPointer(position8, 2, gl.FLOAT, gl.FALSE, 0, 120);

gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer8);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(boca.color), gl.STATIC_DRAW);
gl.enableVertexAttribArray(color8);
gl.vertexAttribPointer(color8, 3, gl.FLOAT, gl.FALSE, 0, 0);
gl.drawArrays(gl.TRIANGLE_FAN, 0, boca.vertices);  

//
// nariz
//

const positionBuffer9 = gl.createBuffer();
const colorBuffer9 = gl.createBuffer();
const position9 = gl.getAttribLocation(program, 'position');
const mMatrix9 = gl.getUniformLocation(program, 'modelMatrix');
const color9 = gl.getAttribLocation(program, 'color');

const modelMatrix9 = mat4.create();
mat4.translate(
modelMatrix9,
modelMatrix9,
[0,0.27, 0]
);
const vertexColor = [
    1, 0, 0, 
    1, 0, 0, 
    1, 0, 0,
    1, 0, 0
];
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer9);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(nariz), gl.STATIC_DRAW);

gl.uniformMatrix4fv(mMatrix9, false, modelMatrix9);
gl.enableVertexAttribArray(position9);
gl.vertexAttribPointer(position9, 2, gl.FLOAT, gl.FALSE, 0, 0);

gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer9);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexColor), gl.STATIC_DRAW);
gl.enableVertexAttribArray(color9);
gl.vertexAttribPointer(color9, 3, gl.FLOAT, gl.FALSE, 0, 0);
gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);  

