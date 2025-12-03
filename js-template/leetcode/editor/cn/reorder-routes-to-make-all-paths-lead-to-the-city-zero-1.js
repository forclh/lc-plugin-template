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
 * v1 BFS
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
const minReorder = function (n, connections) {
  // 使用邻接表构建图
  // 由于是有向图，为了能遍历整棵树，我们将其视为无向图存储
  const graph = Array.from({ length: n }, () => []);
  for (const [from, to] of connections) {
    // 标记边的方向：1表示原始边，0表示新增的反向边
    graph[from].push([to, 1]);
    graph[to].push([from, 0]);
  }

  const visited = new Array(n).fill(false);
  let ans = 0;

  // BFS 队列，从节点 0 开始向外扩散
  const queue = [0];
  visited[0] = true;

  while (queue.length > 0) {
    const cur = queue.shift();
    // 遍历所有相邻节点（无论方向）
    for (const [next, type] of graph[cur]) {
      if (visited[next]) continue;

      visited[next] = true;
      // 如果 type === 1，说明原边方向是 cur -> next（背离 0 号节点）
      // 为了让所有节点都能到达 0，我们需要将这条边翻转为 next -> cur
      if (type === 1) ans++;

      // 继续将下一层节点加入队列
      queue.push(next);
    }
  }
  return ans;
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
