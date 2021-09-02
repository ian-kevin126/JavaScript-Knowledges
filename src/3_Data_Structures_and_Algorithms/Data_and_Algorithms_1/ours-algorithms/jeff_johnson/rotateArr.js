//-----------------------------------------------------------------------
function rotateArray(arr, shiftBy){
//spent forever trying to come up with my own solution!
//Ultimately had to Google to find and adapt a good algorithm
// ref http://stackoverflow.com/questions/876293/fastest-algorithm-for-circle-shift-n-sized-array-for-m-position
    function reverseArray(arr, startIndex, endIndex){
        var temp=0; 
        var size= endIndex-startIndex+1;   
        var index=startIndex;
        for(var i=0; i < (size)/2; i++)
        {
            temp=arr[index];
            arr[index]=arr[(endIndex)-i];
            arr[(endIndex)-i]=temp;
            index++;
        }
        return arr;
    }

    var size=arr.length;
    if(shiftBy <0){
        shiftBy=shiftBy+size;
    }
    if(shiftBy > size){
        console.log("Error! Shift amount is larger than array size");
        return(null);
      }

    if(shiftBy >0)
    {
        arr=reverseArray(arr, 0, size-1);
        arr=reverseArray(arr, 0, shiftBy-1);
        arr=reverseArray(arr, shiftBy, size-1); 
    }

    return arr;
}    
  
//-----------------------------------------------------------------------
