/*
 * @lc app=leetcode.cn id=862 lang=javascript
 * @lcpr version=30203
 *
 * [862] 和至少为 K 的最短子数组
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 滑动窗口 + 单调队列
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let shortestSubarray = function (nums, k) {
  // 构造前缀和数组
  let preNums = new Array(nums.length + 1).fill(0);
  for (let i = 1; i < preNums.length; i++) {
    preNums[i] = preNums[i - 1] + nums[i - 1];
  }

  // 单调队列结构辅助滑动窗口算法
  let window = new MonotonicQueue();

  let left = 0;
  let right = 0;
  let minLen = Infinity;

  // 开始执行滑动窗口算法框架
  while (right < preNums.length) {
    // 扩大窗口，元素入队
    window.push(preNums[right]);
    right++;

    // 若新进入窗口的元素和窗口中的最小值之差大于等于 k，
    // 说明得到了符合条件的子数组，缩小窗口，使子数组长度尽可能小
    while (
      right < preNums.length &&
      !window.isEmpty() &&
      preNums[right] - window.min() >= k
    ) {
      minLen = Math.min(minLen, right - left);
      // 缩小窗口
      window.pop();
      left++;
    }
  }
  return minLen === Infinity ? -1 : minLen;
};

// 单调队列实现
class MonotonicQueue {
  constructor() {
    this.q = []; // 常规队列
    this.minQ = []; // 元素降序升序的单调队列，头部是最小值
  }
  // 入队
  push(value) {
    this.q.push(value);
    // 维护 minQ 将大于 value 的元素全部删除
    while (this.minQ.length !== 0 && value < this.minQ[this.minQ.length - 1]) {
      this.minQ.pop();
    }
    this.minQ.push(value);
  }
  // 出队
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    let toDelete = this.q.shift();
    // 由于 push 的时候会删除元素， toDelete 可能已经被删掉了
    if (toDelete === this.minQ[0]) {
      this.minQ.shift();
    }
    return toDelete;
  }

  // 队列最小值
  min() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.minQ[0]; // minQ 的头部是最小元素
  }

  isEmpty() {
    return this.q.length === 0;
  }
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n4\n
// @lcpr case=end

// @lcpr case=start
// [2,-1,2]\n3\n
// @lcpr case=end

 */
