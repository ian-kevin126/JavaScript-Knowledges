/////Reverse array
var revArray = [1,2,3,4,5,6,7,20,21];

function reverseArray(array){
  var k = array.length-1;
  var val;

  for (var i = 0; i < array.length/2; i++) {
    val = array[i];
    array[i] = array[k];
    array[k] = val;
    k--;
  }
  console.log(array);
}

//reverseArray(revArray);

/////Remove Negatives
var negArray = [1,3,-4,5,-2,10,-20];

function removeNegative(array){
  for (var i = 0; i < array.length; i++) {
    if (array[i]<0) {
        removeAtIndex(array, i);
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

//removeNegative(negArray);

/////Array Min to Front
var minArray = [1,3,8,4,-3,5,12,10];

function moveMin(array){
  var min = array[0];
  var minIndex = 0;
  for (var i = 0; i < array.length; i++) {
    if(array[i] < min){
      min = array[i];
      minIndex = i;
    }
  }
  moveToFront(array, minIndex)
}

function moveToFront(array, index){
  var val = array[index];
  if(index !== 0){
    for (var i = index; i > 0; i--) {
      array[i] = array[i-1];
    }
  }
  array[0] = val;
  console.log(array);
}

//moveMin(minArray, 4);

/////Skyline Heights
var skyArray = [1,-3,-1,4,3,7,5,9,3,7];


function skyLine(array){
  var sightArray = [array[0]];
  var height = array[0];
  for (var i = 0; i < array.length; i++) {
    if(array[i] > height){
      sightArray.push(array[i]);
      height = array[i];
    }
  }
  console.log(sightArray);
  return sightArray;
}

//skyLine(skyArray);
