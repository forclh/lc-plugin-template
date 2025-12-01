/*
 * @lc app=leetcode.cn id=1376 lang=javascript
 * @lcpr version=30304
 *
 * [1376] 通知所有员工所需的时间
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 BFS
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
const numOfMinutes = function (n, headID, manager, informTime) {
  // 构建邻接表
  const graph = new Array(n).fill(0).map(() => []);
  for (let i = 0; i < manager.length; i++) {
    if (manager[i] !== -1) {
      graph[manager[i]].push(i);
    }
  }
  let maxTime = 0;
  bfs(headID);
  return maxTime;

  function bfs(id) {
    // 存放该员工id和通知到达他的时间
    const queue = [[id, 0]];
    while (queue.length > 0) {
      const [cur, time] = queue.shift();
      if (time > maxTime) maxTime = time;
      for (const next of graph[cur]) {
        queue.push([next, time + informTime[cur]]);
      }
    }
  }
};
// @lc code=end

// your test code here
numOfMinutes(6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0]);
/*
// @lcpr case=start
// 1\n0\n[-1]\n[0]\n
// @lcpr case=end

// @lcpr case=start
// 6\n2\n[2,2,-1,2,2,2]\n[0,0,1,0,0,0]\n
// @lcpr case=end

 */
