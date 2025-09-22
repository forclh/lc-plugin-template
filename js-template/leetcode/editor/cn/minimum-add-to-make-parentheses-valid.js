/*
 * @lc app=leetcode.cn id=921 lang=javascript
 * @lcpr version=30203
 *
 * [921] 使括号有效的最少添加
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 括号类问题
 * @param {string} s
 * @return {number}
 */
let minAddToMakeValid = function (s) {
  let res = 0; // 记录左括号插入的次数
  let need = 0; // 右括号的需求数

  for (let item of s) {
    if (item === "(") {
      //  对右括号的需求 + 1
      need++;
    } else {
      // 对右括号的需求 - 1
      need--;
      if (need === -1) {
        // 右括号太多
        res += 1; // 插入左括号
        need = 0;
      }
    }
  }

  return res + need;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "())"\n
// @lcpr case=end

// @lcpr case=start
// "((("\n
// @lcpr case=end

 */
