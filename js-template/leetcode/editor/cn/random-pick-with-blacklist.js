/*
 * @lc app=leetcode.cn id=710 lang=javascript
 * @lcpr version=30300
 *
 * [710] 黑名单中的随机数
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} blacklist
 */
class Solution {
  constructor(n, blacklist) {
    this.size = n - blacklist.length;
    this.blackToIndex = new Map();
    blacklist = new Set(blacklist);
    let lastIndex = n - 1;
    // 建立映射
    for (let black of blacklist) {
      // 在范围外的不需要建立映射
      if (black >= this.size) {
        continue;
      }
      // 避免建立black到black的映射
      while (blacklist.has(lastIndex)) {
        lastIndex--;
      }

      this.blackToIndex.set(black, lastIndex);
      lastIndex--;
    }
  }
  /**
   * @return {number}
   */
  pick() {
    // 随机选取一个索引
    const index = Math.floor(Math.random() * this.size);
    // 如果索引命中了黑名单需要重新映射到正确索引
    if (this.blackToIndex.has(index)) {
      return this.blackToIndex.get(index);
    }
    return index;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
// @lc code=end

// your test code here
