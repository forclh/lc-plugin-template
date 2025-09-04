/*
 * @lc app=leetcode.cn id=967 lang=javascript
 * @lcpr version=30202
 *
 * [967] 连续差相同的数字
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 回溯算法
 * 元素不重复可复选
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
let numsSameConsecDiff = function (n, k) {
  let result = [];
  let track = [];
  // 回溯算法核心函数
  function backtrack(depth) {
    if (depth === n) {
      result.push(Number(track.join("")));
      return;
    }
    //  回溯算法标准框架
    for (let i = 0; i <= 9; i++) {
      // 剪枝逻辑:
      // 第一个数字不能是 0
      if (depth === 0 && i === 0) continue;
      // 相邻两个数字的差的绝对值必须等于 k
      if (depth !== 0 && Math.abs(i - track[track.length - 1]) !== k) continue;

      track.push(i);
      backtrack(depth + 1);
      track.pop(i);
    }
  }
  backtrack(0);
  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 3\n7\n
// @lcpr case=end

// @lcpr case=start
// 2\n1\n
// @lcpr case=end

// @lcpr case=start
// 2\n0\n
// @lcpr case=end

// @lcpr case=start
// 2\n2\n
// @lcpr case=end

 */
