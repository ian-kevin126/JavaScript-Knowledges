//Push Front
var div = document.getElementById('textLi');
var x = [1, 2, 3];
div.textContent = 'The original array ' + x;
var text = div.textContent;


var div = document.getElementById('textLi1');
for (var i = 0; i < 18; i++) {
    x.push(i * 5);
}
div.textContent = 'I have inserted the new values at the end of the array: ' + x;




var div = document.getElementById('textLi2');
var x = [1, 2, 3];
for (var i = 0; i < 18; i++) {
    x.unshift(i * 5);
}
div.textContent = 'I have inserted the new values at the beginning of the array: ' + x;


//Pop Front
var div = document.getElementById('textLi3');
var y = [90, 3, 4, 6, 52];
div.textContent = 'The original array: ' + y;


var div = document.getElementById('textLi5');

var newFirst = y[y.length - 1];
var popped = y.pop();

var arr = [newFirst]
for (var i = 0; i < y.length + 1; i++) {

    arr.push(y[i])

}
div.textContent = 'Using .pop and a for loop I removed y[4] and returned the value at the beginning of the array: ' + arr;
