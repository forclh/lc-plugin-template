/*
 * @lc app=leetcode.cn id=707 lang=javascript
 * @lcpr version=30202
 *
 * [707] 设计链表
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
// 单链表
class MyLinkedList {
  constructor() {
    this.head = new ListNode(null);
    this.tail = this.head;
    this.size = 0;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    // ! 注意索引 index >= this.size
    if (index >= this.size || index < 0) {
      return -1;
    }

    let cur = this.head.next;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    return cur.val;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    let newNode = new ListNode(val);
    newNode.next = this.head.next;
    this.head.next = newNode;
    if (this.size === 0) {
      this.tail = newNode;
    }
    this.size++;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    let newNode = new ListNode(val);
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    if (index > this.size || index < 0) return;
    let newNode = new ListNode(val);
    if (index === this.size) {
      this.addAtTail(val);
      return;
    }

    let cur = this.head; // ! 要找到索引为 index - 1的元素
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    newNode.next = cur.next;
    cur.next = newNode;
    this.size++;
  }

  /**
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    // ! 注意索引 index >= this.size
    if (index >= this.size || index < 0) return;
    let cur = this.head; // ! 要找到索引为 index - 1的元素
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    cur.next = cur.next.next;
    if (index === this.size - 1) {
      // 删除的是最后一个则更新尾节点
      this.tail = cur;
    }
    this.size--;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

// your test code here
