var generateMatrix = function (n) {
    const grid = initGrid(n);
    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let directionIndex = 0;
    let currentX = 0;
    let currentY = 0;
    const totals = n * n;
    let num = 1;

    while (num <= totals) {
        if (grid[currentX][currentY] === 0) {
            grid[currentX][currentY] = num;
            num += 1;
        }
        const nextX = currentX + direction[directionIndex][0];
        const nextY = currentY + direction[directionIndex][1];
        if (nextX >= 0
            && nextX < grid.length
            && nextY >= 0
            && nextY < grid[nextX].length
            && grid[nextX][nextY] === 0) {
            currentX = nextX;
            currentY = nextY;
        } else {
            directionIndex += 1;
            if (directionIndex >= direction.length) {
                directionIndex = 0;
            }
        }
    }
    return grid;
};

function initGrid(n) {
    const grid = Array(n).fill(0);
    for (let i = 0; i < grid.length; i++) {
        grid[i] = Array(n).fill(0);
    }
    return grid;
}