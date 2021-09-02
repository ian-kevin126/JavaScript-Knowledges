/* I put all of the first days arrays in one file.  To run each array just
un-comment the call for the function
Let me know if you would prefer seperate files for each Algorithm in the future. */


////// Push Front
var pushArray = [0,1,2,3,4];

function pushFront(array, value){
  var i;
  var newArray = [value];
  for(i=0; i<array.length; i++){
    newArray[i+1] = array[i];
  }
  array = newArray;
  console.log(array);
}

////Second solution
function pushFront1(array, value){
  var i;
  for(i=array.length; i>0; i--){
    array[i] = array[i-1];
  }
  array[0] = value;
  console.log(array);
}

//pushFront(pushArray, 9);
//pushFront1(pushArray, 9);

////// Pop Front
var popArray = ["a","b","c","d","e","f"];

function popFront(){
  var i;
  var startVal = popArray[0];
  for (var i = 0; i<popArray.length-1; i++) {
    popArray[i] = popArray[i+1];
  }
  popArray[popArray.length-1] = startVal;
  popArray.pop();
  console.log(popArray);
  return startVal;
}

//popFront();

///////Insert At
//This will insert the value at the end of the array if the argument index is greater than the highest index in the array

var insertArray= ['joe','bob','mary','jim','sue','jill'];

function insertAt(array, index, value){
  if (index < 0) {
    console.warn("Invalid Index")
  }
  else if (index >= array.length) {
    array[array.length] = value;
    console.log(array);
  }
  else{
    var i;
    array[array.length] = 0;
    for (var i = array.length-1; i > index ; i--){
      array[i]=array[i-1];
      i--;
    }
    array[index] = value;
    console.log(array);
  }
}

//insertAt(insertArray, 3 , "leo");


///// Remove At
//This will remove the last value in the array if the argument index is greater than the highest index in the array
var removeArray = ['a','b','c','d','e'];

function removeAt(array, index){
  var value;
  var i;
  if (index < 0){
    console.warn("Invalid Index")
  }
  else if (index >= array.length-1) {
    value = array[array.length-1];
    array.pop();
    console.log(array);
    return value;
  }
  else{
    value = array[index];
    for (i = index; i < array.length-1; i++) {
      array[i] = array[i+1];
    }
    array.pop();
    console.log(array);
    return value;
  }
}

//removeAt(removeArray, 2);

//////Swap Array Pairs
var swapArray = ['Michael','Arbogast','Vishnu','Prasad','Leo','Sooter','Jeff','Johnson','Elvis'];

function swapPairs(array){
  var i;
  var value;
  for (var i = 0; i < array.length; i+=2) {
    if (array[i+1]) {
      value = array[i];
      array[i] = array[i+1];
      array[i+1] = value;
    }
  }
  console.log(array);
}

//swapPairs(swapArray);

/////Remove Duplicates
var dupArray = [1,1,4,5,7,7,7,3,8,8,3,9,9];

function dupRemove(array){
  var i;
  for (var i = 0; i < array.length-1; i++) {
    if (array[i] === array[i+1]) {
      removeAtIndex(array, i+1);
    }
  }
  console.log(array);
}

function removeAtIndex(array, index){
  var i;
  if (index === array.length-1) {
    array.pop();
  }
  else{
    for (i = index; i < array.length-1; i++) {
      array[i] = array[i+1];
    }
    array.pop();
  }
}

//dupRemove(dupArray);


///// Bonus Algorithm- Remove any repeating values in array
//Uses removeAtIndex function from above
function repeatRemove(array){
  var i;
  for (var i = 0; i < array.length-1; i++) {
    var k;
    for (var k = 0; k < array.length; k++) {
      if(array[i] === array[k] && i !== k){
        removeAtIndex(array, k);
      }
    }
  }
  console.log(array);
}

//repeatRemove(dupArray);
