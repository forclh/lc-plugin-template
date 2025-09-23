/*
 * @lc app=leetcode.cn id=1944 lang=javascript
 * @lcpr version=30203
 *
 * [1944] 队列中可以看到的人数
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 单调栈
 * @param {number[]} heights
 * @return {number[]}
 */
let canSeePersonsCount = function (heights) {
  let stack = [];
  let res = [];
  // 单调栈：和下一个最大元素之间的元素个数
  for (let i = heights.length - 1; i >= 0; i--) {
    // 记录右侧比自己矮的人
    let count = 0;
    // 单调栈模板，计算下一个更大或相等元素
    while (stack.length !== 0 && heights[i] > stack[stack.length - 1]) {
      stack.pop();
      count++;
    }
    res[i] = stack.length === 0 ? count : count + 1;
    stack.push(heights[i]);
  }
  return res;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [10,6,8,5,11,9]\n
// @lcpr case=end

// @lcpr case=start
// [5,1,2,3,10]\n
// @lcpr case=end

 */
