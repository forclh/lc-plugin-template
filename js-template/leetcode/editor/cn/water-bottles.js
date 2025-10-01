/*
 * @lc app=leetcode.cn id=1518 lang=javascript
 * @lcpr version=30203
 *
 * [1518] 换水问题
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 数学
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
let numWaterBottles = function (numBottles, numExchange) {
  // 总共可以喝的水 = 初始水 + 通过空瓶换得的水
  // 每 numExchange 个空瓶换 1 瓶水，相当于每 (numExchange-1) 个空瓶增加 1 瓶水
  // 但最后一次换水时，numExchange-1 个空瓶就不够了，所以使用 numBottles - 1
  return numBottles + Math.floor((numBottles - 1) / (numExchange - 1));
};
// @lc code=end

// your test code here
numWaterBottles(15, 3);
/*
// @lcpr case=start
// 9\n3\n
// @lcpr case=end

// @lcpr case=start
// 15\n4\n
// @lcpr case=end

 */
