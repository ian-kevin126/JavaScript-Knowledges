//-----------------------------------------------------------------------

function doubleTrouble(arr){
	 var index=0;
	 var tmp_arr=[];

	 for(var i=0; i<=arr.length-1; i++)
	 {
	 		tmp_arr[index]=arr[i];
	 		tmp_arr[index+1]=arr[i];
	 		index+=2;	 			
 		} 
	return tmp_arr;
}

//------------------------------------------------------------------------
