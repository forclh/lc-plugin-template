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
 * v1 动态规划（dp数组）
 * @param {number[][]} matrix
 * @return {number}
 */
let minFallingPathSum = function (matrix) {
  let n = matrix.length;
  let res = Number.MAX_SAFE_INTEGER;
  // 定义：dp[i][j]表示从第一行到matrix[i][j]最小下降路径和
  let dp = Array.from({ length: n }, () => new Array(n));

  // 初始化
  for (let i = 0; i < n; i++) {
    dp[0][i] = matrix[0][i];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 处理边界情况
      let top = dp[i - 1][j];
      let topLeft = j - 1 >= 0 ? dp[i - 1][j - 1] : Number.MAX_SAFE_INTEGER;
      let topRight = j + 1 < n ? dp[i - 1][j + 1] : Number.MAX_SAFE_INTEGER;
      dp[i][j] = matrix[i][j] + Math.min(top, topLeft, topRight);
    }
  }

  for (let i = 0; i < n; i++) {
    res = Math.min(res, dp[n - 1][i]); // 落在最后一行路径和的最小值
  }
  return res;
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
