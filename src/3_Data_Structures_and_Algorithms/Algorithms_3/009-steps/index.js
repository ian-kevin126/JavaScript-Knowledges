// Solution 1
const steps1 = (n) => {
  for (let row = 0; row < n; row += 1) {
    let stair = '';
    for (let column = 0; column < n; column += 1) column <= row ? stair += '#' : stair += ' ';
    console.log(stair);
  }
};

// Solution 2
const steps2 = (n, row = 0, stair = '') => {
  if (n === row) return;
  if (n === stair.length) { 
    console.log(stair); 
    return steps2(n, row + 1); 
  }
  const addToStair = stair.length <= row ? '#' : ' ';
  steps2(n, row, stair + addToStair);
};

const steps = steps2;
module.exports = steps;
