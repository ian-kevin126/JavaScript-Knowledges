var numIslands = function (grid) {

    const dfs = function (grid, i, j) {
        if (
            i < 0 ||
            i === grid.length ||
            j < 0 ||
            j === grid[i].length ||
            grid[i][j] === "0"
        ) {
            return 0
        }

        grid[i][j] = "0"

        dfs(grid, i - 1, j);
        dfs(grid, i + 1, j);
        dfs(grid, i, j - 1);
        dfs(grid, i, j + 1);
        return 1
    }

    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                count += dfs(grid, i, j)
                console.log(count)
            }
        }
    }
    return count
};