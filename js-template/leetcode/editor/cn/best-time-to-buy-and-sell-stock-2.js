/*
 * @lc app=leetcode.cn id=121 lang=javascript
 * @lcpr version=30203
 *
 * [121] 买卖股票的最佳时机
 */

// import { ListNode } from "../common/listNode.js";
// import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（股票问题：状态机）
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
  let n = prices.length;
  // 初始化第0天
  let buy1 = -prices[0]; // 目前已经完成一次买入后的最大利润
  let sell1 = 0; // 目前已经完成一次卖出后的最大利润

  // 遍历每一天
  for (let i = 1; i < n; i++) {
    // 更新状态
    buy1 = Math.max(buy1, -prices[i]); // 之前已经买入了或者今天买入
    sell1 = Math.max(sell1, buy1 + prices[i]); // 之前已经卖出了或者今天卖出
  }

  return sell1;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [7,1,5,3,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [7,6,4,3,1]\n
// @lcpr case=end

 */
