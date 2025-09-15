/*
 * @lc app=leetcode.cn id=566 lang=javascript
 * @lcpr version=30203
 *
 * [566] 重塑矩阵
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 多维坐标之间的映射转换
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
let matrixReshape = function (mat, r, c) {
  let m = mat.length;
  let n = mat[0].length;
  if (m * n !== r * c) return mat;

  let newMat = Array.from({ length: r }, () => new Array(c));
  for (let i = 0; i < m * n; i++) {
    set(newMat, i, get(mat, i));
  }
  return newMat;
};
// 通过一维坐标范围二维数组的元素
function get(matrix, index) {
  let m = matrix.length;
  let n = matrix[0].length;
  // 计算二维中的横纵坐标
  let i = Math.floor(index / n);
  let j = index % n;
  return matrix[i][j];
}
// 通过一维坐标设置二维数组的元素
function set(matrix, index, value) {
  let m = matrix.length;
  let n = matrix[0].length;
  // 计算二维中的横纵坐标
  let i = Math.floor(index / n);
  let j = index % n;
  matrix[i][j] = value;
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[1,2],[3,4]]\n1\n4\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[3,4]]\n2\n4\n
// @lcpr case=end

 */
