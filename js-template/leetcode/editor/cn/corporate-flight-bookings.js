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
  // 创建差分数组
  const diff = new Array(n).fill(0);

  // 进行区间计算
  for (const [from, to, value] of bookings) {
    diff[from - 1] += value;
    diff[to] -= value;
  }

  // 还原数组
  const answer = new Array(n).fill(0);
  answer[0] = diff[0];
  for (let i = 1; i < n; i++) {
    answer[i] = diff[i] + answer[i - 1];
  }
  return answer;
};

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
