/*
 * @lc app=leetcode.cn id=2073 lang=javascript
 * @lcpr version=30203
 *
 * [2073] 买票需要的时间
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 使用指针循环遍历，避免操作数组
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
let timeRequiredToBuy = function (tickets, k) {
  // 记录总共需要的时间
  let time = 0;
  // i 是当前正在买票的人的索引
  let i = 0;

  // 当目标人还没买完票时继续循环
  while (tickets[k] > 0) {
    // 如果当前这个人还需要买票
    if (tickets[i] > 0) {
      // 买一张票，剩余票数减1
      tickets[i]--;
      // 消耗一个单位时间
      time++;
    }
    // 轮转到下一个人，使用取模运算实现循环
    i = (i + 1) % tickets.length;
  }
  return time;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [2,3,2]\n2\n
// @lcpr case=end

// @lcpr case=start
// [5,1,1,1]\n0\n
// @lcpr case=end

 */
