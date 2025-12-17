/*
 * @lc app=leetcode.cn id=70 lang=javascript
 * @lcpr version=30304
 *
 * [70] 爬楼梯
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 动态规划（自顶向下+空间压缩）
 *
 * 时间复杂度:O(n)
 * 空间复杂度:O(1)
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  const dp = new Array(3);
  dp[1] = 1;
  dp[2] = 2;
  if (n <= 2) return dp[n];
  for (let i = 3; i <= n; i++) {
    const sum = dp[1] + dp[2];
    dp[1] = dp[2];
    dp[2] = sum;
  }
  return dp[2];
};
// @lc code=end

// your test code here
console.log(climbStairs(1));
/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 3\n
// @lcpr case=end

 */
