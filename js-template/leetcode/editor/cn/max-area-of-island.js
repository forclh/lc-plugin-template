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
  const m = grid.length;
  const n = grid[0].length;
  let maxArea = 0;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // 遍历网格中的每一个点
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 如果发现岛屿（值为 1），则开始 DFS 计算该岛屿的面积
      if (grid[i][j] === 1) {
        let area = dfs(i, j);
        maxArea = Math.max(maxArea, area);
      }
    }
  }

  function dfs(i, j) {
    // 边界检查：如果超出网格范围，返回面积 0
    if (i < 0 || i >= m || j < 0 || j >= n) {
      return 0;
    }

    // 如果当前位置是水（0），返回面积 0
    if (grid[i][j] === 0) {
      return 0;
    }

    let area = 0;
    // 沉岛策略：将访问过的陆地标记为 0，防止重复访问和无限递归
    grid[i][j] = 0;
    area++; // 当前格子面积 +1
    // 向四个方向递归
    for (let k = 0; k < 4; k++) {
      area += dfs(i + directions[k][0], j + directions[k][1]);
    }
    return area;
  }

  return maxArea;
};
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
