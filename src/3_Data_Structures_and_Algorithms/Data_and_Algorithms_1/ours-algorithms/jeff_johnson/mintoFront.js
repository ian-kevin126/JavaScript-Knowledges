//-----------------------------------------------------------------------
function mintoFront(arr){
	var min = arr[0];
    var index=0;	

    for(var i=1; i <= arr.length-1; i++)  //find min of array
    {
         if(min > arr[i]){
            min=arr[i];
            index=i;
         }
    }

    for(var j=index; j>0; j--)  //move needed array elements to the right
    {
        arr[j]=arr[j-1];
    }

    arr[0]=min; 
    return arr;     
}
//-----------------------------------------------------------------------

