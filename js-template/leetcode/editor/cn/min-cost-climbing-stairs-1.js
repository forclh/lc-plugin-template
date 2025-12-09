/*
 * @lc app=leetcode.cn id=746 lang=javascript
 * @lcpr version=30304
 *
 * [746] 使用最小花费爬楼梯
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（自底向上）
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function (cost) {
  // 1. dp数组和索引的定义
  // 定义dp[i]表示到达第i个阶梯最低花费
  // 2. 状态转移方程
  // dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  // 3. 初始化
  // 4. 遍历顺序
  const n = cost.length;
  // 定义dp[i]表示到达第i个阶梯最低花费
  const dp = new Array(n + 1);
  // 初始化
  dp[0] = 0;
  dp[1] = 0;
  // 遍历顺序
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  // 返回最低花费
  return dp[n];
};
// @lc code=end

// your test code here
minCostClimbingStairs([10, 15, 20]);
/*
// @lcpr case=start
// [10,15,20]\n
// @lcpr case=end

// @lcpr case=start
// [1,100,1,1,1,100,1,1,100,1]\n
// @lcpr case=end

 */
