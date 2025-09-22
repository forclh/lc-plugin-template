/*
 * @lc app=leetcode.cn id=622 lang=javascript
 * @lcpr version=30203
 *
 * [622] 设计循环队列
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} k
 */
// v1 使用环形数组技巧实现循环队列
class MyCircularQueue {
  constructor(k) {
    this.data = new Array(k);
    this.start = 0;
    this.end = 0; // 左闭右开[start,...,end)表示数组区域
    this.size = 0;
  }

  /**
   * 入队
   * @param {number} value
   * @return {boolean}
   */
  enQueue(value) {
    if (this.isFull()) {
      return false;
    }
    this.data[this.end] = value;
    this.end = (this.end + 1) % this.data.length;
    this.size++;
    return true;
  }

  /**
   * 出队
   * @return {boolean}
   */
  deQueue() {
    if (this.isEmpty()) {
      return false;
    }
    this.data[this.start] = null;
    this.start = (this.start + 1) % this.data.length;
    this.size--;
    return true;
  }

  /**
   * @return {number}
   */
  Front() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.data[this.start];
  }

  /**
   * @return {number}
   */
  Rear() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.data[(this.end - 1 + this.data.length) % this.data.length];
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * @return {boolean}
   */
  isFull() {
    return this.size === this.data.length;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end

// your test code here
