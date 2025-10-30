/*
 * @lc app=leetcode.cn id=743 lang=javascript
 * @lcpr version=30203
 *
 * [743] 网络延迟时间
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * 网络延迟时间（Dijkstra算法）
 *
 * 1. 问题分析：
 *    - times[i] = [u, v, w] 表示从节点u到v需要w时间
 *    - 求从节点k出发，所有节点收到信号的最短时间，若有节点不可达返回-1
 *    - 本质是单源最短路径问题，且无负权边，适合用Dijkstra算法
 *
 * 2. 算法思路：
 *    a) 用邻接表构建有向图
 *    b) 用Dijkstra算法计算k到所有节点的最短路径
 *    c) 取所有最短路径的最大值作为答案
 *    d) 若有节点不可达，返回-1
 *
 * @param {number[][]} times 边信息数组 [u, v, w]
 * @param {number} n 节点总数
 * @param {number} k 起点编号（1-based）
 * @return {number} 所有节点收到信号的最短时间，若不可达返回-1
 */
let networkDelayTime = function (times, n, k) {
  // Dijkstra算法实现
  let dijkstra = function (graph, src) {
    // timeTo[i]: 从src到i的最短时间，-1表示未知
    let timeTo = new Array(graph.length).fill(-1);
    // 小顶堆优先队列，按累计时间从小到大出队
    let pq = new PriorityQueue((a, b) => a.timeFromStart - b.timeFromStart);

    // 起点入队，累计时间为0
    pq.enqueue(new State(src, 0));

    while (!pq.isEmpty()) {
      let cur = pq.dequeue();
      let node = cur.node;
      let timeFromStart = cur.timeFromStart;

      // 如果已确定最短时间，跳过
      if (timeTo[node] !== -1) continue;
      // 第一次出队即为最短路径
      timeTo[node] = timeFromStart;

      // 遍历邻居节点
      for (let [to, time] of graph[node]) {
        if (timeTo[to] !== -1) continue;
        pq.enqueue(new State(to, timeFromStart + time));
      }
    }
    return timeTo;
  };

  // 步骤1：构建邻接表
  let graph = buildGraph(times, n);
  // 步骤2：Dijkstra求最短路径
  let timeTo = dijkstra(graph, k);
  // 步骤3：取所有最短路径的最大值
  let res = 0;
  for (let i = 1; i < timeTo.length; i++) {
    // 节点编号从1开始
    if (timeTo[i] === -1) return -1; // 有节点不可达
    res = Math.max(res, timeTo[i]);
  }
  return res;
};

// 构造图
let buildGraph = function (times, n) {
  // 节点编号是从 1 开始的，所以要一个大小为 n + 1 的邻接表
  let graph = Array.from({ length: n + 1 }, () => []);
  for (let [from, to, time] of times) {
    // 邻接表存储图结构，同时存储权重信息
    graph[from].push([to, time]);
  }
  return graph;
};

class State {
  constructor(node, timeFromStart) {
    this.node = node;
    // 从起点 k 到当前节点需要的时间
    this.timeFromStart = timeFromStart;
  }
}

// 优先级队列
// class PriorityQueue {
//   constructor(comparator) {
//     this.heap = [];
//     this.size = 0;
//     this.comparator = comparator || ((a, b) => a - b); // 默认整型小顶堆
//   }
//   // 返回堆的大小
//   getSize() {
//     return this.size;
//   }
//   // 判断堆是否为空
//   isEmpty() {
//     return this.size === 0;
//   }
//   // 左子节点的索引
//   left(node) {
//     return node * 2 + 1;
//   }
//   // 右子节点的索引
//   right(node) {
//     return node * 2 + 2;
//   }
//   // 父节点的索引
//   parent(node) {
//     return Math.floor((node - 1) / 2);
//   }
//   // 交换数组的两个元素
//   swap(i, j) {
//     [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
//   }
//   // 查，返回堆顶元素，时间复杂度 O(1)
//   peek() {
//     if (this.isEmpty()) {
//       throw new Error("heap is empty");
//     }
//     return this.heap[0];
//   }
//   // 删，删除堆顶元素，时间复杂度 O(logN)
//   dequeue() {
//     if (this.isEmpty()) {
//       throw new Error("heap is empty");
//     }
//     let res = this.heap[0];
//     // 把堆底元素放到堆顶
//     this.swap(0, this.size - 1);
//     // 避免对象游离
//     this.heap[this.size - 1] = undefined;
//     this.size--;
//     // 然后下沉到正确位置
//     this.sink(0);
//     return res;
//   }
//   // 增，向堆中插入一个元素，时间复杂度 O(logN)
//   enqueue(value) {
//     // 把新元素追加到最后
//     this.heap[this.size] = value; // this.heap.push(value);
//     // 然后上浮到正确位置
//     this.swim(this.size);
//     this.size++;
//   }
//   // 下沉操作，时间复杂度是树高 O(logN)
//   sink(node) {
//     while (this.left(node) < this.size) {
//       // 与左右子节点比较找到最小的
//       let min = node;
//       let left = this.left(node);
//       let right = this.right(node);
//       if (
//         left < this.size &&
//         this.comparator(this.heap[left], this.heap[min]) < 0
//       ) {
//         // 左子节点较小
//         min = left;
//       }

//       if (
//         right < this.size &&
//         this.comparator(this.heap[right], this.heap[min]) < 0
//       ) {
//         // 右子节点较小
//         min = right;
//       }
//       // 当前节点就是最小节点
//       if (min === node) {
//         break;
//       }

//       this.swap(node, min);
//       node = min;
//     }
//   }
//   // 上浮操作，时间复杂度是树高 O(logN)
//   swim(node) {
//     while (
//       node > 0 &&
//       this.comparator(this.heap[this.parent(node)], this.heap[node]) > 0
//     ) {
//       this.swap(node, this.parent(node));
//       node = this.parent(node);
//     }
//   }
// }
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[2,1,1],[2,3,1],[3,4,1]]\n4\n2\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,1]]\n2\n1\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,1]]\n2\n2\n
// @lcpr case=end

 */
