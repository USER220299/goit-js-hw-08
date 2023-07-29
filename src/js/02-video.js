import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const key = "videoplayer-current-time"

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const onPlay = function (data) {
   
    localStorage.setItem(key, JSON.stringify(data.seconds));
   
    
};
player.on('timeupdate', throttle(onPlay, 1000));

const valueSeconds = Number(localStorage.getItem(key));

player.setCurrentTime(valueSeconds);

