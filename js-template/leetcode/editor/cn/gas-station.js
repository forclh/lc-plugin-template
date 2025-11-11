/*
 * @lc app=leetcode.cn id=134 lang=javascript
 * @lcpr version=30300
 *
 * [134] 加油站
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 贪心算法
 * 时间复杂度为 O(N)
 *
 * 如果选择站点 i 作为起点「恰好」无法走到站点 j，
 * 那么 i 和 j 中间的任意站点 k 都不可能作为起点。
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = function (gas, cost) {
  const n = gas.length;

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += gas[i] - cost[i];
  }
  // 总油量小于总的消耗，无解
  if (sum < 0) {
    return -1;
  }
  // 记录油箱中的油量
  let tank = 0;
  // 记录起点
  let start = 0;
  for (let i = 0; i < n; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      // 无法从 start 到达 i + 1
      // 所以下一个可能的起点应该是 i + 1
      start = i + 1;
      tank = 0;
    }
  }

  return start;
};

// @lc code=end

// your test code here
canCompleteCircuit([2, 3, 4], [3, 4, 3]);
/*
// @lcpr case=start
// [1,2,3,4,5]\n[3,4,5,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [2,3,4]\n[3,4,3]\n
// @lcpr case=end

 */
