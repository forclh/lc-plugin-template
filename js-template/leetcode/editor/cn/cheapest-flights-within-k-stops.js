/*
 * @lc app=leetcode.cn id=787 lang=javascript
 * @lcpr version=30203
 *
 * [787] K 站中转内最便宜的航班
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * K 站中转内最便宜的航班（Dijkstra变形，边数限制）
 *
 * 1. 问题分析：
 *    - 给定 n 个城市和若干航班，每条航班有价格
 *    - 求从 src 到 dst，最多经过 k 个中转站的最便宜价格
 *    - 本质是带“边数限制”的最短路问题
 *
 * 2. 算法思路：
 *    - 用 Dijkstra 算法，每个状态包含：当前城市、累计价格、已用边数
 *    - 只要边数不超过 k+1，都可以入队
 *    - 用 distTo[node] 记录到 node 的最小价格（首次到达）
 *    - 用 edgesTo[node] 记录到 node 的最少边数
 *    - 优先队列按累计价格从小到大出队，保证第一次到达 dst 的价格就是最优
 *    - 只要边数不超限，允许多次入队同一节点
 *
 * @param {number} n 城市数
 * @param {number[][]} flights 航班数组 [from, to, price]
 * @param {number} src 起点
 * @param {number} dst 终点
 * @param {number} k 最多中转站数
 * @return {number} 最便宜价格，不可达返回-1
 */
let findCheapestPrice = function (n, flights, src, dst, k) {
  let graph = buildGraph(n, flights);
  // distTo[i] 记录到达城市i的最小价格
  let distTo = new Array(n).fill(-1);
  // edgesTo[i] 表示从起点到节点 i 经过的最少的边的条数
  let edgesTo = new Array(n).fill(Infinity);

  // 优先队列，按累计价格从小到大出队
  let pq = new PriorityQueue((a, b) => a.priceFromStart - b.priceFromStart);
  pq.enqueue(new State(src, 0, 0)); // [城市, 累计价格, 已用边数]

  while (!pq.isEmpty()) {
    let { node, priceFromStart, edgeFromStart } = pq.dequeue();
    // 如果当前路径边数比已知最少边数多，跳过
    if (distTo[node] !== -1 && edgeFromStart > edgesTo[node]) continue;

    // 首次到达该节点，记录价格
    if (distTo[node] == -1) {
      distTo[node] = priceFromStart;
      // 如果到达终点，直接返回当前价格
      if (node === dst) {
        return priceFromStart;
      }
    }
    // 更新到该节点的最少边数
    edgesTo[node] = Math.min(edgesTo[node], edgeFromStart);

    // 扩展所有邻居
    for (let [next, price] of graph[node]) {
      let nextPriceFromStart = price + priceFromStart;
      let nextEdgeFromStart = edgeFromStart + 1;
      // 如果到 next 的路径边数比已知最少边数多，跳过
      if (distTo[next] !== -1 && nextEdgeFromStart > edgesTo[next]) continue;
      // 超过最大中转站数，跳过
      if (nextEdgeFromStart > k + 1) continue;
      pq.enqueue(new State(next, nextPriceFromStart, nextEdgeFromStart));
    }
  }

  // 无法到达终点
  return -1;
};

class State {
  constructor(node, priceFromStart, edgeFromStart) {
    this.node = node;
    this.priceFromStart = priceFromStart;
    this.edgeFromStart = edgeFromStart;
  }
}

let buildGraph = function (n, flights) {
  let graph = Array.from({ length: n }, () => []);
  for (let [from, to, price] of flights) {
    graph[from].push([to, price]);
  }
  return graph;
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
findCheapestPrice(
  4,
  [
    [0, 1, 100],
    [1, 2, 100],
    [2, 0, 100],
    [1, 3, 600],
    [2, 3, 200],
  ],
  0,
  3,
  1
);
/*
// @lcpr case=start
// 4\n[[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]]\n0\n3\n1\n
// @lcpr case=end

// @lcpr case=start
// 3\n[[0,1,100],[1,2,100],[0,2,500]]\n0\n2\n1\n
// @lcpr case=end

// @lcpr case=start
// 3\n[[0,1,100],[1,2,100],[0,2,500]]\n0\n2\n0\n
// @lcpr case=end

 */
