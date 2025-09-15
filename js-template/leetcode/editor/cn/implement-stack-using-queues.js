/*
 * @lc app=leetcode.cn id=225 lang=javascript
 * @lcpr version=30203
 *
 * [225] 用队列实现栈
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
// v1 队列实现栈
class MyStack {
  constructor() {
    this.q = []; // 底层队列
    this.topElement = 0; // 记录栈顶元素
  }

  /**
   * 入栈
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.q.push(x);
    this.topElement = x;
  }

  /**
   * 出栈
   * @return {number}
   */
  pop() {
    let n = this.q.length;
    // 将队头重新入队，并保留最后两个元素
    while (n > 2) {
      this.q.push(this.q.shift());
      n--;
    }
    // 更新栈顶元素
    this.topElement = this.q[0];
    this.q.push(this.q.shift());
    // 出栈
    return this.q.shift();
  }

  /**
   * 返回栈顶元素
   * @return {number}
   */
  top() {
    return this.topElement;
  }

  /**
   * 判断栈是否为空
   * @return {boolean}
   */
  empty() {
    return this.q.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

// your test code here
let stack = new MyStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
stack.pop();
stack.empty();
/*
// @lcpr case=start
// ["MyStack", "push", "push", "top", "pop", "empty"]\n[[], [1], [2], [], [], []]\n
// @lcpr case=end

 */
