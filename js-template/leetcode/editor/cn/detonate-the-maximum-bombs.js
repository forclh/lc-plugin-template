/*
 * @lc app=leetcode.cn id=2101 lang=javascript
 * @lcpr version=30300
 *
 * [2101] 引爆最多的炸弹
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 BFS
 * @param {number[][]} bombs
 * @return {number}
 */
const maximumDetonation = function (bombs) {
  const n = bombs.length;
  const graph = Array.from({ length: n }, () => []);
  // 构建有向无权图
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const [xi, yi, ri] = bombs[i];
      const [xj, yj, rj] = bombs[j];
      if ((xi - xj) ** 2 + (yi - yj) ** 2 <= ri ** 2) {
        graph[i].push(j);
      }
    }
  }

  let maxCount = 0;
  // 计算从任意炸弹节点开始，能够遍历的最大节点数
  for (let i = 0; i < bombs.length; i++) {
    maxCount = Math.max(maxCount, bfs(graph, i));
  }
  return maxCount;
};

const bfs = (graph, i) => {
  const visited = new Array(graph.length);
  let q = [i];
  visited[i] = true;
  let nodeCount = 0;

  while (q.length > 0) {
    const curNode = q.shift();
    nodeCount++;

    for (let next of graph[curNode]) {
      if (!visited[next]) {
        visited[next] = true;
        q.push(next);
      }
    }
  }
  return nodeCount;
};
// @lc code=end

// your test code here
maximumDetonation([
  [2, 1, 3],
  [6, 1, 4],
]);
/*
// @lcpr case=start
// [[2,1,3],[6,1,4]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1,5],[10,10,5]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3],[2,3,1],[3,4,2],[4,5,3],[5,6,4]]\n
// @lcpr case=end

 */
