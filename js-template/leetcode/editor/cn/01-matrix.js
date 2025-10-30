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
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  // 初始化全部填充特殊值 -1，代表未计算，
  // 待会可以用来判断坐标是否已经计算过，避免重复遍历
  let res = Array.from({ length: m }, () => new Array(n).fill(-1));

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const q = [];
  // 初始化队列，把那些值为 0 的坐标放到队列里
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        q.push([i, j]);
        res[i][j] = 0;
      }
    }
  }
  // 执行 BFS 算法框架，从值为 0 的坐标开始向四周扩散
  while (q.length > 0) {
    let [row, col] = q.shift();
    // 向四周扩散
    for (let dir of directions) {
      let nextRow = row + dir[0];
      let nextCol = col + dir[1];
      // 确保相邻的这个坐标没有越界且之前未被计算过
      if (
        nextRow >= m ||
        nextRow < 0 ||
        nextCol >= n ||
        nextCol < 0 ||
        res[nextRow][nextCol] !== -1
      ) {
        continue;
      }
      res[nextRow][nextCol] = res[row][col] + 1;
      q.push([nextRow, nextCol]);
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
