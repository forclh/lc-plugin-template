/*
 * @lc app=leetcode.cn id=64 lang=javascript
 * @lcpr version=30203
 *
 * [64] 最小路径和
 */

// import {ListNode} from "../common/listNode.js";
// import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（dp数组）
 * @param {number[][]} grid
 * @return {number}
 */
let minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  // dp[i][j]表示从起点出发到达grid[i][j]的最小数字总和
  const dp = Array.from({ length: m }, () => new Array(n).fill(Infinity));
  // 初始化
  let sum = 0;
  for (let i = 0; i < m; i++) {
    sum += grid[i][0];
    dp[i][0] = sum;
  }
  sum = 0;
  for (let i = 0; i < n; i++) {
    sum += grid[0][i];
    dp[0][i] = sum;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 当前位置的状态由左边和上边位置构成
      dp[i][j] =
        Math.min(
          dp[i - 1][j], // 左边
          dp[i][j - 1] // 上边
        ) + grid[i][j];
    }
  }

  return dp[m - 1][n - 1];
};

// @lc code=end

// your test code here
// minPathSum([
//   [1, 3, 1],
//   [1, 5, 1],
//   [4, 2, 1],
// ]);

minPathSum([
  [1, 2, 3],
  [4, 5, 6],
]);
/*
// @lcpr case=start
// [[1,3,1],[1,5,1],[4,2,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3],[4,5,6]]\n
// @lcpr case=end

 */
