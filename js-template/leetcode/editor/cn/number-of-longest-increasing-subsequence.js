/*
 * @lc app=leetcode.cn id=673 lang=javascript
 * @lcpr version=30304
 *
 * [673] 最长递增子序列的个数
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（子序列问题：dp数组）
 * @param {number[]} nums
 * @return {number}
 */
const findNumberOfLIS = function (nums) {
  const n = nums.length;
  if (n === 1) return n;

  // dp[i]表示以nums[i]结尾的最长递增子序列的长度
  const dp = new Array(n).fill(1);
  // count[i]表示以nums[i]结尾的最长递增子序列的个数
  const count = new Array(n).fill(1);

  let maxLen = 1; // 记录最长子序列的长度
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      // 只能从更小的数 nums[j] 转移到 nums[i]（保持递增）
      if (nums[j] < nums[i]) {
        // 如果通过 j 延长能得到更长的长度：更新 dp[i]，并将计数同步为以 j 结尾的方案数
        if (dp[i] < dp[j] + 1) {
          dp[i] = dp[j] + 1;
          count[i] = count[j];
        } else if (dp[i] === dp[j] + 1) {
          // 如果通过 j 延长得到的长度恰好等于当前最佳长度：
          // 说明存在多条不同路径达到同一长度，累加方案数
          count[i] = count[i] + count[j];
        }
        // 同步维护全局最长长度
        maxLen = Math.max(maxLen, dp[i]);
      }
    }
  }
  let result = 0;
  for (let i = 0; i < n; i++) {
    // 统计所有以 i 结尾且长度达到全局最长的方案数
    if (dp[i] === maxLen) result += count[i];
  }
  return result;
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
