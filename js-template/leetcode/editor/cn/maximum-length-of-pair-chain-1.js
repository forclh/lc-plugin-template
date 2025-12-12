/*
 * @lc app=leetcode.cn id=646 lang=javascript
 * @lcpr version=30304
 *
 * [646] 最长数对链
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 动态规划（子序列问题：dp数组）
 * @param {number[][]} pairs
 * @return {number}
 */
const findLongestChain = function (pairs) {
  const n = pairs.length;
  // 按照升序排序（左右端点都行，只要保证合法前驱 j 被放在 i 之前）
  pairs.sort((a, b) => a[0] - b[0]);
  // dp[i] 表示以第 pairs[i] 个数对结尾的最长数对链长度。
  const dp = new Array(n).fill(1);
  let res = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (pairs[j][1] < pairs[i][0]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[1,2],[2,3],[3,4]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[7,8],[4,5]]\n
// @lcpr case=end

 */
