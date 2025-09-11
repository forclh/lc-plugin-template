/*
 * @lc app=leetcode.cn id=395 lang=javascript
 * @lcpr version=30203
 *
 * [395] 至少有 K 个重复字符的最长子串
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
let longestSubstring = function (s, k) {
  let result = 0;
  // 滑动窗口算法的时间复杂度是 O(N)，循环 26 次依然是 O(26N) = O(N)。
  for (let i = 1; i <= 26; i++) {
    if (i * k > s.length) break;
    result = Math.max(result, longestKSubstring(s, k, i));
  }
  return result;
};

// 通过添加限制条件来使用滑动窗口
// 寻找字符串s中出现count种不同字符，且每种字符个数都不少于 k，返回字符串的长度
function longestKSubstring(s, k, count) {
  let window = new Map();
  let left = 0;
  let right = 0;
  let result = 0;
  while (right < s.length) {
    let c = s[right];
    right++;
    window.set(c, (window.get(c) || 0) + 1);

    // 当窗口中出现的字符种类大于等于 count 时缩小窗口
    while (window.size > count) {
      let d = s[left];
      window.set(d, window.get(d) - 1);
      if (window.get(d) === 0) {
        window.delete(d);
      }
      left++;
    }
    // 判断子集是否符合
    if (window.values().every((item) => item >= k)) {
      result = Math.max(result, right - left);
    }
  }
  return result;
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "aaabb"\n3\n
// @lcpr case=end

// @lcpr case=start
// "ababbc"\n2\n
// @lcpr case=end

 */
