/*
 * @lc app=leetcode.cn id=641 lang=javascript
 * @lcpr version=30203
 *
 * [641] 设计循环双端队列
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} k
 */
// v1 使用环形数组技巧实现循环双端队列
class MyCircularDeque {
  constructor(k) {
    this.data = new Array(k);
    this.start = 0;
    this.end = 0; // 左闭右开[start,...,end)表示数组区域
    this.size = 0;
  }

  /**
   * @param {number} value
   * @return {boolean}
   */
  insertFront(value) {
    if (this.isFull()) {
      return false;
    }
    // 左闭右开：插入头前先移动位置
    this.start = (this.start - 1 + this.data.length) % this.data.length;
    this.data[this.start] = value;
    this.size++;
    return true;
  }

  /**
   * @param {number} value
   * @return {boolean}
   */
  insertLast(value) {
    if (this.isFull()) {
      return false;
    }
    // 左闭右开：可以直接插入尾
    this.data[this.end] = value;
    this.end = (this.end + 1) % this.data.length;
    this.size++;
    return true;
  }

  /**
   * @return {boolean}
   */
  deleteFront() {
    if (this.isEmpty()) {
      return false;
    }
    // 左闭右开：可以直接删除头
    this.data[this.start] = null;
    this.start = (this.start + 1) % this.data.length;
    this.size--;
    return true;
  }

  /**
   * @return {boolean}
   */
  deleteLast() {
    if (this.isEmpty()) {
      return false;
    }
    // 左闭右开：删除尾先移动位置
    this.end = (this.end - 1 + this.data.length) % this.data.length;
    this.data[this.end] = null;
    this.size--;
    return true;
  }

  /**
   * @return {number}
   */
  getFront() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.data[this.start];
  }

  /**
   * @return {number}
   */
  getRear() {
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
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end

// your test code here
