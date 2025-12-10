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
 * v1 动态规划(完全背包：自底向上)
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
let coinChange = function (coins, amount) {
  // dp[i][j]使用前i个硬币，凑成总金额为 j 时,需要的最少硬币数
  const n = coins.length;
  let dp = Array.from({ length: n + 1 }, () =>
    new Array(amount + 1).fill(Infinity)
  );
  // base case
  for (let i = 0; i <= n; i++) {
    dp[i][0] = 0;
  }
  // 遍历所有的硬币
  for (let i = 1; i <= n; i++) {
    const coin = coins[i - 1];
    // 遍历总金额
    for (let j = 1; j <= amount; j++) {
      if (j < coin) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - coin] + 1);
      }
    }
  }

  return dp[n][amount] === Infinity ? -1 : dp[n][amount];
};

// @lc code=end

// your test code here
coinChange([1, 2, 5], 11);
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
