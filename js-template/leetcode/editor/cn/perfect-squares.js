/*
 * @lc app=leetcode.cn id=279 lang=javascript
 * @lcpr version=30304
 *
 * [279] 完全平方数
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 动态规划(完全背包问题：自底向上+空间压缩)
 * @param {number} n
 * @return {number}
 */
const numSquares = function (n) {
  const nums = [];
  for (let i = 1; i * i <= n; i++) {
    nums.push(i * i);
  }

  const len = nums.length;
  // 定义：dp[i]表示给目标金额i和零钱nums，凑出金额的最少零钱数
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  // 遍历金额
  for (let i = 1; i <= n; i++) {
    // 遍历零钱
    // 完全背包优化为一维时正序遍历
    for (let j = 0; j < len; j++) {
      if (nums[j] > i) {
        continue;
      }
      // 选择需要零钱最少的那个结果
      dp[i] = Math.min(dp[i], dp[i - nums[j]] + 1);
    }
  }
  return dp[n];
};

// @lc code=end

// your test code here

/*
// @lcpr case=start
// 12\n
// @lcpr case=end

// @lcpr case=start
// 13\n
// @lcpr case=end

 */
