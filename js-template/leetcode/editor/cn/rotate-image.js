/*
 * @lc app=leetcode.cn id=48 lang=javascript
 * @lcpr version=30203
 *
 * [48] 旋转图像
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 二维数组操作（对角线对称 + 数组反转）
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let rotate = function (matrix) {
  let n = matrix.length;
  // 先沿对角线镜像对称二维矩阵
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  // 然后反转二维矩阵的每一行
  matrix.forEach((row) => reverse(row));
};

// 反转一维数组
let reverse = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]\n
// @lcpr case=end

 */
