const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^[A-Za-z0-9.]+@gmail.com$/

gmailButton.onclick = () => {
    if(regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'Error'
        gmailResult.style.color = 'red'
    }
}



// MOVE BLOCK
const childBlock = document.querySelector('.child_block');
const moveBlock = document.querySelector('.move_block');

const squareSize = 50;
const bigSquareSize = 500;
const speed = 2;

let direction = 'right';
let x = 0;
let y = 0;

function moveSquare() {
  switch (direction) {
    case 'right':
      x += speed;
      if (x >= bigSquareSize - squareSize) {
        direction = 'down';
        x = bigSquareSize - squareSize;
      }
      break;
    case 'down':
      y += speed;
      if (y >= bigSquareSize - squareSize) {
        direction = 'left';
        y = bigSquareSize - squareSize;
      }
      break;
    case 'left':
      x -= speed;
      if (x <= 0) {
        direction = 'up';
        x = 0;
      }
      break;
    case 'up':
      y -= speed;
      if (y <= 0) {
        direction = 'right';
        y = 0;
      }
      break;
  }

  childBlock.style.left = x + 'px';
  childBlock.style.top = y + 'px';

  requestAnimationFrame(moveSquare);
}

moveSquare();





// HOME WORK2


const timeDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let startTime = 0;
let elapsedTime = 0;
let intervalId;
let isPaused = false;

function startTimer() {
    if (!isPaused) {
        startTime = Date.now();
        intervalId = setInterval(updateTime, 10);
    } else {
        isPaused = false;
        startTime = Date.now() - elapsedTime;
    }
}

function stopTimer() {
    if (!isPaused) {
        clearInterval(intervalId);
        elapsedTime += Date.now() - startTime;
        isPaused = true;
    }
}

function resetTimer() {
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    isPaused = false;
    timeDisplay.textContent = '0';
}

function updateTime() {
    if (!isPaused) {
        const currentTime = Date.now();
        const delta = currentTime - startTime;
        const totalTime = elapsedTime + delta;
        const seconds = Math.floor(totalTime / 1000);
        timeDisplay.textContent = seconds;
    }
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);