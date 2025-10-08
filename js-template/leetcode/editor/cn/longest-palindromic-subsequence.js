/*
 * @lc app=leetcode.cn id=516 lang=javascript
 * @lcpr version=30203
 *
 * [516] 最长回文子序列
 */

// import {ListNode} from "../common/listNode.js";
// import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划-子序列问题（自底向上）
 * @param {string} s
 * @return {number}
 */
let longestPalindromeSubseq = function (s) {
  let n = s.length;
  // dp[i][j]为s[i,...,j]中的最长子序列的长度
  let dp = Array.from({ length: n }, () => new Array(n).fill(0));
  // base case dp[i][j] = 1 (i === j)
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }
  // 反着遍历保证正确的状态转移
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      // 状态转移方程
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2; // 它俩一定在最长回文子序列中
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]); // 比较 s[i+1..j] 和 s[i..j-1] 谁的回文子序列更长
      }
    }
  }
  return dp[0][n - 1];
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "bbbab"\n
// @lcpr case=end

// @lcpr case=start
// "cbbd"\n
// @lcpr case=end

 */
