var letterCombinations = function(digits) {
    
    var result = [];
    if(digits.length <=0)
        return [];
    var words =[
        ["a","b","c"],
        ["d","e","f"],
        ["g","h","i"],
        ["j","k","l"],
        ["m","n","o"],
        ["p","q","r","s"],
        ["t","u","v"],
        ["w","x","y","z"]
    ]
    
    const DFS = function(arr,next,r=[]){
        
        if(arr.length <=0){
            //console.log(arr,next,r)
            result.push(r.join(''));
            return ;
        }
      //  console.log(arr,next,r)
         for(let i=0;i<arr.length;i++){
            if(next.length > 0){
                 DFS(words[next[0] -2],next.substring(1),r.concat(arr[i]));
            }else{
                DFS([],next.substring(1),r.concat(arr[i]));
            }
            
         }
    }
    
   DFS(words[digits[0] -2],digits.substring(1));
    return result;
   
};