/*
 * @lc app=leetcode.cn id=25 lang=javascript
 * @lcpr version=30203
 *
 * [25] K 个一组翻转链表
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
 * v1 反转链表系列
 * 递归（分解问题思想）
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
let reverseKGroup = function (head, k) {
  let a = head;
  let b = head;
  for (let i = 0; i < k; i++) {
    // 不足 k 个，不需要反转了
    if (b === null) return head;
    b = b.next;
  }
  // 此时区间 [a, b) 包含 k 个待反转元素
  // 翻转链表的前 k 个节点
  let newHead = reverseN(a, k);
  // 此时 b 指向下一组待反转的头结点
  // 递归反转后续链表并连接起来
  a.next = reverseKGroup(b, k);
  return newHead;
};

// 反转链表的前n个节点
function reverseN(head, n) {
  if (head === null || head.next === null) return head;

  let pre = null;
  let cur = head;
  let next = null;

  while (n > 0) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
    n--;
  }

  head.next = cur;
  return pre;
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n3\n
// @lcpr case=end

 */
