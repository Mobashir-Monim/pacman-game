const attemptCollect = () => {
    let x = currentPoint.position[0];
    let y = currentPoint.position[1];

    if (x >= snake.positions[0][0] && x <= snake.positions[0][0] + 10 && y >= snake.positions[0][1] - 10 && y <= snake.positions[0][1]) {
        addScore();
    }
}

const addScore = () => {
    score.innerText = parseInt(score.innerText) + currentPoint.value;
    currentPoint.limit = 0;
    spawnPoint();
}