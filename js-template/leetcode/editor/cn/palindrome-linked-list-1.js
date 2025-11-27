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
 * v1 利用递归（模拟栈）
 *
 * 时间复杂度O(N) 空间复杂度 O(N)
 * @param {ListNode} head
 * @return {boolean}
 */
let isPalindrome = function (head) {
  // 记录链表是否为回文
  let res = true;
  if (head === null || head.next === null) return res;
  // 从左向右移动的指针
  let left = head;
  // 从右向左移动的指针
  let right = head;

  function traverse(right) {
    if (right === null) return;
    // 利用递归，走到链表尾部
    traverse(right.next);
    // 后序遍历位置，此时的 right 指针指向链表右侧尾部
    // 所以可以和 left 指针比较，判断是否是回文链表
    if (right.val !== left.val) {
      res = false;
    }

    left = left.next;
  }

  traverse(right);
  return res;
};

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
