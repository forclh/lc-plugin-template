/*
 * @lc app=leetcode.cn id=542 lang=javascript
 * @lcpr version=30300
 *
 * [542] 01 矩阵
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 BFS
 *
 * 使用多源广度优先搜索
 * 从所有的 0 开始向外扩散，计算每个 1 到最近的 0 的距离
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function (mat) {
  const m = mat.length;
  const n = mat[0].length;

  // 初始化结果矩阵，全部填充为 -1 表示未访问
  // 这样可以区分哪些位置已经计算过最短距离
  const res = Array.from({ length: m }, () => new Array(n).fill(-1));
  const queue = [];

  // 1. 初始化队列：将所有值为 0 的点作为起点加入队列
  // 这些点的距离为 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        res[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }

  // 定义上下左右四个方向
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // 2. 开始 BFS
  while (queue.length > 0) {
    const [x, y] = queue.shift();

    // 遍历四个相邻方向
    for (const [dx, dy] of directions) {
      const nextX = x + dx;
      const nextY = y + dy;

      // 检查边界条件和是否已访问
      // 如果越界或者 res[nextX][nextY] !== -1 (说明已经求出更短距离了)，则跳过
      if (
        nextX < 0 ||
        nextX >= m ||
        nextY < 0 ||
        nextY >= n ||
        res[nextX][nextY] !== -1
      ) {
        continue;
      }

      // 更新距离：当前点距离 + 1
      res[nextX][nextY] = res[x][y] + 1;
      // 将新访问的点加入队列
      queue.push([nextX, nextY]);
    }
  }

  return res;
};

// @lc code=end

// your test code here
updateMatrix([
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
]);
/*
// @lcpr case=start
// [[0,0,0],[0,1,0],[0,0,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,0,0],[0,1,0],[1,1,1]]\n
// @lcpr case=end

 */
