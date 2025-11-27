/*
 * @lc app=leetcode.cn id=160 lang=javascript
 * @lcpr version=30202
 *
 * [160] 相交链表
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * v1 双指针 从逻辑上连接两个链表
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
let getIntersectionNode = function (headA, headB) {
  // p 指向 A 链表头结点，q 指向 B 链表头结点
  let p = headA;
  let q = headB;

  while (p !== q) {
    // p 走一步，如果走到 A 链表末尾，转到 B 链表
    if (p === null) {
      p = headB;
    } else {
      p = p.next;
    }
    // q 走一步，如果走到 B 链表末尾，转到 A 链表
    if (q === null) {
      q = headA;
    } else {
      q = q.next;
    }
  }
  // 如果没有相交，则 p = q = null，如果相交则返回相交点
  return p;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 8\n[4,1,8,4,5]\n[5,6,1,8,4,5]\n2\n3\n
// @lcpr case=end

// @lcpr case=start
// 2\n[1,9,1,2,4]\n[3,2,4]\n3\n1\n
// @lcpr case=end

// @lcpr case=start
// 0\n[2,6,4]\n[1,5]\n3\n2\n
// @lcpr case=end

 */
