var oddCells = (row, column, indices) => {
    const rowCount = new Uint8Array(row);
    const columnCount = new Uint8Array(column);
    let oddRow = 0;
    let oddColumn = 0;

    for (let i = 0; i < indices.length; ++i) {
        (++rowCount[indices[i][0]] & 1) === 1 ? ++oddRow : --oddRow;
        (++columnCount[indices[i][1]] & 1) === 1 ? ++oddColumn : --oddColumn;
    }

    return oddRow * column + oddColumn * row - 2 * oddRow * oddColumn;
};