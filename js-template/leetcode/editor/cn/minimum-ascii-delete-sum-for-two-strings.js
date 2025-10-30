/*
 * @lc app=leetcode.cn id=712 lang=javascript
 * @lcpr version=30203
 *
 * [712] 两个字符串的最小ASCII删除和
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（自顶向下 + 备忘录）
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
  let m = s1.length;
  let n = s2.length;
  let memo = Array.from({ length: m }, () => new Array(n).fill(-1));
  return dp(s1, m - 1, s2, n - 1, memo);
};

let dp = function (s1, i, s2, j, memo) {
  if (i < 0) return getCodeSum(s2, j);
  if (j < 0) return getCodeSum(s1, i);

  if (memo[i][j] !== -1) return memo[i][j];

  if (s1[i] === s2[j]) {
    memo[i][j] = dp(s1, i - 1, s2, j - 1, memo);
  } else {
    memo[i][j] = Math.min(
      dp(s1, i - 1, s2, j, memo) + s1.charCodeAt(i), // 删除s1
      dp(s1, i, s2, j - 1, memo) + s2.charCodeAt(j) // 删除s2
    );
  }

  return memo[i][j];
};
// 获取字符串str[0,...,end]的ASCII和
function getCodeSum(str, end) {
  let sum = 0;
  for (let i = 0; i <= end; i++) {
    sum += str.charCodeAt(i);
  }
  return sum;
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "sea"\n"eat"\n
// @lcpr case=end

// @lcpr case=start
// "delete"\n"leet"\n
// @lcpr case=end

 */
