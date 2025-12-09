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
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function (cost) {
  // 1. dp数组和索引的定义
  // 2. 状态转移方程 dp[i] = Math.min(dp[i + 1], dp[i + 2]) + cost[i]
  // 3. 初始化
  // 4. 遍历顺序
  const n = cost.length;
  // 定义dp[i]表示从楼梯第i个阶梯出发到达顶部的最低花费
  const dp = new Array(n);
  // 初始化
  dp[n - 1] = cost[n - 1];
  dp[n - 2] = cost[n - 2];
  // 遍历顺序
  for (let i = n - 3; i >= 0; i--) {
    dp[i] = Math.min(dp[i + 1], dp[i + 2]) + cost[i];
  }
  // 返回最低花费
  return Math.min(dp[0], dp[1]);
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
