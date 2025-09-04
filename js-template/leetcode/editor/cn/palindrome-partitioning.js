/*
 * @lc app=leetcode.cn id=131 lang=javascript
 * @lcpr version=30202
 *
 * [131] 分割回文串
 */

import { use } from "react";
import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 回溯算法
 * @param {string} s
 * @return {string[][]}
 */
let partition = function (s) {
  let result = [];
  let track = [];

  function backtrack(s, start) {
    if (start === s.length) {
      result.push([...track]);
      return;
    }

    for (let i = start; i < s.length; i++) {
      // 剪枝：如果不是回文串
      if (!isPalindrome(s, start, i)) continue;
      // 做选择
      track.push(s.substring(start, i + 1));
      backtrack(s, i + 1);
      // 撤销选择
      track.pop();
    }
  }

  backtrack(s, 0);
  return result;
};
// 用双指针技巧判断 str[lo..hi] 是否是一个回文串
function isPalindrome(str, lo, hi) {
  while (lo < hi) {
    if (str[lo] !== str[hi]) {
      return false;
    }
    lo++;
    hi--;
  }
  return true;
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "aab"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n
// @lcpr case=end

 */
