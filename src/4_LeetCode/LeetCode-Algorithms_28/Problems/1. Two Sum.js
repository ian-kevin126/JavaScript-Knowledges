var twoSum = function(nums, target) {
    for(let i = 0; i< nums.length;i++){
        if(nums.indexOf(target-nums[i]) >= 0 && nums.indexOf(target-nums[i])!== i){
        return[i,nums.indexOf(target-nums[i])]
        }
    }
};
