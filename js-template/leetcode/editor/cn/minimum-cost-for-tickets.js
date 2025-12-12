/*
 * @lc app=leetcode.cn id=983 lang=javascript
 * @lcpr version=30304
 *
 * [983] 最低票价
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（打家劫舍问题：dp数组）
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = function (days, costs) {
  const n = days.length;

  // dp[i]表示完成days[i...]的最低消费
  const dp = new Array(n).fill(Infinity);
  dp[n - 1] = Math.min(...costs); // 不一点买一天最便宜
  for (let i = n - 2; i >= 0; i--) {
    // 当前在第days[i]天，考虑买哪种通信证
    // 买一天
    let buy1 = costs[0] + dp[i + 1];
    // 买七天
    let freeDays = days[i] + 7 - 1; // 表示可以免费路由直到第freeDays天
    let next = i;
    while (days[next] <= freeDays) {
      next++; // 找到下一次需要重新买通行证对应天数的索引
    }
    let buy7 = costs[1] + (next < n ? dp[next] : 0);
    // 买三十天
    freeDays = days[i] + 30 - 1;
    next = i;
    while (days[next] <= freeDays) {
      next++;
    }
    let buy30 = costs[2] + (next < n ? dp[next] : 0);
    dp[i] = Math.min(buy1, buy7, buy30);
  }

  return dp[0];
};
// @lc code=end

// your test code here
// mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]);
// mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15]);
mincostTickets([1, 4, 6, 7, 8, 20], [7, 2, 15]);
/*
// @lcpr case=start
// [1,4,6,7,8,20]\n[2,7,15]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5,6,7,8,9,10,30,31]\n[2,7,15]\n
// @lcpr case=end

 */
