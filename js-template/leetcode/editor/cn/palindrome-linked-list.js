/*
 * @lc app=leetcode.cn id=234 lang=javascript
 * @lcpr version=30203
 *
 * [234] 回文链表
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
 * v2 利用回文的特性反转部分链表
 * 时间复杂度O(N) 空间复杂度 O(1)
 * @param {ListNode} head
 * @return {boolean}
 */
let isPalindrome = function (head) {
  // 1. 找到链表终点
  let fast = head;
  let slow = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  // 此时 slow 就是中间节点
  if (fast !== null) {
    // 说明链表的长度为奇数，slow 需要前进一位
    slow = slow.next;
  }

  // 2. 反转后半部分链表
  let left = head;
  let right = reverse(slow);

  // 3. 比较是否是回文
  let p = right;
  while (right !== null) {
    if (right.val !== left.val) {
      return false;
    }
    right = right.next;
    left = left.next;
  }
  let q = left;

  // 还原链表（可选）
  q.next = reverse(p);
  return true;
};
// 反转整条单链表
function reverse(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let pre = null;
  let cur = head;
  let next = cur.next;
  while (cur !== null) {
    cur.next = pre;
    pre = cur;
    cur = next;

    if (next !== null) {
      next = next.next;
    }
  }

  return pre;
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */
