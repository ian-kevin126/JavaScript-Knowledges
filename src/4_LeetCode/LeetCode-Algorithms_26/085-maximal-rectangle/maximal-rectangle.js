// Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
//
// Example:
//
//
// Input:
// [
//   ["1","0","1","0","0"],
//   ["1","0","1","1","1"],
//   ["1","1","1","1","1"],
//   ["1","0","0","1","0"]
// ]
// Output: 6
//
//


/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix || !matrix[0]) {
        return 0;
    }
    var n = matrix[0].length;
    var height = new Array(n+1);
    for (var i = 0;i < n+1;++i) {
        height[i] = 0;
    }
    var ans = 0;
    for (i = 0;i < matrix.length;++i) {
        for (var j = 0;j < n;++j) {
            height[j] = matrix[i][j] === '1' ? height[j]+1 : 0;
        }
        var stack = [-1];
        for (j = 0;j < n+1; ++j) {
            while (height[j] < height[stack[stack.length-1] + (stack[stack.length-1] >= 0 ? 0 : height.length)]) {
                var h = height[stack.pop()];
                var w = j - 1 - stack[stack.length-1];
                ans = Math.max(ans, h * w);
            }
            stack.push(j);
        }
    }
    return ans;
};

