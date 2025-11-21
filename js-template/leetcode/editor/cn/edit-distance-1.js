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
 * v1 动态规划（自定向下）
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
let minDistance = function (word1, word2) {
  // 备忘录初始化为特殊值，代表还未计算
  const memo = Array.from({ length: word1.length }, () =>
    new Array(word2.length).fill(-1)
  );
  return dp(word1.length - 1, word2.length - 1);

  // 定义：返回word1[0...i]和word2[0...j]的最小编辑距离
  function dp(i, j) {
    // base case
    if (i === -1) return j + 1;
    if (j === -1) return i + 1;
    // 查备忘录，避免重叠子问题
    if (memo[i][j] !== -1) return memo[i][j];
    // 状态转移，结果存入备忘录
    if (word1[i] === word2[j]) {
      memo[i][j] = dp(i - 1, j - 1);
    } else {
      memo[i][j] = Math.min(
        dp(i, j - 1) + 1,
        dp(i - 1, j) + 1,
        dp(i - 1, j - 1) + 1
      );
    }
    return memo[i][j];
  }
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
