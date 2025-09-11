/*
 * @lc app=leetcode.cn id=424 lang=javascript
 * @lcpr version=30203
 *
 * [424] 替换后的最长重复字符
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 滑动窗口
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
let characterReplacement = function (s, k) {
  let result = 0; // 记录最长子字符串的长度
  let window = new Array(26).fill(0); // 记录窗口内字母出现的个数
  // 记录窗口中字符的最多重复次数
  // 记录这个值的意义在于，最划算的替换方法肯定是把其他字符替换成出现次数最多的那个字符
  let maxCount = 0;

  let left = 0;
  let right = 0;
  while (right < s.length) {
    // 扩大窗口
    let c = s.charCodeAt(right) - "A".charCodeAt(0);
    right++;
    window[c]++;
    maxCount = Math.max(maxCount, window[c]); // 更新最大字母出现数量

    while (right - left - maxCount > k) {
      // 杂牌字符数量 right - left - windowMaxCount 多于 k
      // 此时，k 次替换已经无法把窗口内的字符都替换成相同字符了
      // 必须缩小窗口
      let d = s.charCodeAt(left) - "A".charCodeAt(0);
      left++;
      window[d]--;
    }
    result = Math.max(result, right - left);
  }
  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "ABAB"\n2\n
// @lcpr case=end

// @lcpr case=start
// "AABABBA"\n1\n
// @lcpr case=end

 */
