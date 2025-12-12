/*
 * @lc app=leetcode.cn id=1035 lang=javascript
 * @lcpr version=30304
 *
 * [1035] 不相交的线
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划(子序列问题:dp数组)
 *
 * 相当于求两个数组中最长公共子序列的长度
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maxUncrossedLines = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  if (m === 0 || n === 0) return 0;

  // dp[i][j]表示以nums[i-1]和nums2[j - 1]为结尾的最长公共子序列的长度
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  let maxLen = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
      maxLen = Math.max(maxLen, dp[i][j]);
    }
  }
  return maxLen;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,4,2]\n[1,2,4]\n
// @lcpr case=end

// @lcpr case=start
// [2,5,1,2,5]\n[10,5,2,1,5,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,3,7,1,7,5]\n[1,9,2,5,1]\n
// @lcpr case=end

 */
