/*
 * @lc app=leetcode.cn id=14 lang=javascript
 * @lcpr version=30203
 *
 * [14] 最长公共前缀
 */

import { startTransition } from "react";
import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 利用startWith API
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {
  let prefix = strs[0]; // 假设最长前缀为第一个字符串
  for (let i = 0; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.substring(0, prefix.length - 1); // 缩短前缀
      if (prefix === "") {
        return "";
      }
    }
  }
  return prefix;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// ["flower","flow","flight"]\n
// @lcpr case=end

// @lcpr case=start
// ["dog","racecar","car"]\n
// @lcpr case=end

 */
