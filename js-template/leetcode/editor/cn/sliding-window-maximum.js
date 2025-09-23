/*
 * @lc app=leetcode.cn id=239 lang=javascript
 * @lcpr version=30203
 *
 * [239] 滑动窗口最大值
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 滑动窗口 + 单调队列
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
let maxSlidingWindow = function (nums, k) {
  let window = new MonotonicQueue();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i < k - 1) {
      window.push(nums[i]); // 填充前 k - 1 个元素
    } else {
      // 窗口向前滑动，加入新数字
      window.push(nums[i]);
      // 记录当前窗口的最大值
      result.push(window.max());
      // 移出旧数字
      window.pop(nums[i - k + 1]);
    }
  }
  return result;
};

// 单调队列实现
class MonotonicQueue {
  constructor() {
    this.q = []; // 常规队列：维护所有元素
    this.minQ = []; // 元素降序升序的单调队列，头部是最小值
    this.maxQ = []; // 元素降序降序的单调队列，头部是最大值
  }
  // 入队
  push(value) {
    // 维护常规队列，直接在队尾插入元素
    this.q.push(value);
    // 维护 minQ 将大于 value 的元素全部删除
    while (this.minQ.length !== 0 && value < this.minQ[this.minQ.length - 1]) {
      this.minQ.pop();
    }
    this.minQ.push(value);

    // 维护 maxQ 将小于 value 的元素全部删除
    while (this.maxQ.length !== 0 && value > this.maxQ[this.maxQ.length - 1]) {
      this.maxQ.pop();
    }

    this.maxQ.push(value);
  }
  // 出队
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    // 从标准队列头部弹出需要删除的元素
    let toDelete = this.q.shift();
    // 由于 push 的时候会删除元素， toDelete 可能已经被删掉了
    if (toDelete === this.minQ[0]) {
      this.minQ.shift();
    }
    if (toDelete === this.maxQ[0]) {
      this.maxQ.shift();
    }
    return toDelete;
  }
  // 队列最大值
  max() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.maxQ[0]; // maxQ 的头部是最大元素
  }
  // 队列最小值
  min() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.minQ[0]; // minQ 的头部是最小元素
  }
  size() {
    return this.q.length; // 标准队列的大小即是当前队列的大小
  }
  isEmpty() {
    return this.q.length === 0;
  }
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,3,-1,-3,5,3,6,7]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

 */
