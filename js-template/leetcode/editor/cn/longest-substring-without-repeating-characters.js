/*
 * @lc app=leetcode.cn id=3 lang=javascript
 * @lcpr version=30203
 *
 * [3] 无重复字符的最长子串
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 滑动窗口
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function (s) {
  let window = new Map(); // 记录窗口内的元素

  let left = 0;
  let right = 0;
  let maxLen = 0;
  while (right < s.length) {
    // 扩大窗口
    let c = s[right];
    right++;
    window.set(c, (window.get(c) || 0) + 1);
    // 判断左侧窗口是否要收缩
    while (window.get(c) > 1) {
      let d = s[left];
      left++;
      window.set(d, window.get(d) - 1);
    }
    // 缩小窗口结束代表此时窗口内的就是无重复子串
    maxLen = Math.max(maxLen, right - left);
  }

  return maxLen;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "abcabcbb"\n
// @lcpr case=end

// @lcpr case=start
// "bbbbb"\n
// @lcpr case=end

// @lcpr case=start
// "pwwkew"\n
// @lcpr case=end

 */
