/*
 * @lc app=leetcode.cn id=146 lang=javascript
 * @lcpr version=30304
 *
 * [146] LRU 缓存
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 利用js Map 插入键值对有序的做法
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.map = new Map();
  this.cap = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) {
    return -1;
  }
  // 更新顺序
  const value = this.map.get(key);
  this.map.delete(key);
  this.map.set(key, value);
  return this.map.get(key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (!this.map.has(key)) {
    // 新增
    if (this.map.size === this.cap) {
      // 容量已满,删除第一个插入的
      const deleteKey = this.map.keys().next().value;
      this.map.delete(deleteKey);
    }
    this.map.set(key, value);
  } else {
    this.map.delete(key);
    this.map.set(key, value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

// your test code here
const cache = new LRUCache(2);
cache.put(2, 1);
cache.put(1, 1);
// cache.get(1);
cache.put(2, 3);
// cache.get(2);
cache.put(4, 1);
cache.get(1);
cache.get(2);
// cache.get(4);

/*
// @lcpr case=start
// ["LRUCache","put","put","get","put","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]\n
// @lcpr case=end

 */
