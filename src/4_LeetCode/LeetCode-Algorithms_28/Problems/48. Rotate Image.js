var rotate = function(matrix) {
    const center = (matrix.length - 1) / 2;
    const transformations = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            const newCol = -(i - center) + center;
            transformations.push([j, newCol, matrix[i][j]]);
        }
    }
    for (const [row, col, val] of transformations) {
        matrix[row][col] = val;
    }
    return matrix;
}; 