/*
 * @lc app=leetcode.cn id=380 lang=javascript
 * @lcpr version=30300
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start

class RandomizedSet {
  constructor() {
    this.valToIndex = new Map(); // 存放value到index的映射
    this.arr = []; // 存放value
  }
  /**
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (this.valToIndex.has(val)) {
      return false;
    }
    this.valToIndex.set(val, this.arr.length);
    this.arr.push(val);
    return true;
  }
  /**
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    if (!this.valToIndex.has(val)) {
      return false;
    }
    // 先拿到 val 的索引
    const curIndex = this.valToIndex.get(val);
    const lastElement = this.arr[this.arr.length - 1];
    // 将最后一个元素对应的索引修改为 curIndex
    this.valToIndex.set(lastElement, curIndex);
    // 交换 val 和最后一个元素
    this.arr[curIndex] = lastElement;
    // 在数组中删除元素 val
    this.arr.pop();
    // 删除元素 val 对应的索引
    this.valToIndex.delete(val);
    return true;
  }
  /**
   * @return {number}
   */
  getRandom() {
    const index = Math.floor(Math.random() * this.arr.length);
    return this.arr[index];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

// your test code here
const rs = new RandomizedSet();

rs.insert(1);
rs.remove(2);
rs.insert(2);
rs.getRandom();
rs.remove(1);
rs.getRandom();
