function bookIndex(list) {
  //array for ranges and incidences for the index
  // pre-load with the first list element
  // bi1 will look like [1,'4-6',7-8,10,12,22] e.g.
  var bI1 = [];
  // review array list starting at 2nd element, and looking backwards
  last = "x";
  var range = list[0];
  for (i = 1; i<list.length; i++) {
    switch (list [i] - list[i-1]) {
      case 0:
        break;
      case 1:
        //if the difference is 1, then either start a range or add a '-'
        if (last !== "-") {
          range = range + "-";
          var last = '-';
        }
        break;
      default:
        if (last !== 'x') {
          range = range + list[i-1];
        }
        bI1.push(range);
        var range = list[i];
        last = "x";
    }
  }
  //for loop is finished, and we need to consider
  // the last list element and the last bI element
  if (last == '-') {
    range=range+list[i-1];
  }
  bI1.push(range);
  return(bI1.join(", "));
}
array= [1,2,3,4,7,8,10];
console.log(bookIndex(array));
array= [1,3,4,5,6,7,9,10];
console.log(bookIndex(array));
array= [1,13,14,15,37,38,70];
console.log(bookIndex(array));
