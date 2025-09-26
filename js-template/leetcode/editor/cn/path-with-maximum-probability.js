/*
 * @lc app=leetcode.cn id=1514 lang=javascript
 * @lcpr version=30203
 *
 * [1514] 概率最大的路径
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * 概率最大的路径（Dijkstra变形）
 *
 * 1. 问题分析：
 *    - 给定一个无向图，每条边有一个成功概率
 *    - 求从 start_node 到 end_node 的路径中，概率连乘积最大的那一条
 *    - 如果不可达返回0
 *    - 本质是最大概率路径问题（无负权重），可以用 Dijkstra 算法的思想
 *
 * 2. 算法思路：
 *    - 用邻接表建图，边权为概率
 *    - 用 Dijkstra 算法，每次扩展的是概率连乘的最大值
 *    - distTo[node] 表示从起点到 node 的最大概率
 *    - 优先队列按概率从大到小出队（大顶堆），保证第一次出队即为最优
 *
 * @param {number} n 节点数
 * @param {number[][]} edges 边数组
 * @param {number[]} succProb 每条边的概率
 * @param {number} start_node 起点
 * @param {number} end_node 终点
 * @return {number} 最大概率
 */
let maxProbability = function (n, edges, succProb, start_node, end_node) {
  let graph = buildGraph(n, edges, succProb);
  return dijkstra(graph, start_node, end_node);
};

// 构建无向有权图，边权为概率
let buildGraph = function (n, edges, succProb) {
  let graph = Array.from({ length: n }, () => []);
  for (let i = 0; i < edges.length; i++) {
    let [from, to] = edges[i];
    let prob = succProb[i];
    graph[from].push([to, prob]);
    graph[to].push([from, prob]);
  }
  return graph;
};
/**
 * Dijkstra 算法（最大概率路径变形）
 * @param {Array[]} graph 邻接表
 * @param {number} src 起点
 * @param {number} dst 终点
 * @return {number} 最大概率
 */
let dijkstra = function (graph, src, dst) {
  // distTo[i] 表示从src到i的最大概率，-1表示未知
  let distTo = new Array(graph.length).fill(-1);
  // 优先队列（大顶堆），按概率从大到小出队
  let pq = new PriorityQueue((a, b) => b[1] - a[1]);
  pq.enqueue([src, 1]); // 起点概率为1

  while (!pq.isEmpty()) {
    let [cur, probFromStart] = pq.dequeue();
    // 已有更优解，跳过
    if (distTo[cur] !== -1) continue;

    // 第一次出队即为最大概率
    distTo[cur] = probFromStart;
    if (cur === dst) return probFromStart;

    // 扩展所有邻居
    for (let [next, prob] of graph[cur]) {
      if (distTo[next] !== -1) continue;
      pq.enqueue([next, probFromStart * prob]);
    }
  }
  // 不可达
  return 0;
};
// 优先级队列
class PriorityQueue {
  constructor(comparator) {
    this.heap = [];
    this.size = 0;
    this.comparator = comparator || ((a, b) => a - b); // 默认整型小顶堆
  }
  // 返回堆的大小
  getSize() {
    return this.size;
  }
  // 判断堆是否为空
  isEmpty() {
    return this.size === 0;
  }
  // 左子节点的索引
  left(node) {
    return node * 2 + 1;
  }
  // 右子节点的索引
  right(node) {
    return node * 2 + 2;
  }
  // 父节点的索引
  parent(node) {
    return Math.floor((node - 1) / 2);
  }
  // 交换数组的两个元素
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  // 查，返回堆顶元素，时间复杂度 O(1)
  peek() {
    if (this.isEmpty()) {
      throw new Error("heap is empty");
    }
    return this.heap[0];
  }
  // 删，删除堆顶元素，时间复杂度 O(logN)
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("heap is empty");
    }
    let res = this.heap[0];
    // 把堆底元素放到堆顶
    this.swap(0, this.size - 1);
    // 避免对象游离
    this.heap[this.size - 1] = undefined;
    this.size--;
    // 然后下沉到正确位置
    this.sink(0);
    return res;
  }
  // 增，向堆中插入一个元素，时间复杂度 O(logN)
  enqueue(value) {
    // 把新元素追加到最后
    this.heap[this.size] = value; // this.heap.push(value);
    // 然后上浮到正确位置
    this.swim(this.size);
    this.size++;
  }
  // 下沉操作，时间复杂度是树高 O(logN)
  sink(node) {
    while (this.left(node) < this.size) {
      // 与左右子节点比较找到最小的
      let min = node;
      let left = this.left(node);
      let right = this.right(node);
      if (
        left < this.size &&
        this.comparator(this.heap[left], this.heap[min]) < 0
      ) {
        // 左子节点较小
        min = left;
      }

      if (
        right < this.size &&
        this.comparator(this.heap[right], this.heap[min]) < 0
      ) {
        // 右子节点较小
        min = right;
      }
      // 当前节点就是最小节点
      if (min === node) {
        break;
      }

      this.swap(node, min);
      node = min;
    }
  }
  // 上浮操作，时间复杂度是树高 O(logN)
  swim(node) {
    while (
      node > 0 &&
      this.comparator(this.heap[this.parent(node)], this.heap[node]) > 0
    ) {
      this.swap(node, this.parent(node));
      node = this.parent(node);
    }
  }
}
// @lc code=end

// your test code here
maxProbability(
  3,
  [
    [0, 1],
    [1, 2],
    [0, 2],
  ],
  [0.5, 0.5, 0.2],
  0,
  2
);
/*
// @lcpr case=start
// 3\n[[0,1],[1,2],[0,2]]\n[0.5,0.5,0.2]\n0\n2\n
// @lcpr case=end

// @lcpr case=start
// 3\n[[0,1],[1,2],[0,2]]\n[0.5,0.5,0.3]\n0\n2\n
// @lcpr case=end

// @lcpr case=start
// 3\n[[0,1]]\n[0.5]\n0\n2\n
// @lcpr case=end

 */
