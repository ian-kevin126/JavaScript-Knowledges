//------------------------------------------------------------------------
function removeNegatives(arr){
 var index=0;
 var size=arr.length-1;  //keep array size reference constant
 
 for(i=0; i<=size; i++)
 {
 	if(arr[i]>=0){
 		arr[index]=arr[i];
 		index++;
 	}
 } //end for i
 for(i=index; i<=size; i++){
 	console.log('i=', i, 'arr[i]=', arr[i]);
 	var popped=arr.pop();  //remove extras from array
 }	

return(arr);
} //end removeNegatives
//------------------------------------------------------------------------
