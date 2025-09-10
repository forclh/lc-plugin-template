/*
 * @lc app=leetcode.cn id=567 lang=javascript
 * @lcpr version=30203
 *
 * [567] 字符串的排列
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 滑动窗口
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
let checkInclusion = function (s1, s2) {
  let need = new Map(); // 记录需要的元素
  let window = new Map(); // 记录窗口中的元素
  for (let c of s1) {
    need.set(c, (need.get(c) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let valid = 0; // window中满足need的元素个数
  while (right < s2.length) {
    let c = s2[right];
    right++;
    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (window.get(c) === need.get(c)) {
        valid++;
      }
    }
    // 判断左侧窗口是否要收缩
    while (right - left >= s1.length) {
      // 在这里判断是否找到了合法的子串
      if (valid === need.size) {
        return true;
      }
      let d = s2[left];
      left++;
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) {
          valid--;
        }
        window.set(d, window.get(d) - 1);
      }
    }
  }
  return false;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "eidbaooo"\n
// @lcpr case=end

// @lcpr case=start
// "eidboaoo"\n
// @lcpr case=end

 */
