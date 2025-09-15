/*
 * @lc app=leetcode.cn id=392 lang=javascript
 * @lcpr version=30203
 *
 * [392] 判断子序列
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 双指针
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isSubsequence = function (s, t) {
  let p1 = 0;
  let p2 = 0;
  while (p1 < s.length && p2 < t.length) {
    if (t[p2] === s[p1]) {
      p1++;
    }
    p2++;
  }
  return p1 === s.length;
};
// @lc code=end

// your test code here
isSubsequence("abc", "ahbgdc");
/*
// @lcpr case=start
// "abc"\n"ahbgdc"\n
// @lcpr case=end

// @lcpr case=start
// "axc"\n"ahbgdc"\n
// @lcpr case=end

 */
