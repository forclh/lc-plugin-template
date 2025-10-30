/*
 * @lc app=leetcode.cn id=518 lang=javascript
 * @lcpr version=30203
 *
 * [518] 零钱兑换 II
 */

// import {ListNode} from "../common/listNode.js";
// import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划 - 完全背包问题（自底向上）
 *
 * 问题分析：
 * 这是一个典型的完全背包问题，目标是计算凑成指定金额的硬币组合数。
 * 每种硬币可以使用无限次。
 *
 * 算法思路：
 * 1. 使用二维DP数组，dp[i][j]表示使用前i种硬币凑成金额j的组合数
 * 2. 状态转移方程：
 *    - 如果当前硬币面额 > 目标金额：dp[i][j] = dp[i-1][j]（不能使用当前硬币）
 *    - 如果当前硬币面额 <= 目标金额：dp[i][j] = dp[i-1][j] + dp[i][j-coins[i-1]]
 *      （不使用当前硬币的组合数 + 使用当前硬币的组合数）
 * 3. 初始化边界条件：dp[i][0] = 1（凑成金额0的组合数为1，即不选任何硬币）
 *
 * 时间复杂度：O(m * amount) - 其中m是硬币种类数
 * 空间复杂度：O(m * amount) - DP数组的空间
 *
 * @param {number} amount 目标金额
 * @param {number[]} coins 不同面额的硬币数组
 * @return {number} 返回可以凑成总金额的硬币组合数
 */
let change = function (amount, coins) {
  let m = coins.length;
  // dp[i][j]表示使用coins中的前 i 个硬币(每种硬币无限个)，组合成总金额为 j 的组合数
  const dp = Array.from({ length: m + 1 }, () => new Array(amount + 1).fill(0));
  // base case dp[0][j] = 0, dp[i][0] = 1
  for (let i = 0; i <= m; i++) {
    dp[i][0] = 1;
  }

  // 遍历每种硬币
  for (let i = 1; i <= m; i++) {
    // 遍历每个金额
    for (let j = 1; j <= amount; j++) {
      // 如果当前硬币面额大于目标金额，则不能使用该硬币
      if (coins[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        // 状态转移方程：
        // dp[i-1][j]：不使用第i个硬币的组合数
        // dp[i][j-coins[i-1]]：使用第i个硬币的组合数（因为硬币可重复使用，所以是dp[i]而不是dp[i-1]）
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
      }
    }
  }

  return dp[m][amount];
};
// @lc code=end

// your test code here
change(5, [1, 2, 5]);

// @lcpr case=start
// 5\n[1, 2, 5]\n
// @lcpr case=end

// @lcpr case=start
// 3\n[2]\n
// @lcpr case=end
