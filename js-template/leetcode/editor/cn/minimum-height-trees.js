/*
 * @lc app=leetcode.cn id=310 lang=javascript
 * @lcpr version=30300
 *
 * [310] 最小高度树
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 BFS
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
let findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0];
  // 1、构建邻接表
  const graph = Array.from({ length: n }, () => []);
  for (const [from, to] of edges) {
    // 无向图就是双向图
    graph[from].push(to);
    graph[to].push(from);
  }

  // 2、找出所有度为1的节点就是叶子节点
  const q = [];
  for (let i = 0; i < graph.length; i++) {
    if (graph[i].length === 1) {
      q.push(i);
    }
  }

  let nodeCount = n; // 节点个数
  // 3、不断删除叶子节点，直到剩下的节点数小于等于 2 个
  while (nodeCount > 2) {
    let sz = q.length;
    nodeCount -= sz;
    for (let i = 0; i < sz; i++) {
      const cur = q.shift(); // 删除叶子节点
      // 将与改叶子节点相连的节点的边删除
      for (const neighbor of graph[cur]) {
        graph[neighbor] = graph[neighbor].filter((item) => item !== cur);
        // 如果删除后，相连节点的度为 1，说明它也变成了叶子节点
        if (graph[neighbor].length === 1) {
          q.push(neighbor);
        }
      }
    }
  }
  // 4、最后剩下的就是最小高度数的根节点，一个或两个
  return q;
};
// @lc code=end

// your test code here
findMinHeightTrees(4, [
  [1, 0],
  [1, 2],
  [1, 3],
]);
/*
// @lcpr case=start
// 4\n[[1,0],[1,2],[1,3]]\n
// @lcpr case=end

// @lcpr case=start
// 6\n[[3,0],[3,1],[3,2],[3,4],[5,4]]\n
// @lcpr case=end

 */
