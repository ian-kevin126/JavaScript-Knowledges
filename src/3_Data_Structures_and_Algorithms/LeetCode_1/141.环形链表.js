/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val
 *     this.next = null
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle1 = function(head) {
  let count = 1
  while(head){
    if(count>10000){
      return true
    }
    count+=1
    head = head.next
  }
  // 遍历结束
  return false
}
var hasCycle2 = function(head) {
  // 你用对象Map也可以的
  let cache = new Set()
  while(head){
    if(cache.has(head)){
      return true
    }else{
      cache.add(head)
    }
    head = head.next
  }
  return false
}

var hasCycle = function(head) {
  // 操场跑圈，只要仕个圈，跑的快的，一定会把跑的慢的套圈
  let slow = head
  let fast = head
  while(fast && fast.next){
    fast = fast.next.next
    slow = slow.next
    if(fast===slow){
      return true
    }
  }
  return false
}

// @lc code=end

