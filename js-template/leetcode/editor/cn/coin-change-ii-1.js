/*
 * @lc app=leetcode.cn id=518 lang=javascript
 * @lcpr version=30203
 *
 * [518] 零钱兑换 II
 */

// import {ListNode} from "../common/listNode.js";
// import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * v2 动态规划(完全背包问题：自底向上+空间压缩)
 * @param {number} amount 目标金额
 * @param {number[]} coins 不同面额的硬币数组
 * @return {number} 返回可以凑成总金额的硬币组合数
 */
let change = function (amount, coins) {
  let m = coins.length;
  // dp[j]表示组合成总金额为 j 的组合数
  const dp = new Array(amount + 1).fill(0);
  // 初始化
  dp[0] = 1;

  // 遍历每种硬币
  for (let i = 0; i < m; i++) {
    // 遍历每个金额
    for (let j = 1; j <= amount; j++) {
      if (coins[i] > j) continue;
      dp[j] = dp[j] + dp[j - coins[i]];
    }
  }

  return dp[amount];
};
// @lc code=end

// your test code here
change(5, [1, 2, 5]);

// @lcpr case=start
// 5\n[1, 2, 5]\n
// @lcpr case=end

// @lcpr case=start
// 3\n[2]\n
// @lcpr case=end
