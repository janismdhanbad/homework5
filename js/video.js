// Add js here


var vid = document.getElementById("videoplayer");
vid.removeAttribute("loop");
document.getElementById("play").addEventListener("click", playVid);
function playVid() {
    vid.play();
}

document.getElementById("pause").addEventListener("click", pauseVid);
function pauseVid() {
    vid.pause();
}



var video_speeds = [0.5, 1.0, 2.0]
var speed_idx = 1

document.getElementById("slower").addEventListener("click", slowVid);
document.getElementById("faster").addEventListener("click", fastVid);

function slowVid(){
    speed_idx = speed_idx -1
    if (speed_idx < 0){
        speed_idx = 0
        window.alert("Video is at slowest speed!")
    }
    else{
    vid.playbackRate = video_speeds[speed_idx];

    }
}
function fastVid(){
    speed_idx = speed_idx +1
    if (speed_idx > 2){
        speed_idx = 2
        window.alert("Video is at fastest speed!")
    }
    else{
    console.log(video_speeds[speed_idx])
    vid.playbackRate = video_speeds[speed_idx];
    }
}

document.getElementById("mute").addEventListener("click", muteVid);

function muteVid(){
    if (vid.muted == false){
        vid.muted = true;
        document.getElementById("mute").innerText= "Unmute"
    }
    else{
        vid.muted = false;
        document.getElementById("mute").innerText= "Mute"
    }


}
document.getElementById("skip").addEventListener("click", skipVid);
function skipVid(){

    vid.currentTime = vid.currentTime  + 15;
}

var volumeControl = document.getElementById('slider');
document.getElementById("volume").innerText = volumeControl.value
function setVolume(){
    console.log(vid.volume)
    vid.volume = this.value / 100;
    
};

function displayVolume(){
    document.getElementById("volume").innerText = volumeControl.value ;
}

volumeControl.addEventListener('input', displayVolume);
volumeControl.addEventListener('input',setVolume);


