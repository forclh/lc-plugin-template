/*
 * @lc app=leetcode.cn id=115 lang=javascript
 * @lcpr version=30304
 *
 * [115] 不同的子序列
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（子序列问题：dp）
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinct = function (s, t) {
  const m = s.length;
  const n = t.length;
  // dp[i][j]表示s[0..i - 1]的子序列中t[0..j-1] 出现的次数为
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  // 初始化
  for (let i = 0; i <= m; i++) {
    dp[i][0] = 1; // 空串是所有字符串的子序列
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === t[j - 1]) {
        // s和t的当前字符相等的时候，可以选择将s和t都前移，也可以选择只前移s，t不前移，个数就是两者相加
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      } else {
        // s和t的当前字符不相等的时候，显然要前移s，看s的下一个字符是否和t的当前字符相等
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[m][n];
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "rabbbit"\n"rabbit"\n
// @lcpr case=end

// @lcpr case=start
// "babgbag"\n"bag"\n
// @lcpr case=end

 */
