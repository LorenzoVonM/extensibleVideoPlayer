import MediaPlayer from "./MediaPlayer"
import AutoPlay from "./plugins/AutoPlay"
import AutoPause from "./plugins/AutoPause"

const video = document.querySelector('video');

//objeto de configuracion, con el video y los plugins
let conObj = { 
    el: video, 
    plugins: [
        new AutoPlay(),
        new AutoPause()
    ] };
    
const player =new  MediaPlayer(conObj);

const buttonPlay: HTMLElement = document.querySelector('#btnPlayPause');
const buttonMute: HTMLElement = document.querySelector('#btnMute');
buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => console.log(error.message));
}