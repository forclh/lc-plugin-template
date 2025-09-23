/*
 * @lc app=leetcode.cn id=1019 lang=javascript
 * @lcpr version=30203
 *
 * [1019] 链表中的下一个更大节点
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
 * v1 单调栈
 * @param {ListNode} head
 * @return {number[]}
 */
let nextLargerNodes = function (head) {
  // 链表转数组
  let nums = [];
  let p = head;
  while (p !== null) {
    nums.push(p.val);
    p = p.next;
  }

  // 单调栈：求下一个最大元素
  let stack = [];
  let res = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length !== 0 && nums[i] >= stack[stack.length - 1]) {
      stack.pop();
    }
    res[i] = stack.length === 0 ? 0 : stack[stack.length - 1];
    stack.push(nums[i]);
  }

  return res;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [2,1,5]\n
// @lcpr case=end

// @lcpr case=start
// [2,7,4,3,5]\n
// @lcpr case=end

 */
