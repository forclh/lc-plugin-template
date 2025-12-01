/*
 * @lc app=leetcode.cn id=207 lang=javascript
 * @lcpr version=30203
 *
 * [207] 课程表
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 环检测（DFS 三色标记法）
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
let canFinish = function (numCourses, prerequisites) {
  const graph = buildGraph(numCourses, prerequisites);
  // 0: 未访问 (White)
  // 1: 访问中/递归栈中 (Gray) - 发现环
  // 2: 已完成/安全 (Black)
  const visited = new Array(numCourses).fill(0);

  for (let i = 0; i < numCourses; i++) {
    // 如果有环，直接返回 false
    if (!dfs(graph, i, visited)) {
      return false;
    }
  }
  return true;
};

function dfs(graph, i, visited) {
  // 如果当前节点正在访问中（灰色），说明遇到了环
  if (visited[i] === 1) return false;
  // 如果当前节点已经完成访问（黑色），说明是安全的，无需再访
  if (visited[i] === 2) return true;

  // 标记为正在访问（灰色）
  visited[i] = 1;

  for (const next of graph[i]) {
    if (!dfs(graph, next, visited)) {
      return false;
    }
  }

  // 标记为已完成（黑色）
  visited[i] = 2;
  return true;
}

// 创建有向图
let buildGraph = function (numCourses, prerequisites) {
  // 节点:课程
  // 边:课程的依赖关系,先修课程 -> 课程
  let graph = Array.from({ length: numCourses }, () => []); // 邻接表
  for (let [to, from] of prerequisites) {
    graph[from].push(to);
  }
  return graph;
};
// @lc code=end

// your test code here
canFinish(2, [
  [1, 0],
  [0, 1],
]);
/*
// @lcpr case=start
// 2\n[[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// 2\n[[1,0],[0,1]]\n
// @lcpr case=end

 */
