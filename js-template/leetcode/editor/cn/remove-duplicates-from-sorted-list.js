/*
 * @lc app=leetcode.cn id=83 lang=javascript
 * @lcpr version=30202
 *
 * [83] 删除排序链表中的重复元素
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * v1 双指针（快慢指针）
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = function (head) {
  if (head === null) return null;
  let slow = head;
  let fast = head;
  while (fast !== null) {
    if (fast.val !== slow.val) {
      slow.next = fast;
      slow = slow.next;
    }
    fast = fast.next;
  }
  // 断开与后面重复元素的连接
  slow.next = null;
  return head;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2,3,3]\n
// @lcpr case=end

 */
