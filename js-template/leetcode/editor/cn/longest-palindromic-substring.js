/*
 * @lc app=leetcode.cn id=5 lang=javascript
 * @lcpr version=30203
 *
 * [5] 最长回文子串
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 双指针（左右指针）
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function (s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    // 以 s[i] 为中心的最长回文子串
    let s1 = palindrome(s, i, i);
    // 以 s[i] 和 s[i+1] 为中心的最长回文子串
    let s2 = palindrome(s, i, i + 1);
    result = result.length > s1.length ? result : s1;
    result = result.length > s2.length ? result : s2;
  }
  return result;
};

// 返回字符串s中以left和right为中心的最长回文串
let palindrome = function (s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  // 此时 s[l+1..r-1] 就是最长回文串
  return s.substring(left + 1, right);
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "babad"\n
// @lcpr case=end

// @lcpr case=start
// "cbbd"\n
// @lcpr case=end

 */
