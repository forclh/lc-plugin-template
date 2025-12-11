/*
 * @lc app=leetcode.cn id=188 lang=javascript
 * @lcpr version=30304
 *
 * [188] 买卖股票的最佳时机 IV
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（股票问题：状态机）
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (k, prices) {
  const n = prices.length;
  // 边界条件处理
  if (k === 0 || n === 0) return 0;

  // 初始化（假设第 0 天就完成了所有操作）
  // buys[j] 表示“截止到当前，已经完成了第 j+1 次买入操作”后的最大余额
  // 此时处于【持仓】状态
  const buys = new Array(k).fill(-prices[0]);

  // sells[j] 表示“截止到当前，已经完成了第 j+1 次卖出操作”后的最大余额（利润）
  // 此时处于【空仓】状态
  const sells = new Array(k).fill(0);

  // 从第 1 天开始遍历
  for (let i = 1; i < n; i++) {
    // 每一天都可以尝试更新第 1 次到第 k 次交易的状态
    for (let j = 0; j < k; j++) {
      // 1. 更新 buys[j] (目标：达到“完成第 j+1 次买入”的状态)
      if (j === 0) {
        // 第一次买入：
        // 选项A: 维持之前的状态（之前早就买好了，今天不动）
        // 选项B: 今天刚买入（基于 0 元本金）
        buys[j] = Math.max(buys[j], -prices[i]);
      } else {
        // 第 j+1 次买入：
        // 选项A: 维持之前的状态（之前早就买好了）
        // 选项B: 今天刚买入（用上一轮“完成第 j 次卖出”后的钱 sells[j-1] 来买）
        buys[j] = Math.max(buys[j], sells[j - 1] - prices[i]);
      }

      // 2. 更新 sells[j] (目标：达到“完成第 j+1 次卖出”的状态)
      // 选项A: 维持之前的状态（之前早就卖完了，今天不动，利润不变）
      // 选项B: 今天刚卖出（把当前“完成第 j+1 次买入”后的股票 buys[j] 卖掉）
      sells[j] = Math.max(sells[j], buys[j] + prices[i]);
    }
  }

  // 返回“截止到最后一天，至多完成了 k 次卖出操作”后的最大利润
  return sells[k - 1];
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 2\n[2,4,1]\n
// @lcpr case=end

// @lcpr case=start
// 2\n[3,2,6,5,0,3]\n
// @lcpr case=end

 */
