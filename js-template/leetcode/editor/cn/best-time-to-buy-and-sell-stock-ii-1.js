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
 * v1 贪心算法
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
  // 计算每天股票的利润的序列，通过收集所有的正利润
  let result = 0;
  for (let i = 1; i < prices.length; i++) {
    result += Math.max(prices[i] - prices[i - 1], 0);
  }
  return result;
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
