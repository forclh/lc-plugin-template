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
 * v2 动态规划（自底向上+空间优化）
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function (cost) {
  const n = cost.length;
  // 初始化
  let dp_0 = 0;
  let dp_1 = 0;
  // 遍历顺序
  for (let i = 2; i <= n; i++) {
    let dp_i = Math.min(dp_1 + cost[i - 1], dp_0 + cost[i - 2]);
    dp_0 = dp_1;
    dp_1 = dp_i;
  }
  // 返回最低花费
  return dp_1;
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
