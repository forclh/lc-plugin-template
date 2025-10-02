/*
 * @lc app=leetcode.cn id=3100 lang=javascript
 * @lcpr version=30203
 *
 * [3100] 换水问题 II
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 模拟
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
let maxBottlesDrunk = function (numBottles, numExchange) {
  let totalDrunk = numBottles;
  let emptyBottles = numBottles;
  while (emptyBottles >= numExchange) {
    totalDrunk += 1;
    emptyBottles = emptyBottles - numExchange + 1;
    numExchange += 1;
  }
  return totalDrunk;
};
// @lc code=end

// your test code here
maxBottlesDrunk(10, 3);
/*
// @lcpr case=start
// 13\n6\n
// @lcpr case=end

// @lcpr case=start
// 10\n3\n
// @lcpr case=end

 */
