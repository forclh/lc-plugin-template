/*
 * @lc app=leetcode.cn id=1020 lang=javascript
 * @lcpr version=30202
 *
 * [1020] 飞地的数量
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 dfs 岛屿问题
 * 封闭岛屿中陆地的数量
 * @param {number[][]} grid
 * @return {number}
 */
let numEnclaves = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let result = 0;

  for (let i = 0; i < m; i++) {
    dfs(grid, i, 0); // 左边岛屿淹了
    dfs(grid, i, n - 1); // 右边岛屿淹了
  }

  for (let j = 0; j < n; j++) {
    dfs(grid, 0, j); // 上边岛屿淹了
    dfs(grid, m - 1, j); // 下边岛屿淹了
  }
  // 剩下的岛屿都是封闭岛屿
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        result++; // 统计封闭岛屿中陆地的个数
      }
    }
  }
  return result;
};

let directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

// 从 (i, j) 开始，将相邻的陆地都变成海水
function dfs(grid, i, j) {
  let m = grid.length;
  let n = grid[0].length;
  if (i < 0 || j < 0 || i >= m || j >= n) {
    return;
  }

  if (grid[i][j] === 0) {
    return;
  }

  grid[i][j] = 0;

  for (let dir of directions) {
    dfs(grid, i + dir[0], j + dir[1]);
  }
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]\n
// @lcpr case=end

 */
