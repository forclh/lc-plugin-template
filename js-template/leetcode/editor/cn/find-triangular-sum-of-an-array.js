/*
 * @lc app=leetcode.cn id=2221 lang=javascript
 * @lcpr version=30203
 *
 * [2221] 数组的三角和
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1.1 模拟(空间优化)
 * @param {number[]} nums
 * @return {number}
 */
let triangularSum = function (nums) {
  for (let len = nums.length; len > 1; len--) {
    for (let i = 0; i < len; i++) {
      nums[i] = (nums[i] + nums[i + 1]) % 10;
    }
  }
  return nums[0];
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [5]\n
// @lcpr case=end

 */
