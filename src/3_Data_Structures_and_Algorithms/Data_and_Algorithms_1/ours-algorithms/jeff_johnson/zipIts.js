//-----------------------------------------------------------------------

function zipIt(arr1, arr2){
	 var index=0;
	 var tmp_arr=[];

	 for(i=0; i<=arr2.length-1; i++)
	 {
	 		if(i <=arr1.length-1){
	 			tmp_arr[index]=arr1[i];
	 			tmp_arr[index+1]=arr2[i]
	 			index +=2;
	 		}
	 		else
	 		if(i > arr1.length-1){
	 			tmp_arr[index]=arr2[i];
	 			index ++;
	 		}
 		}
 		arr1=tmp_arr; 
		return arr1;
}

//------------------------------------------------------------------------
