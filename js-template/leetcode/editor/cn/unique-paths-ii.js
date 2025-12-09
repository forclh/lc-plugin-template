/*
 * @lc app=leetcode.cn id=63 lang=javascript
 * @lcpr version=30304
 *
 * [63] 不同路径 II
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（自底向上）
 *
 * 时间复杂度：O(m * n)
 * 空间复杂度：O(m * n)
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function (obstacleGrid) {
  // 1、明确dp数组和索引的定义
  // dp[i][j]表示从(0, 0)到(i , j)的不同路径数量，结果 dp[m - 1][n - 1]
  // 2、状态转移方程
  // 如果 obstacleGrid[i][j] !== 1
  // dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
  // 3、初始化
  // 4、遍历顺序

  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = Array.from({ length: m }, () => new Array(n).fill(0));
  // 初始化
  // 初始化第一列
  for (let i = 0; i < m; i++) {
    // 如果出现障碍，则后续位置无法到达（起点也有可能）
    if (obstacleGrid[i][0] === 1) {
      break;
    }
    dp[i][0] = 1;
  }
  // 初始化第一行
  for (let j = 0; j < n; j++) {
    // 如果出现障碍，则后续位置无法到达（起点也有可能）
    if (obstacleGrid[0][j] === 1) {
      break;
    }
    dp[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 如果当前节点是障碍则路径为默认值0
      if (obstacleGrid[i][j] === 1) continue;
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};
// @lc code=end

// your test code here
uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]);
uniquePathsWithObstacles([
  [0, 0],
  [0, 1],
]);
/*
// @lcpr case=start
// [[0,0,0],[0,1,0],[0,0,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,1],[0,0]]\n
// @lcpr case=end

 */
