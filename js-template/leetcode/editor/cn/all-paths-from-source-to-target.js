/*
 * @lc app=leetcode.cn id=797 lang=javascript
 * @lcpr version=30203
 *
 * [797] 所有可能的路径
 */

import { Lists } from "../common/lists.js";
import { Trees } from "../common/trees.js";

// @lc code=start
/**
 * v1 有向无环图的路径遍历
 * @param {number[][]} graph
 * @return {number[][]}
 */
let allPathsSourceTarget = function (graph) {
  // 记录所有路径
  let result = [];
  let path = [];

  // 图的遍历框架
  function traverse(graph, s) {
    if (s < 0 && s >= graph.length) {
      return;
    }

    // 前序位置：添加节点 s 到路径
    path.push(s);

    // 到达终点
    if (s === graph.length - 1) {
      result.push([...path]);
      path.pop(); // ! 移出路径
      return;
    }

    // 递归每个相邻节点
    for (let v of graph[s]) {
      traverse(graph, v);
    }
    // 后续位置：从路径移出节点 s
    path.pop();
  }
  traverse(graph, 0);
  return result;
};

// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[1,2],[3],[3],[]]\n
// @lcpr case=end

// @lcpr case=start
// [[4,3,1],[3,2,4],[3],[4],[]]\n
// @lcpr case=end

 */
