var runningSum = function(nums) {
    
    nums.reduce((a,c,i,arr) => arr[i] += a)
    return nums
};