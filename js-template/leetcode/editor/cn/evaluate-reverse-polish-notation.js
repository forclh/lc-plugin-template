/*
 * @lc app=leetcode.cn id=150 lang=javascript
 * @lcpr version=30203
 *
 * [150] 逆波兰表达式求值
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 栈
 * @param {string[]} tokens
 * @return {number}
 */
let evalRPN = function (tokens) {
  let stack = [];
  for (let item of tokens) {
    // 操作符
    if (["+", "-", "*", "/"].includes(item)) {
      let p2 = stack.pop();
      let p1 = stack.pop();
      switch (item) {
        case "+":
          stack.push(p1 + p2);
          break;
        case "-":
          stack.push(p1 - p2);
          break;
        case "*":
          stack.push(p1 * p2);
          break;
        case "/":
          stack.push(Math.trunc(p1 / p2)); // 截断小数点
          break;
      }
    } else {
      // 数字
      stack.push(+item); // 字符串转数字
    }
  }
  return stack.pop();
};
// @lc code=end
evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]);
// your test code here

/*
// @lcpr case=start
// ["2","1","+","3","*"]\n
// @lcpr case=end

// @lcpr case=start
// ["4","13","5","/","+"]\n
// @lcpr case=end

// @lcpr case=start
// ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]\n
// @lcpr case=end

 */
