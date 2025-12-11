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
 * v1 动态规划（状态机）
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  const n = prices.length;
  if (n === 0) return 0;
  // 初始化（第0天）
  let hold = -prices[0]; // 当天结束时持有股票的最大利润
  let sold = 0; // 当天刚卖出（进入冷冻期）的最大利润
  let rest = 0; // 当天不持有（包含冷冻期）的最大利润
  for (let i = 1; i < n; i++) {
    const prevHold = hold;
    const prevSold = sold;
    const prevRest = rest;
    // 当天持有股票：
    // 1. 前一天持有股票
    // 2. 前一天不持有股票（包含冷冻期）+当天买入股票
    hold = Math.max(prevHold, prevRest - prices[i]);
    // 当天卖出股票：
    // 前一天持有股票+当天卖出
    sold = prevHold + prices[i];
    // 当天不持有股票（包含冷冻期）
    // 1. 前一天不持有股票（包含冷冻期）
    // 2. 前一天卖出股票
    rest = Math.max(prevRest, prevSold);
  }
  // 最大值为不持有状态
  return Math.max(sold, rest);
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
