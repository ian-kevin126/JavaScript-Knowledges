var smallerNumbersThanCurrent = function(nums) {
    return nums.map(x => nums.filter(y => y < x).length);
};