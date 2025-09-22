/*
 * @lc app=leetcode.cn id=933 lang=javascript
 * @lcpr version=30203
 *
 * [933] 最近的请求次数
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
// v1 队列
class RecentCounter {
  constructor() {
    this.queue = [];
  }
  /**
   * @param {number} t
   * @return {number}
   */
  ping(t) {
    this.queue.push(t);
    while (this.queue[0] < t - 3000) {
      // t 是递增的，所以可以从队头删除 3000 毫秒之前的请求
      this.queue.shift();
    }
    return this.queue.length;
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

// your test code here

/*
// @lcpr case=start
// ["RecentCounter", "ping", "ping", "ping", "ping"]\n[[], [1], [100], [3001], [3002]]\n
// @lcpr case=end

 */
