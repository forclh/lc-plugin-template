/*
 * @lc app=leetcode.cn id=509 lang=javascript
 * @lcpr version=30203
 *
 * [509] 斐波那契数
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（自底向上）
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 * @param {number} n
 * @return {number}
 */
let fib = function (n) {
  // 1.确定dp数组和下标的定义
  // dp[i]表示第i个数的斐波那契数为dp[i]
  const dp = new Array(n + 1);
  // 3.初始化dp数组
  dp[0] = 0;
  dp[1] = 1;
  // 4.确定遍历顺序
  for (let i = 2; i <= n; i++) {
    // 2.确定递推公式 dp[i] = dp[i - 1] + dp[i - 2]
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  // 5.推导dp数组
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

// @lcpr case=start
// 4\n
// @lcpr case=end

 */
