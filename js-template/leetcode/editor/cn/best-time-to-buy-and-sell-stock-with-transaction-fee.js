/*
 * @lc app=leetcode.cn id=714 lang=javascript
 * @lcpr version=30304
 *
 * [714] 买卖股票的最佳时机含手续费
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（状态机）
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = function (prices, fee) {
  const n = prices.length;
  if (n === 0 || n === 1) return 0;
  // 初始化（第0天）
  let hold = -prices[0]; // 当天持有的最大利润
  let rest = 0; // 当天不持有的最大利润

  for (let i = 1; i < n; i++) {
    let prevHold = hold;
    let prevRest = rest;
    // 当天持有的状态：
    // 1. 前一天持有
    // 2. 前一天不持有+当天买入
    hold = Math.max(prevHold, prevRest - prices[i]);
    // 当天不持有的状态：
    // 1. 前一天不持有
    // 2. 前一天持有+当天卖出（卖出需要交手续费）
    rest = Math.max(prevRest, prevHold + prices[i] - fee);
  }

  return rest;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,3,2,8,4,9]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,3,7,5,10,3]\n3\n
// @lcpr case=end

 */
