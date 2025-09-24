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
 * v1 二分图判断问题 BFS
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

  // 从 v 节点开始进行 BFS 遍历
  function bfs(v) {
    let queue = [v];
    visited[v] = true;
    while (queue.length !== 0 && ok) {
      let cur = queue.shift();

      // 从节点 cur 向所有相邻节点扩散
      for (let next of graph[cur]) {
        // 没遍历过的领居
        if (!visited[next]) {
          // 那么应该给节点 next 涂上和节点 v 不同的颜色
          colors[next] = !colors[cur];

          // 标记 w 节点，并放入队列
          visited[next] = true;
          queue.push(next);
        } else {
          // 已经遍历过的邻居,根据颜色判断是否是二分图
          if (colors[next] === colors[cur]) {
            ok = false;
            return;
          }
        }
      }
    }
  }

  // 因为图不一定是联通的,可能存在多个子图
  // 所以要把每个节点都作为起点进行一次遍历
  // 如果发现任何一个子图不是二分图，整幅图都不算二分图
  for (let i = 0; i < graph.length; i++) {
    if (!visited[i]) {
      bfs(i);
    }
  }
  return ok;
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
