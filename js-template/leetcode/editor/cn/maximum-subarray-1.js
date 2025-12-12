/*
 * @lc app=leetcode.cn id=53 lang=javascript
 * @lcpr version=30203
 *
 * [53] 最大子数组和
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划(子序列问题:dp数组)
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function (nums) {
  let n = nums.length;
  if (n === 1) return nums[0];

  // dp[i]表示以nums[i]结尾的连续子数组的最大和
  const dp = new Array(n).fill(-Infinity);
  dp[0] = nums[0];

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }

  return Math.max(...dp);
};
// @lc code=end

// your test code here
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
/*
// @lcpr case=start
// [-2,1,-3,4,-1,2,1,-5,4]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [5,4,-1,7,8]\n
// @lcpr case=end

 */
