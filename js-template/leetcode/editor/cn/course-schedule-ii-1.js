/*
 * @lc app=leetcode.cn id=210 lang=javascript
 * @lcpr version=30203
 *
 * [210] 课程表 II
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 拓扑排序(DFS)
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
let findOrder = function (numCourses, prerequisites) {
  // 记录拓扑排序结果
  let postOrder = [];
  // 构建有向图
  let graph = buildGraph(numCourses, prerequisites);

  let hasCycle = false;
  const visited = new Array(numCourses).fill(false);
  const onPath = new Array(numCourses).fill(false);

  for (let i = 0; i < numCourses; i++) {
    // 遍历图
    traverse(i);
  }

  // 存在环，拓扑排序不存在
  if (hasCycle) {
    return [];
  }
  // 逆后序遍历结果即为拓扑排序结果
  return postOrder.reverse();

  function traverse(s) {
    if (onPath[s]) {
      hasCycle = true;
    }

    if (visited[s] || hasCycle) return;

    // 前序遍历位置
    visited[s] = true;
    onPath[s] = true;
    for (const neighbor of graph[s]) {
      traverse(neighbor);
    }
    // 后序遍历位置
    postOrder.push(s);
    onPath[s] = false;
  }
};

let buildGraph = function (numCourses, prerequisites) {
  // 节点:课程
  // 边:课程的依赖关系,先修课程->课程
  let graph = Array.from({ length: numCourses }, () => []); // 邻接表
  for (let [to, from] of prerequisites) {
    graph[from].push(to);
  }
  return graph;
};
// @lc code=end

// your test code here
findOrder(2, [
  [0, 1],
  [1, 0],
]);
/*
// @lcpr case=start
// 2\n[[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// 4\n[[1,0],[2,0],[3,1],[3,2]]\n
// @lcpr case=end

// @lcpr case=start
// 1\n[]\n
// @lcpr case=end

 */
