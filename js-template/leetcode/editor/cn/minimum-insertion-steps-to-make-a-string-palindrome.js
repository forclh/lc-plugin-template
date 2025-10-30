/*
 * @lc app=leetcode.cn id=1312 lang=javascript
 * @lcpr version=30203
 *
 * [1312] 让字符串成为回文串的最少插入次数
 */

// import {ListNode} from "../common/listNode.js";
// import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划-子序列问题（自底向上）
 * @param {string} s
 * @return {number}
 */
let minInsertions = function (s) {
  let n = s.length;
  // dp[i][j]表示s[i,...,j]成为回文串的最小操作次数
  let dp = Array.from({ length: n }, () => new Array(n).fill(0));

  // 反向遍历
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i + 1][j] + 1, dp[i][j - 1] + 1);
      }
    }
  }

  return dp[0][n - 1];
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "zzazz"\n
// @lcpr case=end

// @lcpr case=start
// "mbadm"\n
// @lcpr case=end

// @lcpr case=start
// "leetcode"\n
// @lcpr case=end

 */
