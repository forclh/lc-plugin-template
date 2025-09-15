/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 * @lcpr version=30203
 *
 * [1109] 航班预订统计
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 差分数组
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
let corpFlightBookings = function (bookings, n) {
  let diff = new Difference(new Array(n).fill(0));
  for (let [left, right, value] of bookings) {
    // 题目索引从 1 开始，这里要减去  1
    diff.increment(left - 1, right - 1, value);
  }
  return diff.result();
};

class Difference {
  constructor(nums) {
    let diff = new Array(nums.length); // 差分数组
    // 构造差分数组
    diff[0] = nums[0];
    for (let i = 1; i < diff.length; i++) {
      diff[i] = nums[i] - nums[i - 1];
    }
    this.diff = diff;
  }

  increment(left, right, value) {
    this.diff[left] += value;
    if (right + 1 < this.diff.length) {
      this.diff[right + 1] -= value;
    }
  }

  result() {
    // 重新构造原数组
    let res = new Array(this.diff.length);
    res[0] = this.diff[0];
    for (let i = 1; i < res.length; i++) {
      res[i] = res[i - 1] + this.diff[i];
    }
    return res;
  }
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[1,2,10],[2,3,20],[2,5,25]]\n5\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,10],[2,2,15]]\n2\n
// @lcpr case=end

 */
