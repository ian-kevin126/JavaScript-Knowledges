//-----------------------------------------------------------------------

function removeNegatives(arr){
	var tmp_arr=[];	
    var j=0;
    for(var i=0; i <= arr.length-1; i++)
    {
    	if(arr[i] >= 0){
            tmp_arr[j]=arr[i];
            j++;
        }
    }

    return tmp_arr;     
}

//-----------------------------------------------------------------------


