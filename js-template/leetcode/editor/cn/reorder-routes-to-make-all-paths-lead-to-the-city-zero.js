/*
 * @lc app=leetcode.cn id=1466 lang=javascript
 * @lcpr version=30304
 *
 * [1466] 重新规划路线
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 DFS
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
const minReorder = function (n, connections) {
  const graph = Array.from({ length: n }, () => []);
  for (const [from, to] of connections) {
    // 构建无向图，并标记原始边1和反向边0
    graph[from].push([to, 1]);
    graph[to].push([from, 0]);
  }

  const visited = new Array(n).fill(false);

  let ans = 0;
  // 从0号节点出发遍历
  dfs(graph, 0);
  return ans;

  function dfs(graph, x) {
    visited[x] = true;
    for (const [next, type] of graph[x]) {
      if (!visited[next]) {
        if (type === 1) ans++;
        dfs(graph, next);
      }
    }
  }
};
// @lc code=end

// your test code here
console.log(
  minReorder(6, [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ])
); // Expect: 3
console.log(
  minReorder(5, [
    [1, 0],
    [1, 2],
    [3, 2],
    [3, 4],
  ])
); // Expect: 2
console.log(
  minReorder(3, [
    [1, 0],
    [2, 0],
  ])
); // Expect: 0

/*
// @lcpr case=start
// 6\n[[0,1],[1,3],[2,3],[4,0],[4,5]]\n
// @lcpr case=end

// @lcpr case=start
// 5\n[[1,0],[1,2],[3,2],[3,4]]\n
// @lcpr case=end

// @lcpr case=start
// 3\n[[1,0],[2,0]]\n
// @lcpr case=end

 */
