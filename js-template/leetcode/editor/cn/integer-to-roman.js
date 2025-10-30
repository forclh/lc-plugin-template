/*
 * @lc app=leetcode.cn id=12 lang=javascript
 * @lcpr version=30300
 *
 * [12] 整数转罗马数字
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 模拟
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
  const valueSymbols = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let res = "";
  for (const [value, symbol] of valueSymbols) {
    while (num >= value) {
      res += symbol;
      num -= value;
    }

    if (num === 0) break;
  }
  return res;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 3749\n
// @lcpr case=end

// @lcpr case=start
// 58\n
// @lcpr case=end

// @lcpr case=start
// 1994\n
// @lcpr case=end

 */
