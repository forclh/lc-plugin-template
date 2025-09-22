/*
 * @lc app=leetcode.cn id=739 lang=javascript
 * @lcpr version=30203
 *
 * [739] 每日温度
 */

import { startTransition } from "react";
import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 单调栈
 * @param {number[]} temperatures
 * @return {number[]}
 */
let dailyTemperatures = function (temperatures) {
  let n = temperatures.length;
  let res = new Array(n).fill(0);
  let stack = []; // 这里放下一个最大元素的索引，而不是元素
  // 单调栈模板
  for (let i = n - 1; i >= 0; i--) {
    let temp = temperatures[i];
    while (
      stack.length !== 0 &&
      temp >= temperatures[stack[stack.length - 1]]
    ) {
      stack.pop();
    }
    // 得到索引间距
    res[i] = stack.length === 0 ? 0 : stack[stack.length - 1] - i;
    stack.push(i); // 将索引入栈，而不是元素
  }

  return res;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [73,74,75,71,69,72,76,73]\n
// @lcpr case=end

// @lcpr case=start
// [30,40,50,60]\n
// @lcpr case=end

// @lcpr case=start
// [30,60,90]\n
// @lcpr case=end

 */
