/*
 * @lc app=leetcode.cn id=980 lang=javascript
 * @lcpr version=30202
 *
 * [980] 不同路径 III
 */

import { use } from "react";
import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 DFS 算法
 * 注意DFS和回溯算法做选择的位置
 * 以及如何判断是回溯还是DFS（节点做选择一般是DFS，树枝一般是回溯）
 * @param {number[][]} grid
 * @return {number}
 */
let uniquePathsIII = function (grid) {
  let result = 0;
  let m = grid.length;
  let n = grid[0].length;
  let totalCount = 0; // 需要访问的方格数
  let visitedCount = 0; // 以及访问的方格数
  let used = Array.from({ length: m }, () => new Array(n).fill(false));

  // 起始方格的位置
  let startI = 0;
  let startJ = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        startI = i;
        startJ = j;
      }
      if (grid[i][j] === 1 || grid[i][j] === 0) {
        totalCount++;
      }
    }
  }
  // 四个反向
  let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  function dfs(grid, i, j) {
    // 剪枝逻辑：
    // 1.索引超出范围
    if (i < 0 || j < 0 || i >= m || j >= n) return;

    // 2.已经走过或者遇到障碍
    if (used[i][j] || grid[i][j] === -1) return;

    // base case
    // 走过所有方格并且最后的方格是终点
    if (visitedCount === totalCount && grid[i][j] === 2) {
      result++;
      return;
    }

    visitedCount++;
    used[i][j] = true;
    // 遍历四个方向
    for (let dir of directions) {
      dfs(grid, i + dir[0], j + dir[1]);
    }
    used[i][j] = false;
    visitedCount--;
  }

  dfs(grid, startI, startJ);

  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,0,0,0],[0,0,0,0],[0,0,0,2]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,1],[2,0]]\n
// @lcpr case=end

 */
