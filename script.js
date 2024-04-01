document.addEventListener("contextmenu", (event) => event.preventDefault());

var started = false;

var audio = new Audio("https://cdn.discordapp.com/attachments/1088461750598389862/1224365723359510548/file.mp3?ex=661d3a70&is=660ac570&hm=6f799bfaac652a955cd099b026b5a620ab3b83a95fe556c1dd273ec5a4fb3a72&");

function play() {
    started = !started;
    if (started) {
        audio.volume = 0.25;
        audio.play();
        document.getElementById("playbutton").style.display = "none";
        document.getElementById("pausebutton").style.display = "block";
    } else {
        audio.pause();
        document.getElementById("playbutton").style.display = "block";
        document.getElementById("pausebutton").style.display = "none";
    }
}