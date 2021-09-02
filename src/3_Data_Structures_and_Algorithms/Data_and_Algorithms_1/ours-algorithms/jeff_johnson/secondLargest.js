//-----------------------------------------------------------------------
function secondLargest(arr){

	var max=arr[0];
	var max2=arr[0];

	for(i=0; i<=arr.length-1; i++){
			if (arr[i]> max){
				max=arr[i];
		}
			if (arr[i] > max2 && arr[i] !=max){
				max2=arr[i];
		}	
	} //end for
  return max2;
}
//-----------------------------------------------------------------------

