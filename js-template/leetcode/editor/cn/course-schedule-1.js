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
 * v1 环检测（DFS）
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
let canFinish = function (numCourses, prerequisites) {
  // 创建有向图
  let graph = buildGraph(numCourses, prerequisites);
  // 记录图中是否有环
  let hasCycle = false;
  // 记录当前遍历路径上的节点
  const onPath = new Array(numCourses).fill(false);
  // 记录节点是否被遍历过
  const visited = new Array(numCourses).fill(false);

  for (let i = 0; i < numCourses; i++) {
    // 遍历图中的所有节点
    traverse(i);
  }
  // 只要没有循环依赖可以完成所有课程
  return !hasCycle;

  function traverse(i) {
    // 如果已经找到了环，也不用再遍历了
    if (hasCycle) return;

    if (onPath[i]) {
      // s 已经在递归路径上，说明成环了
      hasCycle = true;
      return;
    }
    // 不用再重复遍历已遍历过的节点
    if (visited[i]) return;

    // 前序位置
    visited[i] = true;
    onPath[i] = true;
    for (const next of graph[i]) {
      traverse(next);
    }
    // 后续位置
    onPath[i] = false;
  }
};

// 创建有向图
let buildGraph = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  for (const [to, from] of prerequisites) {
    graph[from].push(to);
  }
  return graph;
};
// @lc code=end

// your test code here
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
);
/*
// @lcpr case=start
// 2\n[[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// 2\n[[1,0],[0,1]]\n
// @lcpr case=end

 */
