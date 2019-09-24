import MediaPlayer from "./MediaPlayer.js"
import AutoPlay from "./plugins/AutoPlay.js"
import AutoPause from "./plugins/AutoPause.js"

const video = document.querySelector('video');

//objeto de configuracion, con el video y los plugins
let conObj = { 
    el: video, 
    plugins: [
        new AutoPlay(),
        new AutoPause()
    ] };
    
const player =new  MediaPlayer(conObj);

const buttonPlay = document.querySelector('#btnPlayPause');
const buttonMute = document.querySelector('#btnMute');
buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js').catch(error => console.log(error.message));
// }