/*
 * @lc app=leetcode.cn id=886 lang=javascript
 * @lcpr version=30203
 *
 * [886] 可能的二分法
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 二分图判断 BFS
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
let possibleBipartition = function (n, dislikes) {
  // 构建无向图
  let graph = buildGraph(n, dislikes);
  // 是否可以分组成功
  let ok = true;
  // 记录访问过的节点
  let visited = new Array(n).fill(false);
  // 记录节点的颜色
  let colors = new Array(n).fill(false);

  function bfs(v) {
    let queue = [v];
    visited[v] = true;
    while (queue.length !== 0 && ok) {
      let cur = queue.shift();
      for (let next of graph[cur]) {
        // 邻居节点为访问时,染上不同颜色
        if (!visited[next]) {
          colors[next] = !colors[cur];
          queue.push(next);
          visited[next] = true;
        } else {
          // 领居节点已经反问时,判断颜色是否相同
          if (colors[next] === colors[cur]) {
            ok = false;
            return;
          }
        }
      }
    }
  }

  // 可能存在多个子图,所有要遍历所有的节点
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(i);
    }
  }

  return ok;
};

// 构建无向图
let buildGraph = function (n, dislikes) {
  let graph = Array.from({ length: n }, () => []);
  for (let [v1, v2] of dislikes) {
    // 将图节点编号转换为 0 - n-1
    graph[v1 - 1].push(v2 - 1);
    graph[v2 - 1].push(v1 - 1);
  }
  return graph;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 4\n[[1,2],[1,3],[2,4]]\n
// @lcpr case=end

// @lcpr case=start
// 3\n[[1,2],[1,3],[2,3]]\n
// @lcpr case=end

// @lcpr case=start
// 5\n[[1,2],[2,3],[3,4],[4,5],[1,5]]\n
// @lcpr case=end

 */
