//-----------------------------------------------------------------------

function RemoveDuplicates(arr) {
	var tmp_arr=[];
	tmp_arr[0]=arr[0];
    var j=1;
    console.log(tmp_arr[0]);
    for(var i=1; i <=arr.length-1; i++){    	
		if(arr[i] != arr[i-1]){
			tmp_arr[j]=arr[i];
			j++;
		}
    }  
    return tmp_arr;
}

//-----------------------------------------------------------------------

