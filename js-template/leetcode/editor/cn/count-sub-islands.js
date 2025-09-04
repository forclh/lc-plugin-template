/*
 * @lc app=leetcode.cn id=1905 lang=javascript
 * @lcpr version=30202
 *
 * [1905] 统计子岛屿
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 DFS 岛屿问题
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
let countSubIslands = function (grid1, grid2) {
  let m = grid2.length;
  let n = grid2[0].length;
  let result = 0;

  // 先把非子岛屿淹掉
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] === 1 && grid1[i][j] === 0) {
        dfs(grid2, i, j);
      }
    }
  }
  // 剩下的都是子岛屿，统计数量
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] === 1) {
        result++;
        dfs(grid2, i, j);
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

function dfs(grid, i, j) {
  let m = grid.length;
  let n = grid[0].length;
  if (i < 0 || j < 0 || i >= m || j >= n) {
    return;
  }

  if (grid[i][j] === 0) {
    return;
  }
  // 淹没岛屿
  grid[i][j] = 0;

  for (let dir of directions) {
    dfs(grid, i + dir[0], j + dir[1]);
  }
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]]\n\n[[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]]\n\n[[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]\n
// @lcpr case=end

 */
