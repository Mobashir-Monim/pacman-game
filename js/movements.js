const renderBlobPosition = () => {
    snakeHead.style.left = `${ snake.positions[0][0] }%`;
    snakeHead.style.top = `${ snake.positions[0][1] }%`;
}

document.onkeydown = (event) => {
    switch (window.event.keyCode) {
        case 37:
            event.preventDefault();
            setSnakeDirection('left');
            break;
        case 38:
            event.preventDefault();
            setSnakeDirection('up'); 
            break;
        case 39:
            event.preventDefault();
            setSnakeDirection('right');
            break;
        case 40:
            event.preventDefault();
		    setSnakeDirection('down');
        break;
    }
};

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

const moveSnake = () => {
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
}