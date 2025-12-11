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
 * v1.1 动态规划（状态机）
 */
const maxProfit = function (prices) {
  // 1. 第一次持有的最大余额 (buy1)
  // 2. 第一次卖出的最大余额 (sell1)
  // 3. 第二次持有的最大余额 (buy2)
  // 4. 第二次卖出的最大余额(sell2)

  // 初始化（第0天）
  let buy1 = -prices[0]; // 买入股票
  let sell1 = 0; // 买了又卖
  let buy2 = -prices[0]; // 买了又卖又买
  let sell2 = 0; // 进行了两次买卖操作

  for (let i = 1; i < prices.length; i++) {
    // 顺序更新 4 个状态
    // 第一次买入的最大余额：要么之前就买了，要么今天刚买
    buy1 = Math.max(buy1, -prices[i]);
    // 第一次卖出的最大余额：要么之前就卖了，要么今天卖
    sell1 = Math.max(sell1, buy1 + prices[i]);

    // 第二次买入的最大余额：要么之前就买了，要么今天刚买
    buy2 = Math.max(buy2, sell1 - prices[i]);

    // 第二次卖出的最大余额：要么之前就卖了，要么今天卖
    sell2 = Math.max(sell2, buy2 + prices[i]);
  }

  return sell2;
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
