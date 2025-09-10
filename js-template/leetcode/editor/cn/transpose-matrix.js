/*
 * @lc app=leetcode.cn id=867 lang=javascript
 * @lcpr version=30203
 *
 * [867] 转置矩阵
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 直观解法
 * @param {number[][]} matrix
 * @return {number[][]}
 */
let transpose = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  // 转置矩阵的长和宽颠倒
  let result = Array.from({ length: n }, () => new Array(m));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result[j][i] = matrix[i][j];
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
// [[1,2,3],[4,5,6]]\n
// @lcpr case=end

 */
