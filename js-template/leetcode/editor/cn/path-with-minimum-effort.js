/*
 * @lc app=leetcode.cn id=1631 lang=javascript
 * @lcpr version=30203
 *
 * [1631] 最小体力消耗路径
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * 最小体力消耗路径（Dijkstra变形）
 *
 * 1. 问题分析：
 *    - 给定一个高度矩阵，从左上角到右下角，每次只能上下左右移动
 *    - 每次移动的体力消耗为相邻格子的高度差的绝对值
 *    - 路径的总代价定义为路径上所有消耗的最大值
 *    - 求所有路径中总代价最小的那一条
 *
 * 2. 算法思路：
 *    - 本质是最短路问题，但路径权重是“最大边权”而不是“边权和”
 *    - 用 Dijkstra 算法，每次扩展的不是距离和，而是到当前点的最大体力消耗
 *    - distTo[node] 表示从起点到 node 的最小体力消耗（即最大边权的最小值）
 *
 * @param {number[][]} heights 高度矩阵
 * @return {number} 最小体力消耗
 */
let minimumEffortPath = function (heights) {
  let m = heights.length;
  let n = heights[0].length;
  // 记录从起点 (0, 0) 到每个节点的最小体力消耗
  let distTo = Array.from({ length: m }, () => new Array(n).fill(Infinity));
  // 优先队列，按最大体力消耗从小到大出队
  let pq = new PriorityQueue((a, b) => a.effortFromStart - b.effortFromStart);
  pq.enqueue(new State(0, 0, 0));

  while (!pq.isEmpty()) {
    let { row, col, effortFromStart } = pq.dequeue();

    // 已经有更优解，跳过
    if (distTo[row][col] !== Infinity) continue;

    // 第一次出队即为最优体力消耗
    distTo[row][col] = effortFromStart;

    // 到达终点直接返回
    if (row === m - 1 && col === n - 1) {
      return effortFromStart;
    }

    // 扩展所有合法邻居
    for (let [x, y] of getNeighbor(heights, row, col)) {
      if (distTo[x][y] !== Infinity) continue;
      // 路径最大体力消耗取决于当前路径和新边的最大值
      let newFromStart = Math.max(
        effortFromStart,
        Math.abs(heights[x][y] - heights[row][col])
      );
      pq.enqueue(new State(x, y, newFromStart));
    }
  }

  function getNeighbor(heights, x, y) {
    let m = heights.length;
    let n = heights[0].length;
    let neighbors = [];

    // 四个方向
    let dirs = [
      [0, 1], // 右
      [0, -1], // 左
      [1, 0], // 下
      [-1, 0], // 上
    ];
    for (let [dx, dy] of dirs) {
      let nx = x + dx;
      let ny = y + dy;
      // 判断是否越界
      if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
        neighbors.push([nx, ny]);
      }
    }
    return neighbors;
  }
};

class State {
  constructor(row, col, effortFromStart) {
    // 当前节点的横坐标
    this.row = row;
    // 当前节点的纵坐标
    this.col = col;
    // 从起点到节点 node 需要消耗的体力值
    this.effortFromStart = effortFromStart;
  }
}

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
minimumEffortPath([
  [1, 2, 2],
  [3, 8, 2],
  [5, 3, 5],
]);
/*
// @lcpr case=start
// [[1,2,2],[3,8,2],[5,3,5]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3],[3,8,4],[5,3,5]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]\n
// @lcpr case=end

 */
