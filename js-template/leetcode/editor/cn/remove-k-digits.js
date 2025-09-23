/*
 * @lc app=leetcode.cn id=402 lang=javascript
 * @lcpr version=30203
 *
 * [402] 移掉 K 位数字
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 单调栈
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
let removeKdigits = function (num, k) {
  let stack = [];
  // 单调栈代码模板
  for (let s of num) {
    // 上一个更小或相等的元素
    while (stack.length !== 0 && s < stack[stack.length - 1] && k > 0) {
      stack.pop();
      k--;
    }
    //  防止 0 作为数字的开头
    if (stack.length === 0 && s === "0") {
      continue;
    }
    stack.push(s);
  }
  // 此时栈中元素单调递增，若 k 还没用完的话删掉栈顶元素
  while (k > 0 && stack.length > 0) {
    stack.pop();
    k--;
  }
  // 若最后没剩下数字，就是 0
  if (stack.length === 0) {
    return "0";
  }
  // 将栈转化为字符串
  let str = "";
  while (stack.length > 0) {
    str = stack.pop() + str;
  }
  return str;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "1432219"\n3\n
// @lcpr case=end

// @lcpr case=start
// "10200"\n1\n
// @lcpr case=end

// @lcpr case=start
// "10"\n2\n
// @lcpr case=end

 */
