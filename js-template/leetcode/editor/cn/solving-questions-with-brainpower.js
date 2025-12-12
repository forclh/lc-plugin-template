/*
 * @lc app=leetcode.cn id=2140 lang=javascript
 * @lcpr version=30304
 *
 * [2140] 解决智力问题
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（打家劫舍问题：dp数组）
 * @param {number[][]} questions
 * @return {number}
 */
const mostPoints = function (questions) {
  const n = questions.length;
  if (n === 1) return questions[0][0];

  // dp[i]表示从questions[i]开始做题，能够获得的最大分数
  const dp = new Array(n).fill(0);
  dp[n - 1] = questions[n - 1][0];
  for (let i = n - 2; i >= 0; i--) {
    const skip = dp[i + 1]; // 不做这题
    const next = i + questions[i][1] + 1;
    const take = questions[i][0] + (next < n ? dp[next] : 0); // 做这题并跳过冷却
    dp[i] = Math.max(skip, take);
  }
  return dp[0];
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[3,2],[4,3],[4,4],[2,5]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[2,2],[3,3],[4,4],[5,5]]\n
// @lcpr case=end

 */
