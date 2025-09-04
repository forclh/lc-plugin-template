/*
 * @lc app=leetcode.cn id=1254 lang=javascript
 * @lcpr version=30202
 *
 * [1254] 统计封闭岛屿的数目
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 dfs 岛屿问题
 * @param {number[][]} grid
 * @return {number}
 */
let closedIsland = function (grid) {
  let result = 0;
  let m = grid.length;
  let n = grid[0].length;
  for (let j = 0; j < n; j++) {
    dfs(grid, 0, j); // 把靠上的岛屿淹掉
    dfs(grid, m - 1, j); // 把靠下的岛屿淹掉
  }

  for (let i = 0; i < m; i++) {
    dfs(grid, i, 0); // 把靠左的岛屿淹掉
    dfs(grid, i, n - 1); // 把靠右的岛屿淹掉
  }

  // 剩下的岛屿都是封闭岛屿
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        result++;
        // 把周围陆地淹了
        dfs(grid, i, j);
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
// 从 (i, j) 开始，将与之相邻的陆地都变成海水
function dfs(grid, i, j) {
  let m = grid.length;
  let n = grid[0].length;

  if (i < 0 || j < 0 || i >= m || j >= n) {
    return;
  }
  // 已经是海水了
  if (grid[i][j] === 1) {
    return;
  }
  // 将 (i, j) 变成海水
  grid[i][j] = 1;
  // 淹没上下左右的陆地
  for (const dir of directions) {
    nextI = i + dir[0];
    nextJ = j + dir[1];
    dfs(grid, nextI, nextJ);
  }
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1,1,1,1,1,1],\n[1,0,0,0,0,0,1],\n[1,0,1,1,1,0,1],\n[1,0,1,0,1,0,1],\n[1,0,1,1,1,0,1],\n[1,0,0,0,0,0,1],\n[1,1,1,1,1,1,1]]\n
// @lcpr case=end

 */
