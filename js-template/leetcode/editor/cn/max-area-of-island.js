/*
 * @lc app=leetcode.cn id=695 lang=javascript
 * @lcpr version=30202
 *
 * [695] 岛屿的最大面积
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 DFS 岛屿问题
 * @param {number[][]} grid
 * @return {number}
 */
let maxAreaOfIsland = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let maxArea = 0; // 记录岛屿的最大面积

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        // 淹没岛屿，并更新最大岛屿面积
        let area = dfs(grid, i, j);
        maxArea = Math.max(maxArea, area);
      }
    }
  }
  return maxArea;
};

let directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
// 淹没与 (i, j) 相邻的陆地，并返回淹没的陆地面积
function dfs(grid, i, j) {
  let m = grid.length;
  let n = grid[0].length;
  let area = 0;
  // 超出索引边界
  if (i < 0 || j < 0 || i >= m || j >= n) {
    return 0;
  }
  // 已经是海水了
  if (grid[i][j] === 0) {
    return 0;
  }

  area++;
  grid[i][j] = 0; // 将 (i, j) 变成海水

  for (let dir of directions) {
    area += dfs(grid, i + dir[0], j + dir[1]);
  }

  return area;
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// \n[[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,0,0,0,0,0,0,0]]\n
// @lcpr case=end

 */
