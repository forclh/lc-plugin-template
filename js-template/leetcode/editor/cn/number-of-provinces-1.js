/*
 * @lc app=leetcode.cn id=547 lang=javascript
 * @lcpr version=30304
 *
 * [547] 省份数量
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 BFS
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const visited = new Array(n).fill(0);
  let result = 0;
  // 遍历每一个城市
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(isConnected, i); // 遍历相连的省份
      result++;
    }
  }

  return result;

  function bfs(graph, i) {
    const queue = [i];
    visited[i] = true;
    while (queue.length > 0) {
      const cur = queue.shift();
      for (let j = 0; j < graph[cur].length; j++) {
        if (graph[cur][j] === 1 && !visited[j]) {
          visited[j] = true;
          queue.push(j);
        }
      }
    }
  }
};
// @lc code=end

// your test code here
findCircleNum([
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);
/*
// @lcpr case=start
// [[1,1,0],[1,1,0],[0,0,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,0,0],[0,1,0],[0,0,1]]\n
// @lcpr case=end

 */
