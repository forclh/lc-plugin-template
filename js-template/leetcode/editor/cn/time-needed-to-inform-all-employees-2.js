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
 * v1 二叉树分解问题思想
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

  return maxTime(headID);

  // 给定一个多叉树的根节点，返回完成通知所有子节点需要的时间
  function maxTime(root) {
    // 叶子节点员工
    if (graph[root].length === 0) {
      return 0;
    }
    let time = 0;
    for (let next of graph[root]) {
      time = Math.max(time, maxTime(next));
    }
    return informTime[root] + time;
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
