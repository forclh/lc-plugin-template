/*
 * @lc app=leetcode.cn id=1475 lang=javascript
 * @lcpr version=30203
 *
 * [1475] 商品折扣后的最终价格
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 单调栈
 * @param {number[]} prices
 * @return {number[]}
 */
let finalPrices = function (prices) {
  let stack = [];
  let res = [];
  // 单调栈：下一个最小或相等元素
  for (let i = prices.length - 1; i >= 0; i--) {
    while (stack.length !== 0 && prices[i] < stack[stack.length - 1]) {
      stack.pop();
    }
    res[i] =
      stack.length === 0 ? prices[i] : prices[i] - stack[stack.length - 1];
    stack.push(prices[i]);
  }
  return res;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [8,4,6,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [10,1,1,6]\n
// @lcpr case=end

 */
