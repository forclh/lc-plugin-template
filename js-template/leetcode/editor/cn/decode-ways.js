/*
 * @lc app=leetcode.cn id=91 lang=javascript
 * @lcpr version=30304
 *
 * [91] 解码方法
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（dp数组）
 * @param {string} s
 * @return {number}
 */
const numDecodings = function (s) {
  const n = s.length;
  // dp[i]表示字符串s[0...i-1]的解码方法总数
  const dp = new Array(n + 1).fill(0);
  // 初始化s 为空或者 s 只有一个字符的情况
  dp[0] = 1;
  dp[1] = s[0] === "0" ? 0 : 1;
  for (let i = 2; i <= n; i++) {
    let c = s[i - 1];
    let d = s[i - 2];
    // 当前消息可以解码
    if (c >= "1" && c <= "9") {
      dp[i] += dp[i - 1];
    }
    // 当前消息和前一位消息合并可以解码
    if (d === "1" || (d === "2" && c <= "6")) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[n];
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "12"\n
// @lcpr case=end

// @lcpr case=start
// "226"\n
// @lcpr case=end

// @lcpr case=start
// "06"\n
// @lcpr case=end

 */
