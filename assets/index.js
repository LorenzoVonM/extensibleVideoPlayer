import MediaPlayer from "./MediaPlayer.js"

const video = document.querySelector('video');
let conObj = { el: video, plugins: [] };
const player = new MediaPlayer(conObj);

const button = document.querySelector('button');
button.onclick = () => player.togglePlay();