/*
 * @lc app=leetcode.cn id=1584 lang=javascript
 * @lcpr version=30203
 *
 * [1584] 连接所有点的最小费用
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * 连接所有点的最小费用问题 - 最小生成树（Minimum Spanning Tree, MST）
 *
 * 1. 问题分析：
 *    - 给定平面上的n个点，需要用线段连接所有点
 *    - 线段的费用是两点间的曼哈顿距离
 *    - 要求所有点连通，且总费用最小
 *    - 本质是带权无向图的最小生成树问题
 *
 * 2. 解题思路：使用 Kruskal 算法
 *    a) 将所有可能的边生成并排序
 *    b) 使用并查集检测环，贪心选择最小费用的边
 *    c) 构建最小生成树直到所有点连通
 *
 * 3. 算法步骤：
 *    a) 生成所有可能的边及其权重（费用）
 *    b) 按照费用从小到大排序所有边
 *    c) 使用并查集，依次添加不会形成环的最小费用边
 *
 * @param {number[][]} points 坐标点数组，每个点是[x,y]格式
 * @return {number} 连接所有点的最小总费用
 */
let minCostConnectPoints = function (points) {
  let n = points.length;

  // 步骤1：生成所有可能的边及其费用
  let costs = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let p1 = points[i];
      let p2 = points[j];
      // 计算曼哈顿距离作为边的权重
      let cost = Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
      // 用点的索引代替坐标
      costs.push([i, j, cost]);
    }
  }

  // 步骤2：按照费用升序排序（贪心策略）
  costs.sort((a, b) => a[2] - b[2]);

  // 步骤3：执行Kruskal算法构建最小生成树
  let mst = 0; // 最小生成树的总费用
  let uf = new UF(n); // 初始化并查集
  for (let [from, to, cost] of costs) {
    // 如果连接这条边会形成环，跳过
    if (uf.connected(from, to)) {
      continue;
    }
    // 若这条边不会产生环，则属于最小生成树
    mst += cost;
    uf.union(from, to);
  }

  return mst;
};

class UF {
  constructor(n) {
    // 连通分量的个数，初始时每个元素自成一个连通分量
    this._count = n;
    // 存储每个节点的父节点，初始时指向自己
    this.parent = Array.from({ length: n }, (_, index) => index);
  }

  union(p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);
    if (rootP === rootQ) {
      return;
    }

    // 将p所在的树连接到q所在的树
    this.parent[rootP] = rootQ;
    // 两个连通分量合并成一个连通分量
    this._count--;
  }

  connected(p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);
    return rootP === rootQ;
  }

  find(p) {
    if (this.parent[p] !== p) {
      // 路径压缩：将沿路的所有节点都直接指向根节点
      this.parent[p] = this.find(this.parent[p]);
    }
    return this.parent[p];
  }

  count() {
    return this._count;
  }
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[0,0],[2,2],[3,10],[5,2],[7,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[3,12],[-2,5],[-4,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,0],[1,1],[1,0],[-1,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[-1000000,-1000000],[1000000,1000000]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,0]]\n
// @lcpr case=end

 */
