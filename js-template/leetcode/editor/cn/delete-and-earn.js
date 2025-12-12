/*
 * @lc app=leetcode.cn id=740 lang=javascript
 * @lcpr version=30304
 *
 * [740] 删除并获得点数
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（打家劫舍问题：dp数组）
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function (nums) {
  const points = new Array(10001).fill(0);
  // 建立每个点数和其和的映射
  for (const num of nums) {
    points[num] += num;
  }
  // 接下来就相当于打家劫舍问题：
  // points中代表每个编号房子的财富，相邻的房子不能偷窃，求可以获得的最大财富。
  const n = points.length;
  // dp[i]表示从前i个房子中能够偷到的最大金额
  const dp = new Array(n + 1).fill(0);
  dp[1] = points[0];
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + points[i - 1]);
  }
  return dp[n];
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [3,4,2]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,3,3,3,4]\n
// @lcpr case=end

 */
