/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  

  // area = n * min(hright,hleft)
  //         (n-1)*min(hright,hleft)
  // 两边的指针，移动矮的那一个

  if(!height || height<=1){ return 0}

  let left = 0
  let right = height.length-1
  let maxArea = 0 // 存储我们的最大值

  while(left<right){

    const area = Math.abs(right-left) * Math.min(height[left],height[right])
    if(area>maxArea){
      maxArea = area
    }
    if(height[left]<height[right]){
      left++
    }else{
      right--
    }
  }
  return maxArea

};
// @lc code=end

