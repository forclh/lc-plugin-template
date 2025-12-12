/*
 * @lc app=leetcode.cn id=583 lang=javascript
 * @lcpr version=30203
 *
 * [583] 两个字符串的删除操作
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（子序列问题：dp数组）
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let m = word1.length;
  let n = word2.length;
  // dp[i][j]表示使得word1[...i-1]和word2[...j-1]相等的最小删除步数
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  // 初始化
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // 不需要删，匹配前面的字符
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // 要么删word1[i - 1]要么删word2[j - 1]，删除次数 + 1
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1);
      }
    }
  }

  return dp[m][n];
};

// @lc code=end

// your test code here
minDistance("sea", "eat");
/*
// @lcpr case=start
// "sea"\n"eat"\n
// @lcpr case=end

// @lcpr case=start
// "leetcode"\n"etco"\n
// @lcpr case=end

 */
