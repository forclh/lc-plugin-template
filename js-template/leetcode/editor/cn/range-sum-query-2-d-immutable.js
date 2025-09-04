/*
 * @lc app=leetcode.cn id=304 lang=javascript
 * @lcpr version=30202
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * 二维数组的前缀和技巧
 * @param {number[][]} matrix
 */
let NumMatrix = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  // 前缀和二维数组 preNum[i][j] 记录矩阵 [0, 0, i-1, j-1] 的元素和
  let preNum = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // !如何计算面积
      preNum[i][j] =
        preNum[i - 1][j] +
        preNum[i][j - 1] +
        matrix[i - 1][j - 1] -
        preNum[i - 1][j - 1];
    }
  }
  this.preNum = preNum;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    // !如何计算面积
    this.preNum[row2 + 1][col2 + 1] -
    this.preNum[row1][col2 + 1] -
    this.preNum[row2 + 1][col1] +
    this.preNum[row1][col1]
  );
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

// your test code here

/*
// @lcpr case=start
// ["NumMatrix","sumRegion","sumRegion","sumRegion"]\n[[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]\n
// @lcpr case=end

 */
