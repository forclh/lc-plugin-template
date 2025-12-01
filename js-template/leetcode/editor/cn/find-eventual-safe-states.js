/*
 * @lc app=leetcode.cn id=802 lang=javascript
 * @lcpr version=30304
 *
 * [802] 找到最终的安全状态
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 DFS(三色标记法)
 * @param {number[][]} graph
 * @return {number[]}
 */
const eventualSafeNodes = function (graph) {
  // 如果起始节点位于一个环内，或者能到达一个环，则该节点不是安全的

  const n = graph.length;
  // 0: 未访问, 1: 访问中 (正在当前递归路径上), 2: 安全
  const colors = new Array(n).fill(0);

  const ans = [];
  for (let i = 0; i < n; i++) {
    if (dfs(i)) {
      ans.push(i);
    }
  }

  return ans;

  function dfs(i) {
    if (colors[i] > 0) {
      // 1 (灰色) -> false
      // 2 (黑色) -> true
      return colors[i] == 2;
    }

    colors[i] = 1; // 标记为访问中
    for (const next of graph[i]) {
      if (!dfs(next)) {
        return false;
      }
    }
    // 所有邻居都安全，标记为安全
    colors[i] = 2;
    return true;
  }
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[1,2],[2,3],[5],[0],[5],[],[]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3,4],[1,2],[3,4],[0,4],[]]\n
// @lcpr case=end

 */
