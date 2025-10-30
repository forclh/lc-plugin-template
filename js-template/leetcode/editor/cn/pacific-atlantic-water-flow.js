/*
 * @lc app=leetcode.cn id=417 lang=javascript
 * @lcpr version=30300
 *
 * [417] 太平洋大西洋水流问题
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 BFS
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = function (heights) {
  const m = heights.length;
  const n = heights[0].length;
  // 标记可以流入太平洋的坐标
  const visitedP = Array.from({ length: m }, () => new Array(n).fill(false));
  const queueP = [];
  // 第一行和第一列一定可以流入太平洋
  for (let i = 0; i < n; i++) {
    visitedP[0][i] = true;
    queueP.push([0, i]);
  }
  for (let j = 1; j < m; j++) {
    visitedP[j][0] = true;
    queueP.push([j, 0]);
  }

  // bfs搜索
  bfs(heights, queueP, visitedP);

  // 标记可以流入大西洋的坐标
  const visitedO = Array.from({ length: m }, () => new Array(n).fill(false));
  const queueO = [];
  // 最后一行和最后一列一定可以流入太平洋
  for (let i = 0; i < n; i++) {
    visitedO[m - 1][i] = true;
    queueO.push([m - 1, i]);
  }
  for (let j = 0; j < m - 1; j++) {
    visitedO[j][n - 1] = true;
    queueO.push([j, n - 1]);
  }
  // bfs搜索
  bfs(heights, queueO, visitedO);

  const res = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (visitedO[i][j] && visitedP[i][j]) {
        res.push([i, j]);
      }
    }
  }
  return res;
};

const bfs = (heights, queue, visited) => {
  const m = heights.length;
  const n = heights[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  while (queue.length > 0) {
    const pos = queue.shift();
    for (const dir of directions) {
      const x = pos[0] + dir[0];
      const y = pos[1] + dir[1];

      if (x < 0 || x >= m || y < 0 || y >= n || visited[x][y]) continue;

      if (heights[x][y] < heights[pos[0]][pos[1]]) continue;

      visited[x][y] = true;
      queue.push([x, y]);
    }
  }
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]\n
// @lcpr case=end

// @lcpr case=start
// [[2,1],[1,2]]\n
// @lcpr case=end

 */
