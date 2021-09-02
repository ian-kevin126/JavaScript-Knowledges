var findDuplicates = function(nums) {
    let res = []
    nums.sort();
    for(let i=0;i<nums.length;i++){
      if(nums[i]===nums[i+1]){
        res.push(nums[i])
        i++
      }
    }

    return res
};