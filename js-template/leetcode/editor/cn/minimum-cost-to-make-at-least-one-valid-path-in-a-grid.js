/*
 * @lc app=leetcode.cn id=1368 lang=javascript
 * @lcpr version=30203
 *
 * [1368] 使网格图至少有一条有效路径的最小代价
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * 使网格图至少有一条有效路径的最小代价（Dijkstra变形）
 *
 * 1. 问题分析：
 *    - 给定一个 m x n 的网格，每个格子有一个方向（1:右, 2:左, 3:下, 4:上）
 *    - 你可以花费1的代价修改格子的方向，否则只能按原方向前进
 *    - 求从左上角到右下角的最小总代价
 *    - 本质是带权有向图的最短路问题
 *
 * 2. 算法思路：
 *    - 用 Dijkstra 算法，每次扩展的边权为“是否需要修改方向”
 *    - distTo[x][y] 表示到 (x, y) 的最小总代价
 *    - 优先队列按总代价从小到大出队，保证第一次出队即为最优
 *
 * @param {number[][]} grid 网格，每个格子为1~4的方向
 * @return {number} 最小总代价
 */
let minCost = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  // distTo[x][y] 记录到 (x, y) 的最小总代价，-1表示未访问
  let distTo = Array.from({ length: m }, () => new Array(n).fill(-1));
  // 优先队列，按总代价从小到大出队
  let pq = new PriorityQueue((a, b) => a[2] - b[2]);
  pq.enqueue([0, 0, 0]); // [x, y, 累计总代价]

  while (!pq.isEmpty()) {
    let [curX, curY, costFromStart] = pq.dequeue();
    // 已有更优解，跳过
    if (distTo[curX][curY] !== -1) continue;
    // 第一次出队即为最优总代价
    distTo[curX][curY] = costFromStart;
    // 到达终点直接返回
    if (curX === m - 1 && curY === n - 1) {
      return costFromStart;
    }
    // 扩展所有合法邻居
    for (let [x, y, cost] of getNeighbor(grid, curX, curY)) {
      if (distTo[x][y] !== -1) continue;
      pq.enqueue([x, y, cost + costFromStart]);
    }
  }
};

/**
 * 获取 (x, y) 的所有合法邻居及到达代价
 * @param {number[][]} grid 网格
 * @param {number} x 当前行
 * @param {number} y 当前列
 * @returns {Array<[number, number, number]>} [nx, ny, 代价]
 */
let getNeighbor = function (grid, x, y) {
  let m = grid.length;
  let n = grid[0].length;
  // 方向数组，索引与方向编号一致（1:右, 2:左, 3:下, 4:上）
  let direction = [
    [0, 1], // 1: 右
    [0, -1], // 2: 左
    [1, 0], // 3: 下
    [-1, 0], // 4: 上
  ];
  let neighbors = [];
  for (let directionId = 1; directionId <= 4; directionId++) {
    let [dx, dy] = direction[directionId - 1];
    let nextX = x + dx;
    let nextY = y + dy;
    // 越界则跳过
    if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n) continue;
    // 如果当前格子的方向与目标方向一致，代价为0，否则为1
    let cost = grid[x][y] === directionId ? 0 : 1;
    neighbors.push([nextX, nextY, cost]);
  }
  return neighbors;
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
minCost([
  [1, 1, 3],
  [3, 2, 2],
  [1, 1, 4],
]);
/*
// @lcpr case=start
// [[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1,3],[3,2,2],[1,1,4]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[4,3]]\n
// @lcpr case=end

// @lcpr case=start
// [[2,2,2],[2,2,2]]\n
// @lcpr case=end

// @lcpr case=start
// [[4]]\n
// @lcpr case=end

 */
