/*
 * @lc app=leetcode.cn id=895 lang=javascript
 * @lcpr version=30203
 *
 * [895] 最大频率栈
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
// v1 栈
class FreqStack {
  constructor() {
    this.maxFreq = 0; // 记录最大频率
    this.freqToValStack = new Map(); // 记录频率对应的元素栈
    this.valToFreq = new Map(); // 记录每个元素对应的频率
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    let freq = (this.valToFreq.get(val) || 0) + 1; // 新频率
    this.valToFreq.set(val, freq); // 更新元素对应的频率

    this.maxFreq = Math.max(this.maxFreq, freq); // 更新最大频率

    // 更新频率对应的元素
    if (!this.freqToValStack.has(freq)) {
      this.freqToValStack.set(freq, []);
    }
    this.freqToValStack.get(freq).push(val);
  }

  /**
   * @return {number}
   */
  pop() {
    // 更新 FV 表
    let stack = this.freqToValStack.get(this.maxFreq);
    let value = stack.pop(); // 弹出最大频率元素
    // 更新最大频率
    if (stack.length === 0) this.maxFreq--;
    // 更新 VF 表
    this.valToFreq.set(value, this.valToFreq.get(value) - 1); // 更新元素对应的频率
    return value; // 返回最大频率元素
  }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
// @lc code=end

// your test code here

/*
// @lcpr case=start
// ["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"],\n[[],[5],[7],[5],[7],[4],[5],[],[],[],[]]\n
// @lcpr case=end

 */
