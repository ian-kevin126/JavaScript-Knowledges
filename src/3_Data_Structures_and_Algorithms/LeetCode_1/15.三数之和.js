/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
   
  // 比如我们有一个-4 （遍历）
  // 找到两个数字 看看是不是4
  // 排序+双指针
  if(nums.length<3) return []
  let list = [] 
  nums.sort((a,b)=>a-b) // n*lgn
  for(let i=0;i<=nums.length;i++){

    if(nums[i]===nums[i-1]) continue
    let left = i+1
    let right = nums.length-1
    while(left<right){

      if(right===i){
        right-- // 越过
      }else if(nums[left]+nums[right]+nums[i]===0){
        // 找到一个
        list.push([nums[left],nums[right],nums[i]])
        while(nums[left]===nums[left+1]){
          left++ // 忽略重复的
        }
        left++
  
        while(nums[right]===nums[right-1]){
          right-- // 忽略重复的
        }
        right--
      }else if(nums[left]+nums[right]+nums[i]>0){
        right--
      }else{
        left++
      }
    }
  }
  return list
};
// @lc code=end

