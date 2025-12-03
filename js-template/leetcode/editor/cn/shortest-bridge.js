/*
 * @lc app=leetcode.cn id=934 lang=javascript
 * @lcpr version=30304
 *
 * [934] 最短的桥
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 BFS(DFS标记岛屿，BFS记录最短路径)
 * @param {number[][]} grid
 * @return {number}
 */
const shortestBridge = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  // 标记已访问节点，避免重复处理
  const visited = Array.from({ length: m }, () => new Array(n).fill(false));
  const queue = [];

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // 1. 寻找第一座岛屿
  // 只要找到第一个为1的点，就通过DFS将整个岛屿找出并加入BFS队列
  let findFirstLand = false;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j); // 启动DFS
        findFirstLand = true;
        break;
      }
    }
    if (findFirstLand) break;
  }

  // DFS: 标记第一座岛屿的所有节点，并将它们全部加入 BFS 队列作为起点
  function dfs(x, y) {
    // 边界检查 + 访问检查 + 是否为陆地检查
    if (
      x < 0 ||
      x >= m ||
      y < 0 ||
      y >= n ||
      visited[x][y] ||
      grid[x][y] === 0
    ) {
      return;
    }
    visited[x][y] = true;
    // 将第一座岛屿的节点入队，距离初始为 0
    queue.push([x, y, 0]);
    for (const dir of directions) {
      dfs(x + dir[0], y + dir[1]);
    }
  }

  // 2. 多源 BFS 向外层层扩展，寻找第二座岛屿
  while (queue.length > 0) {
    let [curX, curY, count] = queue.shift();
    for (const dir of directions) {
      const nextX = curX + dir[0];
      const nextY = curY + dir[1];

      // 越界或已访问过则跳过
      if (
        nextX < 0 ||
        nextX >= m ||
        nextY < 0 ||
        nextY >= n ||
        visited[nextX][nextY]
      )
        continue;

      visited[nextX][nextY] = true;

      // 如果遇到了未访问过的陆地(1)，说明触碰到了第二座岛屿
      // 当前的 count 即为最短桥的长度（跨越的水域数）
      if (grid[nextX][nextY] === 1) {
        return count;
      }

      // 遇到水域(0)，继续扩展，距离+1
      queue.push([nextX, nextY, count + 1]);
    }
  }
  return 0;
};
// @lc code=end

// your test code here
shortestBridge([
  [0, 1],
  [1, 0],
]);
/*
// @lcpr case=start
// [[0,1],[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,1,0],[0,0,0],[0,0,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]\n
// @lcpr case=end

 */
