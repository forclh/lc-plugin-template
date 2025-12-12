/*
 * @lc app=leetcode.cn id=120 lang=javascript
 * @lcpr version=30304
 *
 * [120] 三角形最小路径和
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（dp数组）
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function (triangle) {
  const n = triangle.length;
  // dp[i][j]表示从triangle[0][0]出发到triangle[i][j]的最小下降路径和
  const dp = Array.from({ length: n }, () => new Array(n).fill(Infinity));
  // 初始化
  dp[0][0] = triangle[0][0];
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      const topLeft = j - 1 >= 0 ? dp[i - 1][j - 1] : Infinity;
      const top = j < triangle[i - 1].length ? dp[i - 1][j] : Infinity;
      dp[i][j] = Math.min(topLeft, top) + triangle[i][j];
    }
  }
  let result = Infinity;
  for (const num of dp[n - 1]) {
    if (num < result) result = num;
  }
  return result;
};
// @lc code=end

// your test code here
minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
/*
// @lcpr case=start
// [[2],[3,4],[6,5,7],[4,1,8,3]]\n
// @lcpr case=end

// @lcpr case=start
// [[-10]]\n
// @lcpr case=end

 */
