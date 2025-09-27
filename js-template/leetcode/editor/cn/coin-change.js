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
 * v1 动态规划（自底向上）
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
let coinChange = function (coins, amount) {
  // dp[i]代表总金额为 i 是需要的最少硬币数
  // 因为最多硬币数量为amount，所以初始化为 amount + 1，相当于初始化为正无穷
  //
  let dp = new Array(amount + 1).fill(amount + 1);
  // base case
  dp[0] = 0;
  // 外层 for 循环在遍历所有状态的所有取值
  for (let i = 1; i <= amount; i++) {
    // 内层 for 循环在求所有选择的最小值
    for (let coin of coins) {
      if (i - coin < 0) {
        continue; // 跳过当前硬币，不能设置为-1，因为还有别的硬币
      }
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[amount] === amount + 1 ? -1 : dp[amount];
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
