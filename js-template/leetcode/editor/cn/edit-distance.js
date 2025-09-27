/*
 * @lc app=leetcode.cn id=72 lang=javascript
 * @lcpr version=30203
 *
 * [72] 编辑距离
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（自底向上）
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
let minDistance = function (word1, word2) {
  let m = word1.length;
  let n = word2.length;
  // 定义 dp[i][j]为将s1[0,...,i-1]替换为s2[0,...,j-1]的最小操作数
  let dp = Array.from({ length: m + 1 }, () => new Array(n + 1)); // 注意dp数组的尺寸

  // base case 初始化
  dp[0][0] = 0;
  for (let i = 1; i <= n; i++) {
    dp[0][i] = i;
  }
  for (let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1, // 删除
          dp[i - 1][j - 1] + 1, // 替换
          dp[i][j - 1] + 1 // 插入
        );
      }
    }
  }
  return dp[m][n];
};

// @lc code=end

// your test code here

/*
// @lcpr case=start
// "horse"\n"ros"\n
// @lcpr case=end

// @lcpr case=start
// "intention"\n"execution"\n
// @lcpr case=end

 */
