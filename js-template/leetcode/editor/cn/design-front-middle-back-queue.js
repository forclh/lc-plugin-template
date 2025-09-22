/*
 * @lc app=leetcode.cn id=1670 lang=javascript
 * @lcpr version=30203
 *
 * [1670] 设计前中后队列
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start

class FrontMiddleBackQueue {
  constructor() {
    // 用两个列表表示队列的左右两部分，以便从中间操作元素
    // 如果是奇数个元素时，维护左边比右边少一个
    this.left = [];
    this.right = [];
  }
  /**
   * 维护列表left少，right多，每次增删元素后都需要进行调用
   */
  balance() {
    if (this.right.length > this.left.length + 1) {
      // 右边多，匀一个给左边
      this.left.push(this.right.shift());
    }

    if (this.left.length > this.right.length) {
      // 左边多，匀一个给右边
      this.right.unshift(this.left.pop());
    }
  }
  /**
   * 返回队列的长度
   */
  size() {
    return this.left.length + this.right.length;
  }
  /**
   * 添加到队列的最前面
   * @param {number} val
   * @return {void}
   */
  pushFront(val) {
    this.left.unshift(val);
    this.balance();
  }

  /**
   * 添加到队列的中间
   * @param {number} val
   * @return {void}
   */
  pushMiddle(val) {
    if (this.size() % 2 === 0) {
      // 如果有偶数个元素时，pushMiddle 优先向右边添加
      this.right.unshift(val);
    } else {
      this.left.push(val);
    }
    this.balance();
  }

  /**
   * 添加到队列的尾部
   * @param {number} val
   * @return {void}
   */
  pushBack(val) {
    this.right.push(val);
    this.balance();
  }

  /**
   * 删除队列的头部
   * @return {number}
   */
  popFront() {
    // 队列为空
    if (this.size() === 0) {
      return -1;
    }
    // 如果只有 1 个元素，popFront 的时候，要去右边删除
    if (this.size() === 1) {
      return this.right.shift();
    }
    let toDelete = this.left.shift();
    this.balance();
    return toDelete;
  }

  /**
   * 删除队列的中部
   * @return {number}
   */
  popMiddle() {
    // 队列为空
    if (this.size() === 0) {
      return -1;
    }
    let toDelete;
    if (this.size() % 2 === 0) {
      // 偶数
      toDelete = this.left.pop();
    } else {
      // 如果有奇数个元素时，popMiddle 优先从右边删除
      toDelete = this.right.shift();
    }
    this.balance();
    return toDelete;
  }

  /**
   * 删除队列的尾部
   * @return {number}
   */
  popBack() {
    // 队列为空
    if (this.size() === 0) {
      return -1;
    }
    let toDelete = this.right.pop();
    this.balance();
    return toDelete;
  }
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
// @lc code=end

// your test code here
let q = new FrontMiddleBackQueue();
q.pushFront(1); // [1]
q.pushBack(2); // [1, 2]
q.pushMiddle(3); // [1, 3, 2]
q.pushMiddle(4); // [1, 4, 3, 2]
q.popFront(); // 返回 1 -> [4, 3, 2]
q.popMiddle(); // 返回 3 -> [4, 2]
q.popMiddle(); // 返回 4 -> [2]
q.popBack(); // 返回 2 -> []
q.popFront(); // 返回 -1 -> [] （队列为空）
/*
// @lcpr case=start
// ["FrontMiddleBackQueue", "pushFront", "pushBack", "pushMiddle", "pushMiddle", "popFront", "popMiddle", "popMiddle",\n"popBack", "popFront"]\n[[], [1], [2], [3], [4], [], [], [], [], []]\n
// @lcpr case=end

 */
