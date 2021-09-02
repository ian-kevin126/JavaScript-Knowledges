var toLowerCase = function(str) {
    let ans = ''
    let diff = 'a'.charCodeAt(0) - 'A'.charCodeAt(0)
    for(let i=0; i<str.length; i++){
        if(str[i] >= 'A' && str[i] <= 'Z'){
            ans += String.fromCharCode(str[i].charCodeAt(0) + diff)
            continue
        }
        ans += str[i]
    }
    return ans
};