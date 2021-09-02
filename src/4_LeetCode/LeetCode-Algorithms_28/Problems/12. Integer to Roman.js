var intToRoman = function(num) {
    let number = [1,   4,    5,   9,    10,  40,   50,  90,   100, 400,  500, 900,  1000];
    let roman =  ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    let tmp, index = 12, res = ""; 
    while(index >= 0){
        if(number[index] > num){
            index--;
            continue;
        }
        while(num >= number[index]){
            num -= number[index];
            res += roman[index];
        }
        index--;
    }
    return res;
};