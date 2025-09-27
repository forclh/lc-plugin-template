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
 * v2 动态规划（自底向上+空间压缩）
 * @param {number} n
 * @return {number}
 */
let fib = function (n) {
  if (n === 0 || n === 1) return n;
  // base case
  let dp1 = 0;
  let dp2 = 1;

  // 状态转移
  for (let i = 2; i < n + 1; i++) {
    dp = dp2 + dp1;
    [dp2, dp1] = [dp, dp2];
  }
  return dp;
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
