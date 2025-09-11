/*
 * @lc app=leetcode.cn id=438 lang=javascript
 * @lcpr version=30203
 *
 * [438] 找到字符串中所有字母异位词
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 滑动窗口
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
let findAnagrams = function (s, p) {
  let need = new Map(); // 记录p中的所有元素
  let window = new Map(); // 记录窗口中的所有元素
  for (let c of p) {
    need.set(c, (need.get(c) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let valid = 0; // 记录 window 中满足 need 个元素个数
  let result = [];
  while (right < s.length) {
    // 扩大窗口逻辑
    let c = s[right];
    right++;
    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (need.get(c) === window.get(c)) {
        valid++;
      }
    }
    // 缩小窗口逻辑
    while (right - left >= p.length) {
      if (valid === need.size) {
        result.push(left);
      }

      let d = s[left];
      left++;
      if (need.has(d)) {
        if (need.get(d) === window.get(d)) {
          valid--;
        }
        window.set(d, window.get(d) - 1);
      }
    }
  }

  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "cbaebabacd"\n"abc"\n
// @lcpr case=end

// @lcpr case=start
// "abab"\n"ab"\n
// @lcpr case=end

 */
