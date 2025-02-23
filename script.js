const audio = document.getElementById("audio");

function playSound(type) {
    let soundSrc = "";
    if (type === "rain") {
        soundSrc = "rain.mp3";
    } else if (type === "forest") {
        soundSrc = "forest.mp3";
    } else if (type === "ocean") {
        soundSrc = "ocean.mp3";
    }
    audio.src = soundSrc;
    audio.play();
}

function stopSound() {
    audio.pause();
}
