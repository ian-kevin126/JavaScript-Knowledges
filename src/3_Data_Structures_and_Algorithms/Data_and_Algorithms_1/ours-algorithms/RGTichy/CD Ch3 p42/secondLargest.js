function makeSpace(arr, pos) {
  for (var i=arr.length; i>(pos-1); i--) {
    arr[i]=arr[i-1];
  }
  arr[pos]="X";
  // console.log("In makeSpace, arr = ["+arr+"]")
}
function insertAt(arr, value, position){
  if (position == "begin") {
    makeSpace(arr,0);
    arr[0]= value;
  }
  else {
    if(position > arr.length-1 || position == "end") {
      arr.push(value);
    }
    else {
      makeSpace(arr,position);
      arr[position]=value;
    }
  }
  // console.log("After insertAt, arr = ["+arr+"]")
}
function nthLargest(arr,nth){
  if (arr.length-nth<0) {
    return(null)
  }
  else {
    var sorted = []; //set as an empty array?
    // rolling thru arr to put values in order
    for (var i = 0; i < arr.length; i++) {
      // console.log ("arr["+i+"] ="+ arr[i]);
      // console.log ("SL="+sorted.length);
      //check to see if it belongs on the end
      // ( either the array is empty OR the element is smaller than the last element)
      if (sorted.length == 0 || arr[i] < sorted[sorted.length-1]) {
        //drop it on the end, explicitily
        insertAt(sorted,arr[i],"end");
      }
      else {
        //check to see if it belongs on the front
        if (arr[i] > sorted[0]) {
          // put it on the front explicitly
          insertAt(sorted,arr[i],"begin");
        }
        else {
          //loop thru to find the right spot
          var j = 0;
          while (arr[i]<sorted[j]) {
            j++;
          }
          if (arr[i] !== sorted[j]) {
            insertAt(sorted,arr[i],j);
          }
        }
      }
    }
    return(sorted[nth-1]);
  }
}
function secondLargest(arr) {
  return(nthLargest(arr,2));
}
array=[5,2];
console.log ("2nd largest is "+ secondLargest(array))
console.log("----------")
array=[-7,5,-2,5,10,7,-2,0,3];
console.log ("2nd largest is "+ secondLargest(array))
console.log("----------")
array=[-7];
console.log ("2nd largest is "+ secondLargest(array))
