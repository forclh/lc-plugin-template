/*
 * @lc app=leetcode.cn id=122 lang=javascript
 * @lcpr version=30203
 *
 * [122] 买卖股票的最佳时机 II
 */

// import { ListNode } from "../common/listNode.js";
// import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（dp数组）
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
  let n = prices.length;
  // 1 表示持有股票，0 表示不持有股票
  // dp[i][1]或者dp[i][0],分别表示在第i天时对应的最大利润
  let dp = Array.from({ length: n }, () => new Array(2).fill(0));
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  for (let i = 1; i < n; i++) {
    // 第i天不持有股票： i - 1天不持有股票或者第i - 1 天持有股票，但是第i天卖了
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    // 第i天持有股票：i - 1天持有股票或者第i - 1天不持有股票，但是第i天买了
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }

  return dp[n - 1][0];
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [7,1,5,3,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [7,6,4,3,1]\n
// @lcpr case=end

 */
