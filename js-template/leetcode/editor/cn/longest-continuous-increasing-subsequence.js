/*
 * @lc app=leetcode.cn id=674 lang=javascript
 * @lcpr version=30304
 *
 * [674] 最长连续递增序列
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = function (nums) {
  const n = nums.length;
  if (n === 0 || n === 1) return n;
  // dp[i]表示以nums[i]结尾的连续递增子序列的最大长度
  const dp = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    if (nums[i - 1] < nums[i]) {
      dp[i] = Math.max(dp[i], dp[i - 1] + 1);
    }
  }
  return Math.max(...dp);
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,3,5,4,7]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,2,2,2]\n
// @lcpr case=end

 */
