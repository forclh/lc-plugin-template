/*
 * @lc app=leetcode.cn id=718 lang=javascript
 * @lcpr version=30304
 *
 * [718] 最长重复子数组
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（子序列问题）
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findLength = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  if (m === 0 || n === 0) return 0;

  // dp[i][j]表示以nums1[i - 1]和nums2[j - 1]结尾的公共最长子数组的长度
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  let maxLen = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        // 更新最大值
        maxLen = Math.max(maxLen, dp[i][j]);
      }
    }
  }
  return maxLen;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,2,1]\n[3,2,1,4,7]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0,0,0]\n[0,0,0,0,0]\n
// @lcpr case=end

 */
