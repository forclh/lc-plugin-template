/*
 * @lc app=leetcode.cn id=123 lang=javascript
 * @lcpr version=30203
 *
 * [123] 买卖股票的最佳时机 III
 */

// import {ListNode} from "../common/listNode.js";
// import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（自底向上）
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
  let n = prices.length;
  // 1 表示持有股票，0 表示不持有股票
  // dp[i][k][1]或者dp[i][k][0]分别表示，第i天、最大交易次数为k且是否持有股票的最大利润
  let dp = Array.from({ length: n }, () =>
    Array.from({ length: 3 }, () => new Array(2).fill(0))
  );

  for (let i = 0; i < n; i++) {
    for (let k = 1; k <= 2; k++) {
      if (i === 0) {
        dp[i][k][0] = 0;
        dp[i][k][1] = -prices[i];
        continue;
      }
      //
      dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);
      dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]); // 买的时候交易次数要减一
    }
  }

  return dp[n - 1][2][0];
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [3,3,5,0,0,3,1,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [7,6,4,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
