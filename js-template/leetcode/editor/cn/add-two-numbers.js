/*
 * @lc app=leetcode.cn id=2 lang=javascript
 * @lcpr version=30202
 *
 * [2] 两数相加
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
 * v1 双指针 + 虚拟头节点
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function (l1, l2) {
  let p1 = l1;
  let p2 = l2;
  let dummy = new ListNode(-1);
  let p = dummy;
  // 记录进位
  let carry = 0;
  // 开始执行加法，两条链表都走完且没有进位时才能结束循环
  while (p1 !== null || p2 !== null || carry > 0) {
    let value = carry;
    if (p1 !== null) {
      value += p1.val;
      p1 = p1.next;
    }

    if (p2 !== null) {
      value += p2.val;
      p2 = p2.next;
    }

    // 处理进位
    carry = Math.floor(value / 10);
    value = value % 10;
    //  构建新节点
    let node = new ListNode(value);
    p.next = node;
    p = p.next;
  }
  return dummy.next;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n[0]\n
// @lcpr case=end

// @lcpr case=start
// [9,9,9,9,9,9,9]\n[9,9,9,9]\n
// @lcpr case=end

 */
