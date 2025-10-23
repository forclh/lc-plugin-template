/*
 * @lc app=leetcode.cn id=1091 lang=javascript
 * @lcpr version=30300
 *
 * [1091] 二进制矩阵中的最短路径
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 BFS
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] === 1) return -1;
  const n = grid.length;
  const visited = new Set();
  const q = [[0, 0]];
  visited.add("00");

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];
  let step = 0;

  while (q.length > 0) {
    const sz = q.length;
    for (let i = 0; i < sz; i++) {
      const [row, col] = q.shift();

      if (row === n - 1 && col === n - 1) {
        return step + 1;
      }

      for (let dir of directions) {
        const nextRow = row + dir[0];
        const nextCol = col + dir[1];

        if (
          nextRow >= n ||
          nextRow < 0 ||
          nextCol >= n ||
          nextCol < 0 ||
          visited.has(`${nextRow}${nextCol}`) ||
          grid[nextRow][nextCol] === 1
        ) {
          continue;
        }
        visited.add(`${nextRow}${nextCol}`);
        q.push([nextRow, nextCol]);
      }
    }
    step++;
  }
  return -1;
};
// @lc code=end

// your test code here
shortestPathBinaryMatrix([
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
]);
/*
// @lcpr case=start
// [[0,1],[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,0,0],[1,1,0],[1,1,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,0,0],[1,1,0],[1,1,0]]\n
// @lcpr case=end

 */
