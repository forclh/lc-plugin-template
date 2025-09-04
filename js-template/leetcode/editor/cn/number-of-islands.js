/*
 * @lc app=leetcode.cn id=200 lang=javascript
 * @lcpr version=30202
 *
 * [200] 岛屿数量
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 DFS 岛屿问题
 * 遍历二维数组
 * @param {character[][]} grid
 * @return {number}
 */
let numIslands = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let result = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        // 找到岛屿
        result += 1;
        dfs(grid, i, j);
      }
    }
  }

  return result;
};
// 从 (i, j) 开始，将与之相邻的陆地都变成海水
function dfs(grid, i, j) {
  let m = grid.length;
  let n = grid[0].length;
  // 超出索引边界
  if (i < 0 || j < 0 || i >= m || j >= n) {
    return;
  }

  // 可以省去维护 visited 数组
  if (grid[i][j] === "0") {
    // 已经是海水了
    return;
  }
  // 将grid[i][j]变成海水
  grid[i][j] = "0";
  dfs(grid, i - 1, j); // 上
  dfs(grid, i + 1, j); // 下
  dfs(grid, i, j - 1); // 左
  dfs(grid, i, j + 1); // 右
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [\n['1','1','1','1','0'],\n['1','1','0','1','0'],\n['1','1','0','0','0'],\n['0','0','0','0','0']\n]\n
// @lcpr case=end

// @lcpr case=start
// [\n['1','1','0','0','0'],\n['1','1','0','0','0'],\n['0','0','1','0','0'],\n['0','0','0','1','1']\n]\n
// @lcpr case=end

 */
