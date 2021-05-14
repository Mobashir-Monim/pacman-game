const attemptCollect = () => {
    let x = currentPoint.position[0];
    let y = currentPoint.position[1];

    console.log(`x: ${ x }`);
    console.log(`y: ${ y }`);
    console.log(`xStart: ${ snake.positions[0][0] }`);
    console.log(`xEnd: ${ snake.positions[0][0] + 10 }`);
    console.log(`yStart: ${ snake.positions[0][1] - 10 }`);
    console.log(`yEnd: ${ snake.positions[0][1] }`);

    if (x >= snake.positions[0][0] && x <= snake.positions[0][0] + 10 && y >= snake.positions[0][1] - 10 && y <= snake.positions[0][1]) {
        addScore();
    }
}

const addScore = () => {
    console.log(parseInt(score.innerText) + currentPoint.value)
    score.innerText = parseInt(score.innerText) + currentPoint.value;
    currentPoint.limit = 0;
    spawnPoint();
}