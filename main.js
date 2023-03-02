function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
    background('#00FFFF')
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    textSize(difference);
    textSize(10);
    fiil('#F90093')
    text('Shadow', 50,400);
}
function modelLoaded()
{
    console.log('PoseNet is initialized!')
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX =" + leftWristX + "rightWristX = " + rightWristX + "difference =" + difference);
    }
}