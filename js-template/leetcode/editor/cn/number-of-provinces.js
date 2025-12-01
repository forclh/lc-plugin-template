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
 * v1 DFS
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const visited = new Array(n).fill(false);
  let result = 0;

  // 遍历每一个省份
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(isConnected, i);
      result++;
    }
  }

  return result;

  function dfs(graph, i) {
    if (visited[i]) return;
    visited[i] = true;
    // 遍历邻居节点
    for (let j = 0; j < graph[i].length; j++) {
      if (graph[i][j] === 1 && i !== j) {
        dfs(graph, j);
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
