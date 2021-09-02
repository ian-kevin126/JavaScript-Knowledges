var islandPerimeter = function(grid) {
    let count = 0;
    const island = (land, row, col) => {
        if(!land[row] || !land[row][col]) return 1;
        return 0;
    }
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j]){
                count += island(grid, i, j - 1) + island(grid, i, j + 1) + island(grid, i - 1, j) + island(grid, i + 1, j);
            }
        }
    }
    return count;
};