/*
 * @lc app=leetcode.cn id=931 lang=javascript
 * @lcpr version=30203
 *
 * [931] 下降路径最小和
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（自顶向下 + 备忘录）
 * @param {number[][]} matrix
 * @return {number}
 */
let minFallingPathSum = function (matrix) {
  let n = matrix.length;
  let res = Number.MAX_SAFE_INTEGER;
  // 备忘录：memo[i][j]存放到 matrix[i][j]最小下降路径和
  let memo = Array.from({ length: n }, () =>
    new Array(n).fill(Number.MAX_SAFE_INTEGER)
  ); // 初始化为一个不可能取到的值

  for (let i = 0; i < n; i++) {
    res = Math.min(res, dp(matrix, n - 1, i, memo)); // 落在最后一行路径和的最小值
  }
  return res;
};

// dp(matrix, i, j)表示从第一行落到位置matrix[i][j]的路径最小和
let dp = function (matrix, i, j, memo) {
  let n = matrix.length;
  // 判断索引越界

  if (i < 0 || i >= n || j < 0 || j >= n) {
    return Number.MAX_SAFE_INTEGER; // 返回一个特殊值，这个特殊值要大于所有的可能取值
  }

  // base case
  if (i === 0) return matrix[i][j]; // 第一行直接返回

  // 查找备忘录，防止重复计算
  if (memo[i][j] !== Number.MAX_SAFE_INTEGER) return memo[i][j];

  // 状态转移
  memo[i][j] =
    matrix[i][j] +
    Math.min(
      dp(matrix, i - 1, j, memo),
      dp(matrix, i - 1, j - 1, memo),
      dp(matrix, i - 1, j + 1, memo)
    );

  return memo[i][j];
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[2,1,3],[6,5,4],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[-19,57],[-40,-5]]\n
// @lcpr case=end

 */
