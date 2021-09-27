function preload(){}
//preload : This is a predefined function of p5.js, in this function you need to define all the things you want to use throughout the code. For example if you want to use an image, then you need to define the image inside the preload() function.

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
   
}
//setup : This is a predefined function of p5.js, in this function you need to write all the codes of your website. For example code for setting canvas.
function draw()
{
    image(video, 0, 0, 640, 480);
    fill(255, 0, 0);
    circle(50, 50, 55, 55);
    circle(585, 50, 55, 55);
    circle(585, 425, 55, 55);
    circle(50, 425, 55, 55);
    fill(0, 255, 0)
    rect(70, 30, 495, 30);
    rect(30, 50, 30, 360);
    rect(70, 420, 495, 30);
    rect(580, 50, 30, 360);
    
}
//draw function is used to draw an image on the canvas
function take_snapshot()
{
    save('studentname.png');
}
