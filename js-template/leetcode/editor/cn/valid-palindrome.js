/*
 * @lc app=leetcode.cn id=125 lang=javascript
 * @lcpr version=30203
 *
 * [125] 验证回文串
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 双指针（左右指针） + 正则
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function (s) {
  // 清理字符串
  let sub = [];
  for (let i = 0; i < s.length; i++) {
    if (/[a-zA-Z0-9]/.test(s[i])) {
      sub.push(s[i].toLowerCase());
    }
  }
  s = sub.join("");
  // 判断是否为回文
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
// @lc code=end
// your test code here

/*
// @lcpr case=start
// "A man, a plan, a canal: Panama"\n
// @lcpr case=end

// @lcpr case=start
// "race a car"\n
// @lcpr case=end

// @lcpr case=start
// " "\n
// @lcpr case=end

 */
