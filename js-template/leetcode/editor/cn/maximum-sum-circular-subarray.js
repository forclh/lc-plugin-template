/*
 * @lc app=leetcode.cn id=918 lang=javascript
 * @lcpr version=30203
 *
 * [918] 环形子数组的最大和
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 前缀和 + 单调队列 + 环形数组
 * @param {number[]} nums
 * @return {number}
 */
let maxSubarraySumCircular = function (nums) {
  let n = nums.length; // 队列的长度

  // 模拟环状的 nums 数组
  let preNums = new Array(2 * n + 1).fill(0);
  // 计算环状 nums 的前缀和
  for (let i = 1; i < preNums.length; i++) {
    preNums[i] = preNums[i - 1] + nums[(i - 1) % n];
  }
  // 记录答案
  let result = -Infinity;
  // 维护一个滑动窗口，以便根据窗口中的最小值计算最大子数组和
  let window = new MonotonicQueue();
  window.push(0);
  for (let i = 1; i < preNums.length; i++) {
    result = Math.max(result, preNums[i] - window.min());
    // 维护窗口的大小为 nums 数组的大小
    while (window.size() === n) {
      window.pop();
    }
    window.push(preNums[i]);
  }
  return result;
};

// 单调栈
class MonotonicQueue {
  constructor() {
    this.q = [];
    this.minQ = [];
  }
  push(value) {
    this.q.push(value);
    while (this.minQ.length !== 0 && value < this.minQ[this.minQ.length - 1]) {
      this.minQ.pop();
    }
    this.minQ.push(value);
  }
  pop() {
    let toDelete = this.q.shift();
    if (toDelete === this.min()) {
      this.minQ.shift();
    }
  }
  min() {
    return this.minQ[0];
  }
  size() {
    return this.q.length;
  }
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,-2,3,-2]\n
// @lcpr case=end

// @lcpr case=start
// [5,-3,5]\n
// @lcpr case=end

// @lcpr case=start
// [3,-2,2,-3]\n
// @lcpr case=end

 */
