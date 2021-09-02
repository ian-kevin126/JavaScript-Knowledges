
//-----------------------------------------------------------------------

function RemoveAt(arr, y) {
    var tmp_arr=[]; 
    for(var i=0; i < y; i++)    {
        tmp_arr[i]=arr[i];      
    }
    var temp=arr[y];
    for(var i=y; i<arr.length-1; i++){
        tmp_arr[i]=arr[i+1];  
    }
    return tmp_arr;
}

//-----------------------------------------------------------------------

