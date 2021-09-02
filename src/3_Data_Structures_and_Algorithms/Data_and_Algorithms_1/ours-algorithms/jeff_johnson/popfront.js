//-----------------------------------------------------------------------

function popfront(arr) {
	var tmp_arr=new Array(arr.length);	
    for(var i=0; i <=arr.length-1; i++)
    {
    	tmp_arr[(arr.length-1)-i]=arr[i];    	
    }

    return tmp_arr.pop();
}
//-----------------------------------------------------------------------


