/*
 * @lc app=leetcode.cn id=206 lang=javascript
 * @lcpr version=30203
 *
 * [206] 反转链表
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
 * v1 递归解法(分解问题)
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = function (head) {
  // 定义：输入一个单链表的头节点，将该链表反转，返回头节点
  if (head === null || head.next === null) {
    return head;
  }
  let last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
