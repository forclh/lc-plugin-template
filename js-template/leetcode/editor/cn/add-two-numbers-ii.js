/*
 * @lc app=leetcode.cn id=445 lang=javascript
 * @lcpr version=30202
 *
 * [445] 两数相加 II
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
 * v1 双指针 + 利用栈反转链表 + 题目2
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function (l1, l2) {
  // 虚拟头结点（构建新链表时的常用技巧）
  let dummy = new ListNode(-1);
  // 把链表元素转入栈中
  let stk1 = [];
  let stk2 = [];
  while (l1 !== null) {
    stk1.push(l1.val);
    l1 = l1.next;
  }
  while (l2 !== null) {
    stk2.push(l2.val);
    l2 = l2.next;
  }

  // 开始执行加法，两条链表走完且没有进位时才能结束循环
  let carry = 0;
  while (stk1.length !== 0 || stk2.length !== 0 || carry > 0) {
    let value = carry;
    if (stk1.length !== 0) {
      value += stk1.pop();
    }

    if (stk2.length !== 0) {
      value += stk2.pop();
    }

    carry = Math.floor(value / 10);
    value = value % 10;
    // 构建新节点，直接接在 dummy 后面
    let newNode = new ListNode(value);
    newNode.next = dummy.next;
    dummy.next = newNode;
  }

  return dummy.next;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [7,2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n[0]\n
// @lcpr case=end

 */
