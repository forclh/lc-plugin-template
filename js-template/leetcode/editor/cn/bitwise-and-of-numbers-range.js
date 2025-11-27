/*
 * @lc app=leetcode.cn id=201 lang=javascript
 * @lcpr version=30304
 *
 * [201] 数字范围按位与
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 位运算
 *
 * 区间内所有数字的按位与结果，
 * 等于这些数字的 “公共前缀”（二进制高位相同部分），后面补 0
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const rangeBitwiseAnd = function (left, right) {
  let shift = 0; // 移动的位数
  // 寻找公共前缀直到（left === right）
  while (left < right) {
    left >>= 1;
    right >>= 1;
    shift++;
  }
  return left << shift; // 补0
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 5\n7\n
// @lcpr case=end

// @lcpr case=start
// 0\n0\n
// @lcpr case=end

// @lcpr case=start
// 1\n2147483647\n
// @lcpr case=end

 */
