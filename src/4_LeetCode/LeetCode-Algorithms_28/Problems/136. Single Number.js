var singleNumber = function (nums) {
    let len = nums.length, result = 0;
    for (let i = 0; i < len; i++) {
        result = result ^ nums[i];
    }
    return result;
};