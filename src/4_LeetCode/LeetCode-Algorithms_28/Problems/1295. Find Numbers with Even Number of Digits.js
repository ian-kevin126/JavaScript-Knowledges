var findNumbers = function(nums) {
    return nums.filter((v) => String(v).length % 2 === 0).length;
};