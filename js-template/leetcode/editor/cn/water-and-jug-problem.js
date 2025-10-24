/*
 * @lc app=leetcode.cn id=365 lang=javascript
 * @lcpr version=30300
 *
 * [365] 水壶问题
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 BFS
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
const canMeasureWater = function (x, y, target) {
  const visited = new Set();
  const q = [[0, 0]];
  visited.add(0 * (y + 1) + 0);

  while (q.length > 0) {
    const [jug1, jug2] = q.shift();

    if (jug1 === target || jug2 === target || jug1 + jug2 === target) {
      return true;
    }

    // 列出所有可能的下一步状态
    let nextStates = [];
    // jug1 灌满
    nextStates.push([x, jug2]);
    // jug2 灌满
    nextStates.push([jug1, y]);
    // jug1 倒空
    nextStates.push([0, jug2]);
    // jug2 倒空
    nextStates.push([jug1, 0]);
    // jug1 倒入 jug2
    nextStates.push([
      jug1 + jug2 - Math.min(jug1 + jug2, y),
      Math.min(jug1 + jug2, y),
    ]);
    // jug2 倒入 jug1
    nextStates.push([
      Math.min(jug1 + jug2, x),
      jug1 + jug2 - Math.min(jug1 + jug2, x),
    ]);

    for (let nextState of nextStates) {
      const hash = nextState[0] * (y + 1) + nextState[1];
      if (visited.has(hash)) continue;
      q.push(nextState);
      visited.add(hash);
    }
  }
  return false;
};
// @lc code=end

// your test code here
canMeasureWater(3, 5, 4);
/*
// @lcpr case=start
// 3\n5\n4\n
// @lcpr case=end

// @lcpr case=start
// 2\n6\n5\n
// @lcpr case=end

// @lcpr case=start
// 1\n2\n3\n
// @lcpr case=end

 */
