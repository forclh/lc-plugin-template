/*
 * @lc app=leetcode.cn id=343 lang=javascript
 * @lcpr version=30304
 *
 * [343] 整数拆分
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（自底向上)
 *
 * 时间复杂度: O(n^2)
 * 空间复杂度: O(n)
 * @param {number} n
 * @return {number}
 */
const integerBreak = function (n) {
  // 1、明确dp数组和索引的定义
  // dp[i]将数字 i 将其拆分为 k 个正整数的和得到的最大乘积。结果：dp[n]
  // 2、状态转移方程
  // dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]), j < i
  // 3、初始化
  // 4、遍历顺序
  const dp = new Array(n + 1).fill(0);
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j <= Math.floor(i / 2); j++) {
      // 拆分成m个近似相同的子数相乘才是最大的， m >= 2，因此 j 只需要遍历到 i / 2
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
    }
  }
  return dp[n];
};
// @lc code=end

// your test code here
integerBreak(10);
/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 10\n
// @lcpr case=end

 */
