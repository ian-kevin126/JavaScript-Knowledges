// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.
//
//
//
// Note:
//
// You must not modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n2).
// There is only one duplicate number in the array, but it could be repeated more than once.
//
//
//
// Credits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.


/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const hashMap = {};
    for (var i = 0, l = nums.length; i < l; i++ ){
        if (!hashMap[nums[i]]) {
            hashMap[nums[i]] = true;
        } else {
            return nums[i];
        }
    }
};
