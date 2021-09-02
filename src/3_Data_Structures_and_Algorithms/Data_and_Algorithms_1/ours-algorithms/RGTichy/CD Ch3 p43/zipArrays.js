function zipArrays(a,b,c) {
  //empty array C
  c.length = 0;
  //find the longer array to loop on
  l = a.length - 1;
  if(b.length - 1 > l) {
    l = b.length - 1;
  }
  for (var i = 0; i <= l; i++) {
    if (i < a.length) {
      c.push(a[i])
    }
    if (i < b.length) {
      c.push(b[i])
    }
    console.log(c);
  }
}
array1=['A','B','X'];
array2=[1,2,3,4,5,6,7];
array3=[33,"XX",33,"XX",33,"XX",33,"XX",33,"XX",33,"XX",33,"XX"];
zipArrays(array1,array2,array3);
console.log (array3)
