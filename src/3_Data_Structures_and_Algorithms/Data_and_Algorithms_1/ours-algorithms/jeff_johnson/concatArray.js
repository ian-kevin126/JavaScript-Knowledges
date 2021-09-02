//-----------------------------------------------------------------------
function concatArray(arr1, arr2){  
  var index= arr1.length;
  var new_arr=arr1.slice(0);
	var index=arr1.length;

  for (i=0; i<=(arr2.length-1); i++){
    new_arr[index] = arr2[i]; 
    index++;
    }
 
    return new_arr;
}

//-----------------------------------------------------------------------

  
