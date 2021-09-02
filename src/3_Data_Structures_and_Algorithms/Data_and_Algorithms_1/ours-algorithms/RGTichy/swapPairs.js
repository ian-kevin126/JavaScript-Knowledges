arr=[1,'yes',true,4,false,6,7];

function swapPairs(arr) {
  var tmp = '';
  for (var i=0; i<=(arr.length/2+0.5); i=i+2) {
    tmp=arr[i];
    arr[i]=arr[i+1];
    arr[i+1]=tmp;
    }
return arr;
}
console.log(swapPairs(arr))
