/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (41.76%)
 * Total Accepted:    297.2K
 * Total Submissions: 711.5K
 * Testcase Example:  '[1,1,2]'
 *
 * Given a sorted linked list, delete all duplicates such that each element
 * appear only once.
 *
 * Example 1:
 *
 *
 * Input: 1->1->2
 * Output: 1->2
 *
 *
 * Example 2:
 *
 *
 * Input: 1->1->2->3->3
 * Output: 1->2->3
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function deleteDuplicates(head) {
  if (!head || head.next === null) {
    return head;
  }

  let current = head;
  let after = head && head.next;
  while (current !== null && after !== null) {
    if (current.val === after.val) {
      current.next = after.next;
    } else {
      current = after;
    }
    after = after.next;
  }
  return head;
};
