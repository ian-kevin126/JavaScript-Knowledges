// Write a program to find the node at which the intersection of two singly linked lists begins.
//
// For example, the following two linked lists: 
//
// A:          a1 → a2
//                    ↘
//                      c1 → c2 → c3
//                    ↗            
// B:     b1 → b2 → b3
//
// begin to intersect at node c1.
//
// Notes:
//
// If the two linked lists have no intersection at all, return null.
// The linked lists must retain their original structure after the function returns. 
// You may assume there are no cycles anywhere in the entire linked structure.
// Your code should preferably run in O(n) time and use only O(1) memory.
//
//
//
// Credits:Special thanks to @stellari for adding this problem and creating all test cases.


/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        auto getLenth = [](ListNode *head) {
            int len = 0;
            ListNode *p = head;
            while (p) {
                ++len;
                p = p->next;
            }
            return len;
        };
        int lenA = getLenth(headA);
        int lenB = getLenth(headB);
        ListNode *a = headA;
        ListNode *b = headB;
        int delta = abs(lenA-lenB);
        if (lenA>lenB) {
            while (delta--) {
                a = a->next;
            }
        } else {
            while (delta--) {
                b = b->next;
            }
        }
        while (a && a != b) {
            a = a->next;
            b = b->next;
        }
        return a;
    }
};

