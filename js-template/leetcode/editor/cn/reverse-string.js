/*
 * @lc app=leetcode.cn id=344 lang=javascript
 * @lcpr version=30203
 *
 * [344] 反转字符串
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 双指针（左右指针）
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
let reverseString = function (s) {
  // 一左一右两个指针相向而行
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    // 交换 s[left] 和 s[right]
    [s[left], [s[right]]] = [s[right], s[left]];
    left++;
    right--;
  }
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// ["h","e","l","l","o"]\n
// @lcpr case=end

// @lcpr case=start
// ["H","a","n","n","a","h"]\n
// @lcpr case=end

 */
