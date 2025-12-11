/*
 * @lc app=leetcode.cn id=139 lang=javascript
 * @lcpr version=30304
 *
 * [139] 单词拆分
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划(完全背包问题求排列)
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function (s, wordDict) {
  const n = s.length;
  // dp[i]表示字符串s的前i位是否可以拆分为字典中的一个或多个单词的组合
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;

  // 排列问题
  // 先遍历容量（字符串长度）
  for (let i = 1; i <= n; i++) {
    // 后遍历物品（字典中的单词）
    for (const word of wordDict) {
      const len = word.length;
      // 1. 只有当前截取的长度 i 大于等于单词长度时，才有可能匹配
      // 2. 截取 s 的后 len 位，判断是否等于当前 word
      // 3. 并且剩余的前半部分 (i - len) 必须也能被拆分 (dp[i - len] 为 true)
      if (i >= len && s.slice(i - len, i) === word && dp[i - len]) {
        dp[i] = true;
        // 只要找到一种匹配方式，当前长度 i 就通过了，无需尝试其他单词
        break;
      }
    }
  }
  return dp[n];
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "leetcode"\n["leet","code"]\n
// @lcpr case=end

// @lcpr case=start
// "applepenapple"\n["apple","pen"]\n
// @lcpr case=end

// @lcpr case=start
// "catsandog"\n["cats","dog","sand","and","cat"]\n
// @lcpr case=end

 */
