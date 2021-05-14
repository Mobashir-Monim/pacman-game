const renderBlobPosition = () => {
    snakeHead.style.left = `${ snake.positions[0][0] }%`;
    snakeHead.style.top = `${ snake.positions[0][1] }%`;
}

const setSnakeDirection = (direction) => {
    switch (direction) {
        case 'right':
            snake.direction[0] = 1;
            snake.direction[1] = 0;
            break;
        case 'left':
            snake.direction[0] = -1;
            snake.direction[1] = 0;
            break;
        case 'down':
            snake.direction[0] = 0;
            snake.direction[1] = 1;
            break;
        case 'up':
            snake.direction[0] = 0;
            snake.direction[1] = -1;
            break;
        default:
            break;
    }

    renderBlobPosition();
}

const moveLeft = () => {
    if (snake.positions[0][0] < 10) {
        snake.positions[0][0] = 90;
    } else {
        snake.positions[0][0] -= 10;
    }
}

const moveRight = () => {
    if (snake.positions[0][0] >= 90) {
        snake.positions[0][0] = 0;
    } else {
        snake.positions[0][0] += 10;
    }
}

const moveUp = () => {
    if (snake.positions[0][1] < 10) {
        snake.positions[0][1] = 90;
    } else {
        snake.positions[0][1] -= 10;
    }
}

const moveDown = () => {
    if (snake.positions[0][1] >= 90) {
        snake.positions[0][1] = 0;
    } else {
        snake.positions[0][1] += 10;
    }
}

setInterval(() => {
    if (snake.direction[0] == 1) {
        moveRight();
    } else if (snake.direction[0] == -1) {
        moveLeft();
    } else if (snake.direction[1] == 1) {
        moveDown();
    } else if (snake.direction[1] == -1) {
        moveUp();
    }

    renderBlobPosition();
}, 500  );