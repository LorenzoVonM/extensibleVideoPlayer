import MediaPlayer from "./MediaPlayer.js"
import AutoPlay from "./plugins/AutoPlay.js"

const video = document.querySelector('video');
let conObj = { el: video, plugins: [new AutoPlay()] };
const player = new MediaPlayer(conObj);

const buttonPlay = document.querySelector('#btnPlayPause');
const buttonMute = document.querySelector('#btnMute');
buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();