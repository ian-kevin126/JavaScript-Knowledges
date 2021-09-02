var sortArrayByParity = function(A) {
    return A.sort((a,b) => ((a % 2 && b % 2) || (a % 2 == 0 && b % 2 == 0))? 0 : (a % 2)? 1 : -1);
};
