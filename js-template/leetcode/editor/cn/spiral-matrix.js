/*
 * @lc app=leetcode.cn id=54 lang=javascript
 * @lcpr version=30203
 *
 * [54] 螺旋矩阵
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 四个变量圈定未遍历元素的边界
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let upBound = 0;
  let downBound = m - 1;
  let leftBound = 0;
  let rightBound = n - 1;
  let result = [];
  // result.length === m * n 表示遍历完了整个数组
  while (result.length < m * n) {
    if (upBound <= downBound) {
      // 在顶部从左向右遍历
      for (let i = leftBound; i <= rightBound; i++) {
        result.push(matrix[upBound][i]);
      }
      // 上边界下移
      upBound++;
    }
    // 在右边从上往下遍历
    if (leftBound <= rightBound) {
      for (let i = upBound; i <= downBound; i++) {
        result.push(matrix[i][rightBound]);
      }
      // 右边界左移
      rightBound--;
    }
    // 在底部从右往左遍历
    if (upBound <= downBound) {
      for (let i = rightBound; i >= leftBound; i--) {
        result.push(matrix[downBound][i]);
      }
      downBound--;
    }
    // 在左边从下往上遍历
    if (leftBound <= rightBound) {
      for (let i = downBound; i >= upBound; i--) {
        result.push(matrix[i][leftBound]);
      }
      // 左边界右移
      leftBound++;
    }
  }

  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\n
// @lcpr case=end

 */
