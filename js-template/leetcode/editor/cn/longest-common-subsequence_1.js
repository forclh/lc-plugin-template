/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 * @lcpr version=30203
 *
 * [1143] 最长公共子序列
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（子序列问题：dp数组）
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
let longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;
  if (m === 0 || n === 0) return 0;
  // dp[i][j]表示以text1[i-1]和text2[j-1]结尾的最长公共子序列的长度
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  let maxLen = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
      // 更新最大值
      maxLen = Math.max(maxLen, dp[i][j]);
    }
  }
  return maxLen;
};

// @lc code=end

// your test code here
console.log(longestCommonSubsequence("ace", "abcde"));
/*
// @lcpr case=start
// "abcde"\n"ace"\n
// @lcpr case=end

// @lcpr case=start
// "abc"\n"abc"\n
// @lcpr case=end

// @lcpr case=start
// "abc"\n"def"\n
// @lcpr case=end

 */
