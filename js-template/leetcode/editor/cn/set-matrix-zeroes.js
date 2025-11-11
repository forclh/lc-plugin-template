/*
 * @lc app=leetcode.cn id=73 lang=javascript
 * @lcpr version=30300
 *
 * [73] 矩阵置零
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 使用两个标记变量
 *
 * 空间复杂度：O(1)
 * 时间复杂度：O(MN)
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let firstRowHasZero = false; // 记录第一行是否有0
  let firstColHasZero = false; // 记录第一列是否有0

  for (let i = 0; i < n; i++) {
    if (matrix[0][i] === 0) {
      firstRowHasZero = true;
    }
  }

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        // 使用第一列来记录0位置的行索引
        matrix[i][0] = 0;
        // 使用第一行来记录0位置的列索引
        matrix[0][j] = 0;
      }
    }
  }

  // 遍历矩阵的每一个位置，并原地置零
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (firstRowHasZero) {
    for (let i = 0; i < n; i++) {
      matrix[0][i] = 0;
    }
  }
  if (firstColHasZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[1,1,1],[1,0,1],[1,1,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,1,2,0],[3,4,5,2],[1,3,1,5]]\n
// @lcpr case=end

 */
