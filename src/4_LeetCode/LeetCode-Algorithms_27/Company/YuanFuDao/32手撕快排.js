const quickSort = (arr) => {
  if (arr.length <= 0) {
    return arr;
  }
  let privotIndex = Math.floor(arr.length >> 1);
  let privot = arr.splice(privotIndex, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < privot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([privot], quickSort(right));
};

let arr = [1, 2, 3, 4, 8, 4];

console.log(quickSort(arr));