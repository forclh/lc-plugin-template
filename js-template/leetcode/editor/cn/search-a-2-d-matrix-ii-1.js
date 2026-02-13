/*
 * @lc app=leetcode.cn id=240 lang=javascript
 * @lcpr version=30307
 *
 * [240] 搜索二维矩阵 II
 */

import { ListNode } from '../common/listNode.js';
import { TreeNode } from '../common/treeNode.js';

// @lc code=start
/**
 * S2 根据矩阵特性从左上角开始便利，规定只能向左或者向下
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  // 初始化在左上角
  let x = 0;
  let y = n - 1;
  while (x < m && y >= 0) {
    const value = matrix[x][y];
    if (value === target) {
      return true;
    } else if (value < target) {
      // 向下走
      x++;
    } else {
      // 向左走
      y--;
    }
  }
  return false;
};
// @lc code=end

// your test code here
console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5,
  ),
);
/*
// @lcpr case=start
// [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n5\n
// @lcpr case=end

// @lcpr case=start
// [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n20\n
// @lcpr case=end

 */
