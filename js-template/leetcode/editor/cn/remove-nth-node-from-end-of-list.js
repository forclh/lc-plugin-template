/*
 * @lc app=leetcode.cn id=19 lang=javascript
 * @lcpr version=30202
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * v1 双指针
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  // 找到倒数第 n + 1 个节点
  let x = findFromEnd(dummy, n + 1);
  x.next = x.next.next;
  return dummy.next;
};

// 找到倒数第 n 个节点
function findFromEnd(head, n) {
  let p = head;
  let q = head;
  // 让 p 先走 n 步
  for (let i = 0; i < n; i++) {
    p = p.next;
  }
  // p 和 q 一起走 k - n 步
  // 用 k 表示链表的长度
  while (p !== null) {
    p = p.next;
    q = q.next;
  }
  // 此时 q 就是正数第 k - n + 1个节点，即倒数第 n 个节点
  return q;
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n
// @lcpr case=end

 */
