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
 * S1 转换为有序列表后二分查找(超时)
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  const number = [];
  matrix.forEach((line) => {
    number.push(...line);
  });

  number.sort((a, b) => a - b);

  let left = 0;
  let right = number.length;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    const value = number[mid];
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
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n5\n
// @lcpr case=end

// @lcpr case=start
// [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n20\n
// @lcpr case=end

 */
