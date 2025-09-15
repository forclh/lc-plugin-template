/*
 * @lc app=leetcode.cn id=20 lang=javascript
 * @lcpr version=30203
 *
 * [20] 有效的括号
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 栈
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack = [];
  for (let item of s) {
    if (map[item]) {
      // 如果是右括号匹配就出栈
      // 不匹配则字符串无效
      if (stack.length > 0 && stack[stack.length - 1] === map[item]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      // 如果是左括号就入栈
      stack.push(item);
    }
  }

  return stack.length === 0;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "()"\n
// @lcpr case=end

// @lcpr case=start
// "()[]{}"\n
// @lcpr case=end

// @lcpr case=start
// "(]"\n
// @lcpr case=end

// @lcpr case=start
// "([])"\n
// @lcpr case=end

// @lcpr case=start
// "([)]"\n
// @lcpr case=end

 */
