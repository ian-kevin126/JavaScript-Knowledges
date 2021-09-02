function removeAt(arr,position) {
  if (position <= arr.length-1){
  for (var i=position; i<arr.length-1; i++) {
    arr[i]=arr[i+1];
  }
  arr.pop();
  }
}
function stringReverse(s) {
  s2 = s.split("");
  for (var i = s2.length - 2; i >= 0;i--) {
    var t = s2[i];
    removeAt(s2,i);
    s2.push(t);
  }
  return(s2.join(""))
}
console.log(stringReverse("I love strings"))
