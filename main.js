noseX = 0;
noseY = 0;



function preload(){
nariz = loadImage("https://i.postimg.cc/T3zLCX4Z/Triforce-Full.png");
}

function setup(){
   canvas = createCanvas(300,300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function draw(){
   image(video, 0, 0, 300, 300);
   //fill(255,0,0);
   //stroke(255,0,0);
   //circle(noseX, noseY, 20);
   image(nariz, noseX, noseY, 30, 30);
}

function tirarFoto(){
   save('filtro.png');
}

function modelLoaded(){
   console.log("Modelo carregadocom sucesso!");
}

function gotPoses(results){
if(results.length > 0){
   console.log(results);
console.log("posicao X do nariz = " + results[0].pose.nose.x);
console.log("posicao Y do nariz = " + results[0].pose.nose.y);
noseX = results[0].pose.nose.x - 15;
noseY = results[0].pose.nose.y - 70;



   }
 }