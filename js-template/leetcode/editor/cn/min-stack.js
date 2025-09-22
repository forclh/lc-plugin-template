/*
 * @lc app=leetcode.cn id=155 lang=javascript
 * @lcpr version=30203
 *
 * [155] 最小栈
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
// v1.1 栈
// 动态集合中维护最值的问题
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = []; // 存放阶段性最小值
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
    this.stack.push(val);
  }

  /**
   * @return {void}
   */
  pop() {
    if (
      this.stack[this.stack.length - 1] ===
      this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.pop();
    }
    this.stack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

// your test code here

/*
// @lcpr case=start
// ["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]\n
// @lcpr case=end

 */
