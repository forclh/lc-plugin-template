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
 * v1 动态规划（自顶向下 + 备忘录）
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let m = word1.length;
  let n = word2.length;
  let memo = Array.from({ length: m }, () => new Array(n).fill(-1)); // 初始化为特殊值，表示未被计算
  return dp(word1, m - 1, word2, n - 1, memo);
};
// 返回使s1[0,...,i]和s2[0,...,j]相同的最小步数
let dp = function (s1, i, s2, j, memo) {
  if (i < 0) return j + 1;
  if (j < 0) return i + 1;
  if (memo[i][j] !== -1) return memo[i][j];
  if (s1[i] === s2[j]) {
    memo[i][j] = dp(s1, i - 1, s2, j - 1, memo);
  } else {
    memo[i][j] = Math.min(
      dp(s1, i - 1, s2, j, memo) + 1, // 删除s1
      dp(s1, i, s2, j - 1, memo) + 1 // 删除s2
    );
  }

  return memo[i][j];
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "sea"\n"eat"\n
// @lcpr case=end

// @lcpr case=start
// "leetcode"\n"etco"\n
// @lcpr case=end

 */
