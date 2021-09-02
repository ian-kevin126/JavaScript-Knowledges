var shuffle = function(nums, n) {
    return Array(n).fill().reduce((ret, _, i) => ret.concat([nums[i], nums[i+n]]), [])
};