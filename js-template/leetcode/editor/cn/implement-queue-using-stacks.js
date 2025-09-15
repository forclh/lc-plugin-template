/*
 * @lc app=leetcode.cn id=232 lang=javascript
 * @lcpr version=30203
 *
 * [232] 用栈实现队列
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
// peek 和 pop 操作最坏时间复杂度是 O(N)，均摊时间复杂度是 O(1)，
class MyQueue {
  constructor() {
    this.s1 = []; // 队头
    this.s2 = []; // 队尾
  }

  /**
   * 入队
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.s2.push(x);
  }

  /**
   * 出队
   * @return {number}
   */
  pop() {
    // 先调用 peek 保证 s1 非空
    this.peek();
    return this.s1.pop();
  }

  /**
   * 查看队顶元素并返回
   * @return {number}
   */
  peek() {
    if (this.s1.length === 0) {
      while (this.s2.length !== 0) {
        this.s1.push(this.s2.pop());
      }
    }
    return this.s1[this.s1.length - 1];
  }

  /**判断队列是否为空
   * @return {boolean}
   */
  empty() {
    return this.s1.length === 0 && this.s2.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

// your test code here

/*
// @lcpr case=start
// ["MyQueue", "push", "push", "peek", "pop", "empty"]\n[[], [1], [2], [], [], []]\n
// @lcpr case=end

 */
