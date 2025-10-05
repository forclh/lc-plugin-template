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
 * v1 动态规划（自上而下 + 备忘录）
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
let longestCommonSubsequence = function (text1, text2) {
  let m = text1.length;
  let n = text2.length;
  let memo = Array.from({ length: m }, () => new Array(n).fill(-1)); // 初始化为特殊值表示未计算
  return dp(text1, m - 1, text2, n - 1, memo);
};
// 定义：返回text1[0,...,i]和text2[0,...,j]的最长公共子序列的长度
let dp = function (s1, i, s2, j, memo) {
  if (i < 0 || j < 0) return 0;

  if (memo[i][j] !== -1) return memo[i][j];

  if (s1[i] === s2[j]) {
    memo[i][j] = dp(s1, i - 1, s2, j - 1, memo) + 1;
  } else {
    memo[i][j] = Math.max(
      dp(s1, i - 1, s2, j, memo),
      dp(s1, i, s2, j - 1, memo)
    );
  }

  return memo[i][j];
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
