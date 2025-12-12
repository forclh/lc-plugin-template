/*
 * @lc app=leetcode.cn id=1027 lang=javascript
 * @lcpr version=30304
 *
 * [1027] 最长等差数列
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（子序列问题：哈希表）
 * @param {number[]} nums
 * @return {number}
 */
const longestArithSeqLength = function (nums) {
  const n = nums.length;
  if (n <= 1) return n;
  // dp[j]表示以nums[j]结尾的，不同差值对应的最长等差子序列的长度
  const dp = Array.from({ length: n }, () => new Map());
  let res = 2; // n >= 2
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const d = nums[i] - nums[j]; // 计算差值
      const prev = dp[j].get(d) || 1; // 对应差值的最长子序列的长度
      const cur = prev + 1;
      const existed = dp[i].get(d) || 1;
      // 更新dp
      dp[i].set(d, Math.max(cur, existed));
      // 更新最大值
      res = Math.max(res, dp[i].get(d));
    }
  }
  return res;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [3,6,9,12]\n
// @lcpr case=end

// @lcpr case=start
// [9,4,7,2,10]\n
// @lcpr case=end

// @lcpr case=start
// [20,1,15,3,10,5,8]\n
// @lcpr case=end

 */
