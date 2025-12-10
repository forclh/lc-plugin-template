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
 * v1 动态规划（完全背包问题：自底向上）
 * @param {number} n
 * @return {number}
 */
const numSquares = function (n) {
  const nums = [];
  // 找到所有的完全平凡数
  for (let i = 1; i * i <= n; i++) {
    nums.push(i * i);
  }

  const len = nums.length;
  // 定义：dp[i][j] 表示从前 i 个完全平方数中选，凑出金额 j 的最少数量
  const dp = Array.from({ length: len + 1 }, () =>
    new Array(n + 1).fill(Infinity)
  );

  // base case: 凑出金额 0 需要 0 个数
  for (let i = 0; i <= len; i++) {
    dp[i][0] = 0;
  }

  // 遍历物品
  for (let i = 1; i <= len; i++) {
    const num = nums[i - 1]; // 当前物品的重量/面值
    // 遍历背包容量
    for (let j = 1; j <= n; j++) {
      if (j < num) {
        // 容量不足，只能不选当前物品，继承前 i-1 个物品的结果
        dp[i][j] = dp[i - 1][j];
      } else {
        // 容量足够，可以选择：
        // 1. 不选当前物品：dp[i-1][j]
        // 2. 选当前物品：dp[i][j - num] + 1
        //    注意：因为是完全背包（物品可重复选），所以选了当前物品后，状态转移到 dp[i] 而不是 dp[i-1]
        //    意思是：在当前还可以继续选第 i 个物品的状态下，腾出 num 的空间
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - num] + 1);
      }
    }
  }

  return dp[len][n];
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
