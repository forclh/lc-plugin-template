/*
 * @lc app=leetcode.cn id=59 lang=javascript
 * @lcpr version=30203
 *
 * [59] 螺旋矩阵 II
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 使用四个变量圈定元素的边界
 * @param {number} n
 * @return {number[][]}
 */
let generateMatrix = function (n) {
  let matrix = Array.from({ length: n }, () => new Array(n));
  let upperBound = 0;
  let lowerBound = n - 1;
  let leftBound = 0;
  let rightBound = n - 1;
  let index = 1;
  while (index <= n * n) {
    // 上边界从左到右遍历
    if (upperBound <= lowerBound) {
      for (let i = leftBound; i <= rightBound; i++) {
        matrix[upperBound][i] = index++;
      }
      upperBound++;
    }
    // 右边界从上到下遍历
    if (leftBound <= rightBound) {
      for (let i = upperBound; i <= lowerBound; i++) {
        matrix[i][rightBound] = index++;
      }
      rightBound--;
    }

    // 下边界从右到左遍历
    if (upperBound <= lowerBound) {
      for (let i = rightBound; i >= leftBound; i--) {
        matrix[lowerBound][i] = index++;
      }
      lowerBound--;
    }
    // 左边界从下到上遍历
    if (leftBound <= rightBound) {
      for (let i = lowerBound; i >= upperBound; i--) {
        matrix[i][leftBound] = index++;
      }
      leftBound++;
    }
  }
  return matrix;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */
