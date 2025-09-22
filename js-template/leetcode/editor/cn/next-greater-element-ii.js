/*
 * @lc app=leetcode.cn id=503 lang=javascript
 * @lcpr version=30203
 *
 * [503] 下一个更大元素 II
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 单调栈 + 环形数组
 * @param {number[]} nums
 * @return {number[]}
 */
let nextGreaterElements = function (nums) {
  let n = nums.length;
  let res = new Array(n).fill(-1);
  let stack = [];
  // 单调栈模板
  for (let i = 2 * n - 1; i >= 0; i--) {
    let idx = i % n; // 索引 i 需要进行模处理，其他保持
    while (stack.length !== 0 && nums[idx] >= stack[stack.length - 1]) {
      stack.pop();
    }
    if (i < n) {
      res[idx] = stack.length === 0 ? -1 : stack[stack.length - 1];
    }
    stack.push(nums[idx]);
  }
  return res;
};
// @lc code=end

// your test code here
nextGreaterElements([1, 2, 1]);
/*
// @lcpr case=start
// [1,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,3]\n
// @lcpr case=end

 */
