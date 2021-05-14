let currentPoint = {
    position: [0, 0],
    value: 0,
    limit: 0,
};

const spawnPoint = () => {
    if (currentPoint.limit == 0) {
        currentPoint.position = generateRandomPointPosition();
        point.style.left = `${ currentPoint.position[0] }%`;
        point.style.top = `${ currentPoint.position[1] }%`;
        currentPoint.value = Math.random() > 0.95 ? 100 : 10;
        currentPoint.limit = 10;

        if (currentPoint.value == 100) {
            point.style.background = 'red !important';
        } else {
            point.style.background = 'white !important';
        }
    } else {
        currentPoint.limit -= 1;

        if (currentPoint.limit <= 0) {
            spawnPoint();
        }
    }
}

const generateRandomPointPosition = () => {
    let bounds = [Math.random() > 0.5 ? -1 : 1, Math.random() > 0.5 ? -1 : 1];
    let x = Math.ceil((Math.random().toFixed(2) * 100) / 10) * 10 + bounds[0] * 6.25;
    let y = Math.ceil((Math.random().toFixed(2) * 100) / 10) * 10 + bounds[1] * 6.25 - 10;
    x = x > 93.75 ? 3.75 : (x < 3.75 ? 93.75 : x);
    y = y > 83.75 ? -6.25 : (y < -6.25 ? 83.75 : y);

    if (x >= snake.positions[0][0] && x <= snake.positions[0][0] + 10 && y >= snake.positions[0][1] - 10 && y <= snake.positions[0][0]) {
        return generateRandomPointPosition();
    }

    return [x, y];
}