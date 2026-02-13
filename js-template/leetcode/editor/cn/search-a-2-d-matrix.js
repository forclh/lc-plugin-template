/*
 * @lc app=leetcode.cn id=74 lang=javascript
 * @lcpr version=30307
 *
 * [74] 搜索二维矩阵
 */

import { ListNode } from '../common/listNode.js';
import { TreeNode } from '../common/treeNode.js';

// @lc code=start
/**
 * S1 二分搜索
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let left = 0;
  let right = m * n;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    const value = getValue(matrix, mid);
    if (value === target) {
      return true;
    } else if (value < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return false;
};
// 根据一维索引返回二维数组中的值
const getValue = (matrix, index) => {
  let n = matrix[0].length;
  const i = Math.floor(index / n);
  const j = index % n;
  return matrix[i][j];
};
// @lc code=end

// your test code here
console.log(searchMatrix([[1]], 0));
/*
// @lcpr case=start
// [[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n3\n
// @lcpr case=end

// @lcpr case=start
// [[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n13\n
// @lcpr case=end

 */
