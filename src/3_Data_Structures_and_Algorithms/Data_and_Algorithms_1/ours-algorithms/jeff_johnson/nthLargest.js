//-----------------------------------------------------------------------
function nthLargest(arr, nth){
	max_n=arr.sort();
  if(arr.length-nth <0){
  	return null;
  }
	else return max_n[arr.length-nth];
}
//-----------------------------------------------------------------------
