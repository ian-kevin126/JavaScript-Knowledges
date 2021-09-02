//Remove Negatives

var numberArray = [-3,4,16,2,89,100,7,12,-19,-1,47,1008,10];

function removeNegatives(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      removeAtIndex(array, i);
      i -= 1;
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

removeNegatives(numberArray);

/////Second to last
var valueArray = ["joe",'a',12,1982,'Ian','S',300,'l'];

function returnSecondToLast(array){
  var returnValue;
  if(array.length < 2){
    return null;
  }
  else{
    returnValue = array[array.length - 2];
    console.log(returnValue);
    return returnValue;
  }
}

//returnSecondToLast(valueArray);

/////Return Nth value

function returnNthValue(array, value){
  var returnValue;
  if(value > array.length-1 || value < 0){
    return null;
  }
  else{
    returnValue = array[value];
    console.log(returnValue);
    return returnValue;
  }
}

//returnNthValue(valueArray, 4);


/////Return Second Largest
function secondLargest(array){
  var maxIndex = 0;
  var secMax;
  findMax(array);
  removeAtIndex(array, maxIndex);

  secMax = findMax(array);
  console.log(secMax);
  return secMax;

  function findMax(array) {
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] > max) {
        maxIndex = i;
        max = array[i];
      }
    }
    console.log("max is " + max);
    return max;
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
}

//secondLargest(numberArray);


///Nth Largest


function nthLargest(array, index){
  var index = index - 1;
  var maxIndex = numberArray[0];
  var orderedArray = [];
  while (array.length > 1) {
    orderedArray.push(findMax(array));
    removeAtIndex(array, maxIndex);
  }
  console.log("ordered array max to min: " + orderedArray);
  console.log(orderedArray[index]);
  return orderedArray[index];

  function findMax(array) {
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] > max) {
        maxIndex = i;
        max = array[i];
      }
    }
    console.log("max is " + max);
    return max;
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
}

//nthLargest(numberArray, 1);
