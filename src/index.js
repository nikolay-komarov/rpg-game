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
let pY =  600 / 2 - 24;
let pX =  600 / 2 - 24;

const BORDER_FOR_PLAYER = {
  DOWN: 552,
  LEFT: 0,
  RIGHT: 552,
  UP: 0,
};

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
    default:
      break;
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
    default:
      break;
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
      pY = pY + 10 < BORDER_FOR_PLAYER.DOWN ? (pY += 10) : BORDER_FOR_PLAYER.DOWN;
      cycle = (cycle + 1) % shots;
    }
    if (keyPressed.LEFT) {
      spritePosition = 1;
      pX = pX - 10 > BORDER_FOR_PLAYER.LEFT ? (pX -= 10) : BORDER_FOR_PLAYER.LEFT;
      cycle = (cycle + 1) % shots;
    }
    if (keyPressed.RIGHT) {
      spritePosition = 2;
      pX = pX + 10 < BORDER_FOR_PLAYER.RIGHT ? (pX += 10) : BORDER_FOR_PLAYER.RIGHT;
      cycle = (cycle + 1) % shots;
    }
    if (keyPressed.UP) {
      spritePosition = 3;
      pY = pY - 10 > BORDER_FOR_PLAYER.UP ? (pY -= 10) : BORDER_FOR_PLAYER.UP;
      cycle = (cycle + 1) % shots;
    }
    ctx.clearRect(0, 0, 600, 600);
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 600, 600);
    ctx.drawImage(img, cycle * spriteW, spritePosition * 48, spriteW, spriteH, pX, pY, 48, 48);
  }, 120);
});
