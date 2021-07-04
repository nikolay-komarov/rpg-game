import './index.scss';
import PlayerWalk from './assets/Male-4-Walk.png';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const spriteW = 48;
const spriteH = 48;
const shots = 3;
let cycle = 0;
let spritePosition = 0;

const keyPressed = {
  DOWN: false,
  LEFT: false,
  RIGHT: false,
  UP: false,
};
let pY = 0;
let pX = 0;

function keyDownHandler(evt) {
  switch (evt.key) {
    case 'Down':
      keyPressed.DOWN = true;
      break;
    case 'ArrowDown':
      keyPressed.DOWN = true;
      break;
    case 'Left':
      keyPressed.LEFT = true;
      break;
    case 'ArrowLeft':
      keyPressed.LEFT = true;
      break;
    case 'Right':
      keyPressed.RIGHT = true;
      break;
    case 'ArrowRight':
      keyPressed.RIGHT = true;
      break;
    case 'Up':
      keyPressed.UP = true;
      break;
    case 'ArrowUp':
      keyPressed.UP = true;
      break;
    default: break;
  }
}

function keyUpHandler(evt) {
  switch (evt.key) {
    case 'Down':
      keyPressed.DOWN = false;
      break;
    case 'ArrowDown':
      keyPressed.DOWN = false;
      break;
    case 'Left':
      keyPressed.LEFT = false;
      break;
    case 'ArrowLeft':
      keyPressed.LEFT = false;
      break;
    case 'Right':
      keyPressed.RIGHT = false;
      break;
    case 'ArrowRight':
      keyPressed.RIGHT = false;
      break;
    case 'Up':
      keyPressed.UP = false;
      break;
    case 'ArrowUp':
      keyPressed.UP = false;
      break;
    default: break;
  }
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

const img = document.createElement('img');
img.src = PlayerWalk;

img.addEventListener('load', () => {
  setInterval(() => {
    if (keyPressed.DOWN) {
      spritePosition = 0;
      pY += 10;
      cycle = (cycle + 1) % shots;
    }
    if (keyPressed.LEFT) {
      spritePosition = 1;
      pX -= 10;
      cycle = (cycle + 1) % shots;
    }
    if (keyPressed.RIGHT) {
      spritePosition = 2;
      pX += 10;
      cycle = (cycle + 1) % shots;
    }
    if (keyPressed.UP) {
      spritePosition = 3;
      pY -= 10;
      cycle = (cycle + 1) % shots;
    }
    ctx.clearRect(0, 0, 600, 600);
    ctx.drawImage(img, cycle * spriteW, spritePosition * 48, spriteW, spriteH, pX, pY, 48, 48);
  }, 120);
});
