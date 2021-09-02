function dGetsJiggy(name) {
  var array = name.split("");
  var l = array.length;
  var initial = array[0];
  for (var i = 0; i<l; i++) {
    array[i] = array[i+1];
  }
  array.length = l-1;
  array[0]=array[0].toUpperCase();
  name = array.join("") + " to the "+initial+"!";
  return(name);
}
var joe="Joseph";
console.log(dGetsJiggy(joe))
