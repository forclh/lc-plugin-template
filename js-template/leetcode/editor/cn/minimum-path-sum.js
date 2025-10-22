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
 * z`
 * @param {number[][]} grid
 * @return {number}
 */
let minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let memo = Array.from({ length: m }, () => new Array(n).fill(-1));
  return dp(grid, m - 1, n - 1, memo);
};
// 返回(0,0)到(i,j)的最小路径和
let dp = function (grid, i, j, memo) {
  if (i === 0 && j === 0) return grid[0][0];

  if (i < 0 || j < 0) return Number.MAX_SAFE_INTEGER;

  if (memo[i][j] !== -1) return memo[i][j];

  memo[i][j] =
    Math.min(dp(grid, i - 1, j, memo), dp(grid, i, j - 1, memo)) + grid[i][j];

  return memo[i][j];
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[1,3,1],[1,5,1],[4,2,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3],[4,5,6]]\n
// @lcpr case=end

 */
