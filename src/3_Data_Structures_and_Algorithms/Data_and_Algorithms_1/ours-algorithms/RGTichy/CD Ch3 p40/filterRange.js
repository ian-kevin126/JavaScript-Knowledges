function removeAt(arr,position) {
  if (position <= arr.length-1){
  for (var i=position; i<arr.length-1; i++) {
    arr[i]=arr[i+1];
  }
  arr.pop();
  }
}
function filterRange(arr,min,max) {
  var length = arr.length-1;
  for (var i = 0; i<=length; i++) {
    if (min<arr[i] && arr[i]<max) {
      removeAt(arr,i);
      length--;
    }
  }
}
var array= [1,"B",3,4,5,6];
console.log ("Before " + array)
var m1="A";
var m2="Z";
console.log("filterRange(["+array+"],"+m1+","+m2+")")
console.log (filterRange(array,m1,m2))
console.log ("After " + array)

var array= [1,"B",3,4,5,6];
console.log ("Before " + array)
var m1=2;
var m2=4;
console.log("filterRange(["+array+"],"+m1+","+m2+")")
console.log (filterRange(array,m1,m2))
console.log ("After " + array)
