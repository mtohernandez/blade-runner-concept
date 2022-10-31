const el = document.querySelector("#backfog");
const characters = document.querySelector("#characters");
const audioPlayer = document.querySelector('.audio-player')
const bar = document.querySelectorAll('.bar');
const audio = new Audio('../assets/audio/bladerunner.mp3')

window.addEventListener('load', () => {
  audio.play();
})

audioPlayer.addEventListener('click', () => {
  audio.paused ? bar.forEach(bar => bar.style.animation = '') : bar.forEach(bar => bar.style.animation = 'sound 0ms -800ms linear infinite alternate');
  audio.paused ? audio.play() : audio.pause();
})

window.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = e.clientX * 0.03 + "px";
  el.style.backgroundPositionY = e.clientY * 0.03 + "px";

  characters.style.backgroundPositionX = e.clientX * 0.01 + "px";
  characters.style.backgroundPositionY = e.clientY * 0.01 + "px";
});

