let gameCanvasContainer = document.getElementById('game-canvas-container');
let gameCanvas = document.getElementById('game-canvas');
let snakeHead = document.getElementById('snake-head');
let point = document.getElementById('point');
let score = document.getElementById('score');
let snake = {
    direction: [1, 1],
    positions: [
        [0, 0],
    ],
};

window.onload = () => {
    setGameCanvas();
    generateRandomPointPosition();
}

window.onresize = () => {
    setGameCanvas();
}

const setGameCanvas = () => {
    let screenVal = (Math.min(gameCanvasContainer.offsetWidth, window.innerHeight)) - 40;
    gameCanvas.style.width = `${ screenVal }px`;
    gameCanvas.style.height = `${ screenVal }px`;
}

setInterval(() => {
    spawnPoint();
    moveSnake();
    attemptCollect();
}, 500);