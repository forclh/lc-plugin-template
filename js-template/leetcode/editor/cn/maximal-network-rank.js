/*
 * @lc app=leetcode.cn id=1615 lang=javascript
 * @lcpr version=30304
 *
 * [1615] 最大网络秩
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 枚举（出入度）
 *
 * 复杂度：时间 O(n^2 + |E|)，空间 O(n + |E|)。
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const maximalNetworkRank = function (n, roads) {
  const connected = Array.from({ length: n }, () => new Set()); // 邻接集合：connected[i] 存与 i 直连的城市
  const degrees = new Array(n).fill(0); // 度数组：degrees[i] 为 i 的连接数
  for (const [from, to] of roads) {
    // 无向边：两端度各加一，并记录互为直连
    degrees[from]++;
    degrees[to]++;
    connected[from].add(to);
    connected[to].add(from);
  }

  let maxRank = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // 若 i 与 j 直连，合计度需减 1，避免重复计数这条边
      const rank = degrees[i] + degrees[j] - (connected[i].has(j) ? 1 : 0);
      maxRank = Math.max(maxRank, rank);
    }
  }
  return maxRank;
};
// @lc code=end

// your test code here
maximalNetworkRank(4, [
  [0, 1],
  [0, 3],
  [1, 2],
  [1, 3],
]);
/*
// @lcpr case=start
// 4\n[[0,1],[0,3],[1,2],[1,3]]\n
// @lcpr case=end

// @lcpr case=start
// 5\n[[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]\n
// @lcpr case=end

// @lcpr case=start
// 8\n[[0,1],[1,2],[2,3],[2,4],[5,6],[5,7]]\n
// @lcpr case=end

 */
