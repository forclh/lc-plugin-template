/*
 * @lc app=leetcode.cn id=309 lang=javascript
 * @lcpr version=30304
 *
 * [309] 买卖股票的最佳时机含冷冻期
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（dp数组）
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  const n = prices.length;
  if (n === 0 || n === 1) return 0;
  // 1表示持有股票，0表示不持有股票，dp[i][1]和dp[i][0]表示到i天为止获得的最大利润
  const dp = Array.from({ length: n }, () => new Array(2).fill(0));
  dp[0][1] = -prices[0];
  dp[1][0] = Math.max(0, prices[1] - prices[0]);
  dp[1][1] = Math.max(-prices[0], -prices[1]);

  for (let i = 2; i < n; i++) {
    // 第i天不持有股票的状态：第i-1天不持有股票或者第i-1天持有股票，第i天卖出
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    // 第i天持有股票的状态：第i-1天持有股票或者第i-2天卖出股票进入冷冻期第i天买入股票
    // 因为dp[i-1][0]包含两种状态，即第i-1天为冷冻期或者刚卖出的状态，避免包含昨天卖出买入的非法状态所以需要强制隔一天
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
  }
  return dp[n - 1][0];
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,0,2]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
