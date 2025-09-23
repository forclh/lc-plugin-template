/*
 * @lc app=leetcode.cn id=901 lang=javascript
 * @lcpr version=30203
 *
 * [901] 股票价格跨度
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
// v2 单调栈
class StockSpanner {
  constructor() {
    // 记录 {价格，小于等于该价格的天数} 二元组
    this.stack = [];
  }
  /**
   * @param {number} price
   * @return {number}
   */
  next(price) {
    let count = 1; // 算上当天
    while (
      this.stack.length !== 0 &&
      price >= this.stack[this.stack.length - 1][0]
    ) {
      // 挤掉价格低于 price 的记录
      let prev = this.stack.pop();
      // 计算小于等于 price 的天数
      count += prev[1];
    }
    this.stack.push([price, count]);
    return count;
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end

// your test code here

let ss = new StockSpanner();
let result = [];
for (let price of [31, 41, 48, 59, 79]) {
  result.push(ss.next(price)); // [1,2,3,4,5]
}

/*
// @lcpr case=start
// ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]\n[[], [100], [80], [60], [70], [60], [75], [85]]\n
// @lcpr case=end

 */
