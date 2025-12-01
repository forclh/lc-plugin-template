/*
 * @lc app=leetcode.cn id=1129 lang=javascript
 * @lcpr version=30304
 *
 * [1129] 颜色交替的最短路径
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 BFS
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
const shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  const graph = buildGraph(n, redEdges, blueEdges);
  // 记录从节点0到节点i的最短路径，初始为-1表示无法到达
  const answer = new Array(n).fill(-1);

  // 在交替路径中，同一个节点可能需要被访问两次（分别通过红边和蓝边到达）
  // visited[node][color] 表示是否通过color颜色的边到达过node。
  // 0:red 1:blue
  const visited = Array.from({ length: n }, () => [false, false]);
  visited[0][0] = true;
  visited[0][1] = true;

  // [节点， 最短距离，上一条边的颜色(-1表示起始节点)]
  const queue = [[0, 0, -1]];

  while (queue.length > 0) {
    const [cur, dis, lastColor] = queue.shift();

    // 第一次出队更新距离
    if (answer[cur] === -1) {
      answer[cur] = dis;
    }

    for (const [next, colorType] of graph[cur]) {
      // 只有当当前边的颜色与上一条边的颜色不同，且该状态未被访问过时才处理
      if (lastColor !== colorType && !visited[next][colorType]) {
        visited[next][colorType] = true;
        queue.push([next, dis + 1, colorType]);
      }
    }
  }
  return answer;
};

function buildGraph(n, redEdges, blueEdges) {
  // from,to,1/0 : 0标识red 1表示blue
  const graph = Array.from({ length: n }, () => []);
  for (const [from, to] of redEdges) {
    graph[from].push([to, 0]);
  }
  for (const [from, to] of blueEdges) {
    graph[from].push([to, 1]);
  }
  return graph;
}
// @lc code=end

// your test code here
console.log(
  shortestAlternatingPaths(
    5,
    [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ],
    [
      [1, 2],
      [2, 3],
      [3, 1],
    ]
  )
);
/*
// @lcpr case=start
// 3\n[[0,1],[1,2]]\n[]\n
// @lcpr case=end

// @lcpr case=start
// 3\n[[0,1]]\n[[2,1]]\n
// @lcpr case=end

 */
