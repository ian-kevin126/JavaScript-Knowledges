//-----------------------------------------------------------------------
function filterArray(arr, min, max){
   var temp_arr=[];
   var index=0;
   for (var i=0; i<=(arr.length-1); i++){
    if(arr[i] >= min && arr[i] <=max){
        temp_arr[index]=arr[i];
        index++
    }
   }
    return temp_arr;
}
//-----------------------------------------------------------------------
