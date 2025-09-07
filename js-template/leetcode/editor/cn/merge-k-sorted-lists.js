/*
 * @lc app=leetcode.cn id=23 lang=javascript
 * @lcpr version=30202
 *
 * [23] 合并 K 个升序链表
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 双指针 + 优先级队列（最小堆）
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
let mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  // 虚拟头结点
  let dummy = new ListNode(-1);
  let p = dummy;

  // 优先级队列，最小堆
  let pq = new PriorityQueue((a, b) => a.val - b.val);
  // 将 k 个链表的头结点加入最小堆
  for (let list of lists) {
    if (list !== null) {
      pq.push(list);
    }
  }

  while (!pq.isEmpty()) {
    // 获取最小节点，接到结果链表中
    let node = pq.pop();
    p.next = node;
    p = p.next;
    if (node.next !== null) {
      // 如果下一个节点不为空，则入队
      pq.push(node.next);
    }
  }
  return dummy.next;
};
// @lc code=end

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
  pop() {
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
  push(value) {
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
// your test code here

/*
// @lcpr case=start
// [[1,4,5],[1,3,4],[2,6]]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [[]]\n
// @lcpr case=end

 */
