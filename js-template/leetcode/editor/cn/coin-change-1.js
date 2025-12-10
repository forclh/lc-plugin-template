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
 * v2 动态规划(完全背包：自底向上+空间压缩)
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
let coinChange = function (coins, amount) {
  // dp[i]代表总金额为 i 时需要的最少硬币数
  // 因为最多硬币数量为amount，所以初始化为 amount + 1，相当于初始化为正无穷
  let dp = new Array(amount + 1).fill(amount + 1);
  // base case
  dp[0] = 0;
  // 遍历所有的硬币
  for (let coin of coins) {
    // 遍历总金额
    for (let i = 1; i <= amount; i++) {
      if (i - coin < 0) continue;
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
