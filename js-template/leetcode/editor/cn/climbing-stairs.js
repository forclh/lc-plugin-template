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
 * v1 动态规划（自顶向下）
 *
 * 时间复杂度:O(n)
 * 空间复杂度:O(n)
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  // 确定dp数组（dp table）以及下标的含义: 爬到第i层楼梯，有dp[i]种方法
  // 确定递推公式: dp[i] = dp[i - 1] + dp[i - 2]
  // dp数组如何初始化: dp[1] = 1 dp[2] = 2
  // 确定遍历顺序: 从前向后
  // 举例推导dp数组

  const dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 3\n
// @lcpr case=end

 */
