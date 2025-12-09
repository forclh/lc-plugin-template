/*
 * @lc app=leetcode.cn id=62 lang=javascript
 * @lcpr version=30304
 *
 * [62] 不同路径
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（自底向上）
 *
 * 时间复杂度：O(m × n)
 * 空间复杂度：O(m × n)
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
  // 1、 明确dp数组和索引的定义
  // dp[i][j]表示从(0, 0)出发到达(i, j)的路径数， 结果：dp[m - 1][n - 1]
  // 2、状态转移方程
  // dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
  // 3、初始化
  // dp[0][j] = 1 dp[i][0] = 1
  // 4、遍历顺序
  // 先行后列或者先列后行都可以

  const dp = Array.from({ length: m }, () => new Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
// @lc code=end

// your test code here
uniquePaths(3, 7);
/*
// @lcpr case=start
// 3\n7\n
// @lcpr case=end

// @lcpr case=start
// 3\n2\n
// @lcpr case=end

 */
