/////Array Rotate
//var rotateArray = [0,1,2,3,4,5,6,9,10,11,12,13,14,-21,16,"A","b"];\
var rotateArray = [-1,11,-2,3,4,5,6,9,10,11,12,13,14,-21,16,"A","b"]

function rotate(array, shift){
  if(shift === 0 || shift === array.length || (shift * -1) === array.length){
    console.log(array);
  }
  else{
    shift = shift % array.length;
    swap(array, shift);
  }
}

function swap(array, increment){
  var val1 = 0;
  var val2 = array[0];
  var index = 0;
  var position = 0;

  for (var i = 0; i < array.length; i++) {
    if(index + increment < 0){
      position = array.length + (index + increment);
    }
    else if(index + increment > array.length-1){
      position = increment - (array.length - index);
    }
    else{
      position = index + increment;
    }
    val1 = array[position];
    array[position] = val2;
    val2 = val1
    index = position;
  }
  console.log(array);
}

//rotate(rotateArray, -3);


//Filter Range
var rangeArray = [1,8,20,-7,14,3,4,33,-16,9,10,12,1];

function removeMinMax(array, min, max){
  for (var i = 0; i < array.length; i++) {
    if(array[i] > min && array[i] < max ){
      for (var k = i; k < array.length-1; k++) {
        array[k] = array[k+1];
      }
      array.pop();
      i -= 1;
    }
  }
  console.log(array);
}

//removeMinMax(rangeArray, 0, 10);


/////Concat
var arrayA = [1,2,3,4,5];
var arrayB = ['a','b','c','d'];

function concatArrays(array1, array2){
  var newArray = [];
  for (var i = 0; i < array1.length; i++) {
    newArray.push(array1[i]);
  }
  for (var i = 0; i < array2.length; i++) {
    newArray.push(array2[i]);
  }
  console.log(newArray);
  return newArray;
}

//concatArrays(arrayA, arrayB);
