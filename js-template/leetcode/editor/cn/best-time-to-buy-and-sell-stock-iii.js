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
 * v1 动态规划
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
  let n = prices.length;
  // 定义状态：
  // dp[i][k][0]: 第 i 天，至多进行了 k 次交易，且当前【不持有】股票（卖出状态）
  // dp[i][k][1]: 第 i 天，至多进行了 k 次交易，且当前【持有】股票（买入状态）
  let dp = Array.from({ length: n }, () =>
    Array.from({ length: 3 }, () => new Array(2).fill(0))
  );

  // 初始化
  for (let k = 1; k <= 2; k++) {
    dp[0][k][0] = 0;
    dp[0][k][1] = -prices[0]; // 第一天买入，成本为 prices[0]
  }

  for (let i = 1; i < n; i++) {
    for (let k = 1; k <= 2; k++) {
      // 状态转移方程解释：
      // 1. 今天【不持有】股票 (dp[i][k][0])
      //    可能性 A: 昨天就不持有 (dp[i-1][k][0]) -> 保持现状
      //    可能性 B: 昨天持有，今天卖出了 (dp[i-1][k][1] + prices[i]) -> 完成了一次交易
      dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);

      // 2. 今天【持有】股票 (dp[i][k][1])
      //    可能性 A: 昨天就持有 (dp[i-1][k][1]) -> 保持现状
      //    可能性 B: 昨天不持有，今天买入了 (dp[i-1][k-1][0] - prices[i]) -> 开始第 k 次交易
      //    注意：买入是交易的开始，所以我们要从 k-1 (上一轮交易完成) 的状态转移过来
      dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]);
    }
  }

  // 返回最后一天，至多交易 2 次，且不持有股票的最大利润
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
