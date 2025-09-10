/*
 * @lc app=leetcode.cn id=61 lang=javascript
 * @lcpr version=30203
 *
 * [61] 旋转链表
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
 * v2 成环断开法
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
let rotateRight = function (head, k) {
  if (head === null || head.next === null) return head;
  let len = 1; // 记录链表的长度
  let cur = head;
  // 计算链表长度并找到尾节点
  while (cur.next !== null) {
    cur = cur.next;
    len++;
  }
  k = k % len; // 计算实际需要旋转的次数
  if (k === 0) return head;
  // 此时cur是尾节点位置
  let tail = cur;

  // 成环
  tail.next = head;

  // 找到新的尾节点（第 len - k 个节点）
  let newTail = head;
  for (let i = 0; i < len - k - 1; i++) {
    newTail = newTail.next;
  }
  // 新的头节点是新尾节点的下一个节点
  let newHead = newTail.next;
  // 断开环
  newTail.next = null;
  return newHead;
};

// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [0,1,2]\n4\n
// @lcpr case=end

 */
