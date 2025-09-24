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
 * v1 拓扑排序(BFS)
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
let findOrder = function (numCourses, prerequisites) {
  // 记录拓扑排序结果
  let path = [];
  // 构建有向图
  let graph = buildGraph(numCourses, prerequisites);
  // 记录所有节点的入度
  let inDegree = new Array(numCourses).fill(0);
  for (let [to, from] of prerequisites) {
    inDegree[to]++;
  }

  // 初始化:将所有入度为零(无依赖)节点入队
  let queue = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  // 记录遍历过的节点数量
  let count = 0;
  // BFS算法模板
  while (queue.length !== 0) {
    let sz = queue.length;
    for (let i = 0; i < sz; i++) {
      let cur = queue.shift(); // 节点出队
      path.push(cur);
      count++;
      // 更新邻居节点的入度
      for (let next of graph[cur]) {
        inDegree[next]--;
        // 当节点入度为零(无依赖)就入队
        if (inDegree[next] === 0) {
          queue.push(next);
        }
      }
    }
  }
  // 存在环，拓扑排序不存在
  if (count !== numCourses) {
    return [];
  }
  return path;
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
