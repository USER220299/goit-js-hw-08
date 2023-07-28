import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');

const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});

 const options = {
        width: 640,
        loop: true
    };
// const player = new Player('handstick', {
//     id: 19231868,
//     width: 640
// });

// player.on('play', function() {
//     console.log('played the video!');
// });