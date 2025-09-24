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
 * v1 环检测（BFS）
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
let canFinish = function (numCourses, prerequisites) {
  // 创建有向图
  let graph = buildGraph(numCourses, prerequisites);

  // 记录所有节点的入度(依赖关系)
  let inDegree = new Array(numCourses).fill(0);
  for (let [to, from] of prerequisites) {
    inDegree[to]++;
  }

  let queue = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      // 节点 i 没有入度，即没有依赖的节点
      // 可以作为拓扑排序的起点，加入队列
      queue.push(i);
    }
  }
  // 记录遍历的节点数量
  let count = 0;
  // 开始执行 BFS 循环
  while (queue.length !== 0) {
    let sz = queue.length;
    for (let i = 0; i < sz; i++) {
      // 弹出节点 cur,并将它指向的节点入度 -1
      let cur = queue.shift();
      count++;
      for (let next of graph[cur]) {
        inDegree[next]--;
        if (inDegree[next] === 0) {
          // 如果入度变为 0，说明 next 依赖的节点都已被遍历,可以入队
          queue.push(next);
        }
      }
    }
  }
  // 如果所有节点都被遍历过,说明不成环
  return count === numCourses;
};

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

/*
// @lcpr case=start
// 2\n[[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// 2\n[[1,0],[0,1]]\n
// @lcpr case=end

 */
