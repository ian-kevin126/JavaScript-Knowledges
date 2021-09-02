var maxSubArray = function(nums) {
    let curVal = 0;
    let maxVal = nums[0];
    
    nums.forEach(function(val){
        curVal = curVal>0 ? curVal+val : val;
        maxVal = Math.max(maxVal, curVal);
    });
    
    return maxVal;
};