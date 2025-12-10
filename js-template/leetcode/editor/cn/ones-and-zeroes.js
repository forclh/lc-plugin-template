/*
 * @lc app=leetcode.cn id=474 lang=javascript
 * @lcpr version=30304
 *
 * [474] 一和零
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划(01背包问题:自底向上)
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const findMaxForm = function (strs, m, n) {
  const len = strs.length;

  // 定义:dp[i][j][k]表示在给定0和1的个数分别为j和k时,只使用前i个字符串,可以装的最大字符串数
  const dp = Array.from({ length: len + 1 }, () =>
    Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  );

  for (let i = 1; i <= len; i++) {
    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        // 计算0和1的数量
        const [zeroCount, oneCount] = count(strs[i - 1]);
        // 有足够的空间可以装下
        if (j >= zeroCount && k >= oneCount) {
          // 选择装或者不装
          dp[i][j][k] = Math.max(
            dp[i - 1][j][k], // 不装
            dp[i - 1][j - zeroCount][k - oneCount] + 1 // 装
          );
        } else {
          // 没有足够的空间把当前字符串装进背包
          // 只能选择不装
          dp[i][j][k] = dp[i - 1][j][k];
        }
      }
    }
  }
  // 统计字符串中的01个数
  function count(str) {
    let zeroCount = 0;
    const n = str.length;
    for (let i = 0; i < n; i++) {
      if (str[i] === "0") zeroCount++;
    }
    return [zeroCount, n - zeroCount];
  }

  return dp[len][m][n];
};
// @lc code=end

// your test code here
findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3);
/*
// @lcpr case=start
// ["10","0001","111001","1","0"]\n5\n3\n
// @lcpr case=end

// @lcpr case=start
// ["10","0","1"]\n1\n1\n
// @lcpr case=end

 */
