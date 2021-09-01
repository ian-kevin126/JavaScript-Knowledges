/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle1 = function(head) {
    // 你用对象Map也可以的
    let cache = new Set()
    while(head){
      if(cache.has(head)){
        return head
      }else{
        cache.add(head)
      }
      head = head.next
    }
    return null
};
var detectCycle = function(head) {
    // 操场跑圈，只要仕个圈，跑的快的，一定会把跑的慢的套圈
    let slow = head
    let fast = head
    let start = head
    while(fast && fast.next){
      fast = fast.next.next
      slow = slow.next
      if(fast===slow){
        // return true

        while(slow && start){
          if(slow===start){
            return slow
          }
          slow = slow.next
          start = start.next
        }

      }
    }
    return null
};


// @lc code=end

