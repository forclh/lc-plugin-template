/*
 * @lc app=leetcode.cn id=1557 lang=javascript
 * @lcpr version=30304
 *
 * [1557] 可以到达所有点的最少点数目
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 图论（出入度）
 *
 * 算法思想：所有入度为 0 的节点必须作为起点；其余节点因为入度 > 0，
 * 至少有一个前驱可达，因此不必作为起点。选取全部入度为 0 的节点即可到达所有点，且集合最小。
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findSmallestSetOfVertices = function (n, edges) {
  const inDegree = new Array(n).fill(0); // inDegree[i] 表示编号 i 的节点的入度
  for (const [from, to] of edges) {
    // 统计每个节点的入度（from 未使用，只需累加 to 的入度）
    inDegree[to]++;
  }
  const ans = []; // 收集所有入度为 0 的节点作为最少起点集合
  for (let i = 0; i < n; i++) {
    // 遍历所有节点，挑选入度为 0 的
    if (inDegree[i] === 0) {
      ans.push(i);
    }
  }
  return ans; // 返回可以到达所有点的最少点集合
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 6\n[[0,1],[0,2],[2,5],[3,4],[4,2]]\n
// @lcpr case=end

// @lcpr case=start
// 5\n[[0,1],[2,1],[3,1],[1,4],[2,4]]\n
// @lcpr case=end

 */
