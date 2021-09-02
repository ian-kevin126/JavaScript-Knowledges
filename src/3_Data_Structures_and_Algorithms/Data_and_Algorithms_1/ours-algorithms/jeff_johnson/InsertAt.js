//-----------------------------------------------------------------------
function InsertAt(arr, y, val) {
	var tmp_arr=new Array(arr.length+1);	
    for(var i=0; i < y; i++)    {
    	tmp_arr[i]=arr[i];    	
    }
    tmp_arr[y]=val;
    for(var i=y; i<=arr.length-1; i++){
    	tmp_arr[i+1]=arr[i];  
    }

    return tmp_arr;
}

//-----------------------------------------------------------------------

