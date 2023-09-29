nosex = 0;
nosey = 0;
function preload()
{
    mustache_image = loadImage("https://i.postimg.cc/d3rHnqjK/Mustach-image-removebg-preview.png")
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded()
{
    console.log('PoseNet Is Initia lized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nose x = " + nosex);
        console.log("nose y = " + nosey);
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(mustache_image,nosex-23,nosey-2,50,30);
}

function Take_Snapshot()
{
    save('FilterImage.png');
}   