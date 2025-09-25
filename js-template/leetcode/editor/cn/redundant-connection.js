/*
 * @lc app=leetcode.cn id=684 lang=javascript
 * @lcpr version=30203
 *
 * [684] 冗余连接
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * 解题思路：使用并查集检测无向图中的环
 * 
 * 1. 问题分析：
 *    - 输入是一个包含 n 条边的无向图，节点编号从 1 到 n
 *    - 这些边中有一条是"多余的"，导致图中形成了环
 *    - 如果有多个答案，返回在输入中最后出现的那条边
 * 
 * 2. 并查集解法：
 *    - 并查集用于动态维护图中节点的连通性
 *    - 对于每条边(u,v)，如果 u 和 v 已经连通，则这条边导致了环
 *    - 由于只添加了一条边，则要找的边，就是发现环的这条边
 * 
 * 3. 实现细节：
 *    - 由于节点编号从 1 开始，使用时需要转换为 0-based 索引

 * @param {number[][]} edges 输入的边数组，每个元素是一个长度为2的数组 [from, to]
 * @return {number[]} 返回导致环的最后一条边
 */
let findRedundantConnection = function (edges) {
  // 获取最大节点编号
  const n = edges.reduce((max, [from, to]) => Math.max(max, from, to), 0);

  // 初始化并查集
  const union = new UF(n);

  // 遍历每条边，检查是否形成环
  for (const [from, to] of edges) {
    // 由于节点编号从 1 开始所以这里要 - 1
    if (union.connected(from - 1, to - 1)) {
      return [from, to]; // 如果已连通，该边即为所求
    }
    union.union(from - 1, to - 1);
  }
};

// 并查集类
class UF {
  /**
   * 初始化并查集
   * @param {number} n 节点个数（0-based）
   */
  constructor(n) {
    // 连通分量个数，初始时每个节点都是一个独立的连通分量
    this._count = n;
    // 存储每个节点的父节点，初始时每个节点的父节点是自己
    this.parent = Array.from({ length: n }, (_, index) => index);
  }

  /**
   * 将节点 p 和节点 q 连通
   * @param {number} p 第一个节点
   * @param {number} q 第二个节点
   */
  union(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);

    if (rootP === rootQ) {
      return;
    }

    this.parent[rootQ] = rootP;
    // 两个连通分量合并成一个连通分量
    this._count--;
  }

  /**
   * 判断节点 p 和节点 q 是否连通
   * @param {*} p 第一个节点
   * @param {*} q 第二个节点
   * @returns {boolean} 是否连通
   */
  connected(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);
    return rootP === rootQ;
  }

  /**
   * 查找节点x的根节点
   * 使用路径压缩优化：在查找的同时，将路径上的所有节点都直接连接到根节点
   * @param {number} x 要查找的节点
   * @returns {number} 根节点的编号
   */
  find(x) {
    // 递归查找根节点，并在回溯时进行路径压缩
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  /**
   * 获取当前的连通分量数
   * 初始时为节点数，每次合并两个不同的连通分量时减1
   * @returns {number} 连通分量的个数
   */
  count() {
    return this._count;
  }
}
// @lc code=end

// your test code here
findRedundantConnection([
  [1, 2],
  [1, 3],
  [2, 3],
]);
/*
// @lcpr case=start
// [[1,2], [1,3], [2,3]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2], [2,3], [3,4], [1,4], [1,5]]\n
// @lcpr case=end

 */
