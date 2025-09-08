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
 * v1 反转链表系列 - 反转整个单链表
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  // 由于单链表的结构，至少要用三个指针才能完成迭代反转
  // cur 是当前遍历的节点，pre 是 cur 的前驱结点，nxt 是 cur 的后继结点
  let pre = null;
  let cur = head;
  let next = cur.next;
  while (cur !== null) {
    // 逐个结点反转
    cur.next = pre;
    // 更新指针位置

    pre = cur;
    cur = next;

    if (next !== null) {
      next = next.next;
    }
  }
  // 返回反转后的头结点
  return pre;
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
