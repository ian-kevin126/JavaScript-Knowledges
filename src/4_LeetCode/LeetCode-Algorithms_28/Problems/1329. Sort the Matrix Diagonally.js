var diagonalSort = function (mat) {
    let n = mat.length;
    let m = mat[0].length;

    for (let i = 0; i < n + m - 1; i++) {
        let row = i < m ? 0 : i - m + 1;
        let col = i < m ? i : m - 1;

        helper(row, col);
    }

    for (let i = 1; i < n; i++) {
        let row = i;
        let col = 0;

        helper(row, col);
    }

    function helper(row, col) {
        let ans = [];
        let x = row;
        let y = col;

        while (x < n && y < m) {
            ans.push(mat[x][y]);
            x++;
            y++;
        }

        x = row;
        y = col;

        let k = 0;
        ans.sort((a, b) => a - b);

        while (x < n && y < m && k < ans.length) {
            mat[x][y] = ans[k];
            k++;
            x++;
            y++;
        }
    }

    return mat;
};