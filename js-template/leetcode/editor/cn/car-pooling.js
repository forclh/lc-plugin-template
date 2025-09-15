/*
 * @lc app=leetcode.cn id=1094 lang=javascript
 * @lcpr version=30203
 *
 * [1094] 拼车
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 差分数组
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
let carPooling = function (trips, capacity) {
  // 根据 0 <= fromi < toi <= 1000 知最多有 1001 个车站
  let df = new Difference(new Array(1001).fill(0));
  for (let [value, left, right] of trips) {
    // !注意 right - 1，因为到 right 的时候乘客下车了
    // !所以乘客再车上的时候为[left, right- 1]
    df.increment(left, right - 1, value);
  }
  // 不能超载，最大人数小于等于空座位
  return Math.max(...df.result()) <= capacity;
};

// 差分工具类
class Difference {
  constructor(nums) {
    let diff = new Array(nums.length);
    diff[0] = nums[0];
    for (let i = 1; i < diff.length; i++) {
      diff[i] = nums[i] = nums[i - 1];
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
// [[2,1,5],[3,3,7]]\n4\n
// @lcpr case=end

// @lcpr case=start
// [[2,1,5],[3,3,7]]\n5\n
// @lcpr case=end

 */
