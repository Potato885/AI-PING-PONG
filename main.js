

function setup(){
var canvas =  createCanvas(700,600);
canvas.parent('canvas');

video = createCapture(VIDEO);
video.size(700, 600);
video.hide();
}


function draw(){
   image(video, 0, 0, 700, 600);
}
