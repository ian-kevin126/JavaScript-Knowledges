const flattern = (arr) => {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
};

const arr = [
  [1, 2, 3, 4, 5, 6],
  [1, 5, [4, 8]],
];

console.log(flattern(arr));

let res = [];
let flattern = (arr) => {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flattern(arr);
    } else {
      res.push(item);
    }
  });
  return res;
};
