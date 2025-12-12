/*
 * @lc app=leetcode.cn id=1218 lang=javascript
 * @lcpr version=30304
 *
 * [1218] 最长定差子序列
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（子序列问题：哈希表）
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
const longestSubsequence = function (arr, difference) {
  const n = arr.length;
  if (n <= 1) return n;
  const dp = new Map(); // dp.get(x)对应以 x 结尾的最长定差子序列长度
  let maxLen = 1; // 记录最长定差子序列的长度
  // 遍历数组，更新以 x 结尾的最长定差子序列的长度
  for (const x of arr) {
    // 寻找以 x - difference 结尾的最长定差子序列的长度
    const prev = dp.get(x - difference) || 0;
    const cur = prev + 1;

    // 当前以x结尾的最长定差子序列的长度
    const existed = dp.get(x) || 1;
    // 更新以x结尾的最长定差子序列的长度
    dp.set(x, Math.max(cur, existed));
    // 更新最大值
    maxLen = Math.max(maxLen, dp.get(x));
  }
  return maxLen;
};
// @lc code=end

// your test code here
longestSubsequence([1, 2, 3, 4], 1);
/*
// @lcpr case=start
// [1,2,3,4]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,3,5,7]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,5,7,8,5,3,4,2,1]\n-2\n
// @lcpr case=end

 */
