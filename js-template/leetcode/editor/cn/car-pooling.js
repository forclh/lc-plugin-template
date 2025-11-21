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
  // 构建差分数组
  const diff = new Array(1001).fill(0);

  // 区间运算
  for (const [value, from, to] of trips) {
    diff[from] += value;
    diff[to] -= value;
  }

  // 还原数组
  const answer = new Array(1001);
  answer[0] = diff[0];
  for (let i = 1; i < answer.length; i++) {
    answer[i] = answer[i - 1] + diff[i];
  }

  return Math.max(...answer) <= capacity;
};

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
