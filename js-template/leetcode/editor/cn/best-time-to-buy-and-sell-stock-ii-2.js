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
 * v1 动态规划（状态机）
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
  let n = prices.length;
  if (n === 0 || n === 1) return 0;
  // 初始化（第0天）
  let hold = -prices[0]; // 当天持有股票的最大利润
  let rest = 0; // 当天不持有股票的最大利润

  for (let i = 1; i < n; i++) {
    let prevHold = hold;
    let prevRest = rest;
    // 当天持有股票的状态：
    // 1. 前一天持有股票
    // 2. 前一天不持有股票+当天买入股票
    hold = Math.max(prevHold, prevRest - prices[i]);
    // 当天不持有股票的状态：
    // 1. 前一天不持有股票
    // 2. 前一天持有股票+当天卖出股票
    rest = Math.max(prevRest, prevHold + prices[i]);
  }
  return rest;
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
