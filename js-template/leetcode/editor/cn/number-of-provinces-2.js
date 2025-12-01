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
 * v1 并查集
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const uf = new UF(n);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 如果两个城市是相连的，那么它们属于同一个连通分量
      if (isConnected[i][j] === 1) {
        uf.union(i, j);
      }
    }
  }

  return uf.size; // 返回联通分量的数量
};

class UF {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, index) => index);
    this.size = n;
  }

  union(i, j) {
    const rootI = this.find(i);
    const rootJ = this.find(j);
    if (rootI === rootJ) return;
    this.parent[rootI] = rootJ;
    // 两个连通分量合并成一个连通分量
    this.size--;
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
}
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
