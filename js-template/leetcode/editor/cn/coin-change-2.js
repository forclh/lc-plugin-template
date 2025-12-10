/*
 * @lc app=leetcode.cn id=322 lang=javascript
 * @lcpr version=30203
 *
 * [322] 零钱兑换
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（自顶向下）
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
let coinChange = function (coins, amount) {
  // 备忘录初始化为一个不会被取到的特殊值，代表还未被计算
  const memo = new Array(amount + 1).fill(-666);
  return dp(amount);

  // 定义：当金额为amount时返回最少的硬币数量
  function dp(amount) {
    // base case
    if (amount === 0) return 0;
    if (amount < 0) return -1;

    // 备忘录
    if (memo[amount] !== -666) {
      return memo[amount];
    }

    let min = Infinity;
    // 遍历选择
    for (const coin of coins) {
      const sub = dp(amount - coin); // 子问题结果
      if (sub === -1) continue; //  子问题无解则跳过
      min = Math.min(min, sub + 1); // 在子问题中选择最优解，然后加一
    }
    // 把计算结果存入备忘录
    memo[amount] = min === Infinity ? -1 : min;
    return memo[amount];
  }
};

// @lc code=end

// your test code here
coinChange([3], 6);
/*
// @lcpr case=start
// [1, 2, 5]\n11\n
// @lcpr case=end

// @lcpr case=start
// [2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n0\n
// @lcpr case=end

 */
