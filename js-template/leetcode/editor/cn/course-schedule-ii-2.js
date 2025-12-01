/*
 * @lc app=leetcode.cn id=210 lang=javascript
 * @lcpr version=30203
 *
 * [210] 课程表 II
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 拓扑排序(三色标记法DFS)
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
let findOrder = function (numCourses, prerequisites) {
  // 记录拓扑排序结果
  let ans = [];
  // 构建有向图
  let graph = buildGraph(numCourses, prerequisites);
  // 记录节点状态
  // 0: 未访问
  // 1: 访问中/递归栈中 - 发现环
  // 2: 已完成/安全
  const visited = new Array(numCourses).fill(0);

  for (let i = 0; i < numCourses; i++) {
    // 对每个节点进行 DFS，如果 dfs 返回 false，说明图中存在环，无法完成拓扑排序
    if (!dfs(graph, i)) {
      return [];
    }
  }
  // 将后序遍历结果反转，得到正确的拓扑排序（依赖在前，后续在后）
  return ans.reverse();

  /**
   * DFS 遍历函数：进行环检测并生成拓扑序列
   * @param {number[][]} graph 邻接表
   * @param {number} i 当前访问的节点
   * @return {boolean} 如果图中无环（即当前路径安全），返回 true；如果发现环，返回 false
   */
  function dfs(graph, i) {
    // 状态 1：当前节点正在当前递归栈中，再次访问说明遇到了环
    if (visited[i] === 1) return false;
    // 状态 2：当前节点及其所有后代都已访问完毕且无环，直接返回 true（剪枝）
    if (visited[i] === 2) return true;

    // 标记为 1 (访问中/灰色)
    visited[i] = 1;

    for (const next of graph[i]) {
      // 递归访问邻居，如果邻居返回 false（发现环），则逐层向上返回 false
      if (!dfs(graph, next)) {
        return false;
      }
    }

    // 所有邻居都访问完毕且无环，标记为 2 (已完成/黑色)
    visited[i] = 2;
    // 后序遍历位置：将节点加入结果集
    // 注意：此时加入的是“最深”的依赖（最后修的课），所以最终结果需要 reverse
    ans.push(i);
    return true;
  }
};

let buildGraph = function (numCourses, prerequisites) {
  // 节点:课程
  // 边:课程的依赖关系,先修课程->课程
  let graph = Array.from({ length: numCourses }, () => []); // 邻接表
  for (let [to, from] of prerequisites) {
    graph[from].push(to);
  }
  return graph;
};
// @lc code=end

// your test code here
findOrder(2, [
  [0, 1],
  [1, 0],
]);
/*
// @lcpr case=start
// 2\n[[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// 4\n[[1,0],[2,0],[3,1],[3,2]]\n
// @lcpr case=end

// @lcpr case=start
// 1\n[]\n
// @lcpr case=end

 */
