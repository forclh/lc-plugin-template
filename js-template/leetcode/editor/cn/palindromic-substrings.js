/*
 * @lc app=leetcode.cn id=647 lang=javascript
 * @lcpr version=30304
 *
 * [647] 回文子串
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（子序列问题：dp数组）
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function (s) {
  const n = s.length;
  if (n === 0 || n === 1) return n;

  // dp[i][j]表示s[i...j]是否为回文字串
  const dp = Array.from({ length: n }, () => new Array(n).fill(false));
  // 初始化（可省略）
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  let result = 0;
  // 注意遍历顺序，取决于递推公式
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (s[i] === s[j]) {
        // 两头相同
        // 1. i === j 表示只有一个字符：是回文串
        // 2. j === i + 1表示有两个相同字符：是回文串
        // 3. j - i > 1 是否为回文串取决于dp[i+1][j-1]是否为回文串
        if (i === j || j === i + 1) {
          dp[i][j] = true;
          result++;
        } else if (dp[i + 1][j - 1]) {
          // dp[i][j]依赖左下角的dp[i + 1][j - 1]，由此确定遍历顺序应该从下到上从左到右
          dp[i][j] = true;
          result++;
        }
      } else {
        // 两头不同一定不是回文串
        dp[i][j] = false;
      }
    }
  }

  return result;
};
// @lc code=end

// your test code here
countSubstrings("abc");
/*
// @lcpr case=start
// "abc"\n
// @lcpr case=end

// @lcpr case=start
// "aaa"\n
// @lcpr case=end

 */
