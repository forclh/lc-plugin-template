/*
 * @lc app=leetcode.cn id=92 lang=javascript
 * @lcpr version=30203
 *
 * [92] 反转链表 II
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
 * v1 反转链表 - 反转链表的一部分
 * 遍历方法，先找到第 left - 1 个节点然后从第 left 个节点开始反转 right - left + 1 个节点
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
let reverseBetween = function (head, left, right) {
  if (left === 1) {
    return reverseN(head, right);
  }
  let preNode = head;
  // 定位到第 left - 1 节点
  for (let i = 1; i < left - 1; i++) {
    preNode = preNode.next;
  }
  // 从第 left 个节点开始反转 right - left + 1 个节点
  preNode.next = reverseN(preNode.next, right - left + 1);
  return head;
};

// 反转链表的前 n 个元素
let reverseN = function (head, n) {
  if (head === null || head.next === null) return head;

  let cur = head;
  let pre = null;
  let next = null;

  while (n > 0) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
    n--;
  }
  // 此时的 cur 是第 n + 1 个节点，head 是反转后的尾结点
  head.next = cur;
  // 此时的 pre 是反转后的头结点
  return pre;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n4\n
// @lcpr case=end

// @lcpr case=start
// [5]\n1\n1\n
// @lcpr case=end

 */
