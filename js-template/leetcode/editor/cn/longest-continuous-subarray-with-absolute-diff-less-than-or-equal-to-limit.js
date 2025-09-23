/*
 * @lc app=leetcode.cn id=1438 lang=javascript
 * @lcpr version=30203
 *
 * [1438] 绝对差不超过限制的最长连续子数组
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 滑动窗口 + 单调队列
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
let longestSubarray = function (nums, limit) {
  let window = new MonotonicQueue(); // 单调队列
  let left = 0;
  let right = 0; // 左闭右开
  let maxLen = 0;
  while (right < nums.length) {
    window.push(nums[right]);
    right++;
    // 单调队列的最大值和最小值之差大于 limit 时缩小窗口
    while (window.max() - window.min() > limit) {
      window.pop(nums[left]);
      left++;
    }
    // 在窗口收缩判断完之后才更新答案
    maxLen = Math.max(maxLen, right - left);
  }

  return maxLen;
};

// 单调队列
class MonotonicQueue {
  constructor() {
    this.maxQ = [];
    this.minQ = [];
  }

  push(value) {
    while (this.maxQ.length !== 0 && value > this.maxQ[this.maxQ.length - 1]) {
      this.maxQ.pop();
    }
    this.maxQ.push(value);
    while (this.minQ.length !== 0 && value < this.minQ[this.minQ.length - 1]) {
      this.minQ.pop();
    }
    this.minQ.push(value);
  }
  pop(value) {
    if (value === this.max()) {
      this.maxQ.shift();
    }
    if (value === this.min()) {
      this.minQ.shift();
    }
  }
  max() {
    return this.maxQ[0];
  }
  min() {
    return this.minQ[0];
  }
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [8,2,4,7]\n4\n
// @lcpr case=end

// @lcpr case=start
// [10,1,2,4,7,2]\n5\n
// @lcpr case=end

// @lcpr case=start
// [4,2,2,2,4,4,2,2]\n0\n
// @lcpr case=end

 */
