//-----------------------------------------------------------------------
function SwapPairs(arr) {
	var tmp_arr=arr.slice(0);	
    for(var i=1; i <=arr.length-1; i+=2)    {
    	tmp_arr[i-1]=arr[i];   
        tmp_arr[i]=arr[i-1] 	
    }
    return tmp_arr;
}
//-----------------------------------------------------------------------
