/*
 * @lc app=leetcode.cn id=876 lang=javascript
 * @lcpr version=30202
 *
 * [876] 链表的中间结点
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
let middleNode = function (head) {
  let slow = head;
  let fast = head;
  // 快指针走到末尾时停止
  while (fast !== null && fast.next !== null) {
    // 慢指针走一步，快指针走两步
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5,6]\n
// @lcpr case=end

 */
