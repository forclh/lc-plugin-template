/*
 * @lc app=leetcode.cn id=76 lang=javascript
 * @lcpr version=30203
 *
 * [76] 最小覆盖子串
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 滑动窗口
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
let minWindow = function (s, t) {
  let need = {}; // 记录字符串 t 中的元素
  let window = {}; // 记录窗口内的元素
  for (let c of t) {
    need[c] = (need[c] || 0) + 1;
  }

  // 左闭右开
  let left = 0;
  let right = 0;
  let valid = 0; // 记录 window 中满足 need 的元素个数

  // 记录最小覆盖子串的起始索引及长度
  let start = 0;
  let len = Infinity;

  while (right < s.length) {
    // c 是将移入窗口的字符
    let c = s[right];
    right++; // 扩大窗口
    // 进行窗口内数据的一系列更新
    if (need[c]) {
      window[c] = (window[c] || 0) + 1;
      if (window[c] === need[c]) valid++;
    }

    // 满足 need 时缩小窗口
    while (valid === Object.keys(need).length) {
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      // d 是将要移除窗口的元素
      let d = s[left];
      left++; // 缩小窗口
      // 进行窗口内数据的一系列更新
      if (need[d]) {
        if (window[d] === need[d]) {
          valid--; // 因为有重复元素，所以valid的减少需要判断
        }
        window[d]--;
      }
    }
  }
  // 返回最小覆盖子串
  return len === Infinity ? "" : s.substring(start, start + len);
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "ADOBECODEBANC"\n"ABC"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"a"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"aa"\n
// @lcpr case=end

 */
