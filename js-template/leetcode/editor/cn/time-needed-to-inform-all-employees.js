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
 * v1 DFS
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
const numOfMinutes = function (n, headID, manager, informTime) {
  let maxTime = 0;
  // 使用领接表优化下属的查找过程
  const graph = new Array(n).fill(0).map(() => []);
  for (let i = 0; i < manager.length; i++) {
    if (manager[i] !== -1) {
      graph[manager[i]].push(i);
    }
  }
  dfs(headID, 0);

  return maxTime;
  function dfs(id, currentTime) {
    // 如果是叶子节点（没有下属），更新最大时间
    if (graph[id].length === 0) {
      maxTime = Math.max(maxTime, currentTime);
      return;
    }
    // 前序位置
    currentTime += informTime[id];
    // 查找下属
    for (const next of graph[id]) {
      dfs(next, currentTime);
    }
    // 后序位置
    // 值传递不需要手动回溯
    // currentTime -= informTime[id]
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
