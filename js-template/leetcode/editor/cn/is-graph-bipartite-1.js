/*
 * @lc app=leetcode.cn id=785 lang=javascript
 * @lcpr version=30203
 *
 * [785] 判断二分图
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 二分图判断问题 DFS
 * @param {number[][]} graph
 * @return {boolean}
 */
let isBipartite = function (graph) {
  // 记录图是否符合二分图性质
  let ok = true;
  // 记录访问过的节点,防止环
  let visited = new Array(graph.length).fill(false);
  // 记录每个节点的颜色: false 和 true 代表两种颜色
  let colors = new Array(graph.length).fill(false);

  // 因为图不一定是联通的，可能存在多个子图
  // 所以要把每个节点都作为起点进行一次遍历
  // 如果发现任何一个子图不是二分图，整幅图都不算二分图
  for (let i = 0; i < graph.length; i++) {
    if (!visited[i]) {
      traverse(i);
    }
  }

  return ok;

  function traverse(s) {
    // 如果已经确定不是二分图了，就不用浪费时间再递归遍历了
    if (!ok) return;

    visited[s] = true;

    for (const next of graph[s]) {
      if (!visited[next]) {
        // 相邻节点 w 没有被访问过
        // 那么应该给节点 w 涂上和节点 v 不同的颜色
        colors[next] = !colors[s];
        traverse(next);
      } else {
        // 相邻节点 w 已经被访问过
        // 根据 v 和 w 的颜色判断是否是二分图
        if (colors[s] === colors[next]) {
          // 若相同，则此图不是二分图
          ok = false;
          return;
        }
      }
    }
  }
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[1,2,3],[0,2],[0,1,3],[0,2]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,3],[0,2],[1,3],[0,2]]\n
// @lcpr case=end

 */
