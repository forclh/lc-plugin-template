/*
 * @lc app=leetcode.cn id=373 lang=javascript
 * @lcpr version=30202
 *
 * [373] 查找和最小的 K 对数字
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 合并 k 有序链表的变体
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
let kSmallestPairs = function (nums1, nums2, k) {
  let result = [];
  // 存储三元组 (num1[i], nums2[i], i)
  // i 记录 nums2 元素的索引位置，用于生成下一个节点
  let pq = new PriorityQueue((a, b) => a[0] + a[1] - (b[0] + b[1]));

  // 所有有序链表的头节点入队
  for (let i = 0; i < nums1.length; i++) {
    pq.push([nums1[i], nums2[0], 0]);
  }
  // 执行合并多个有序链表的逻辑
  while (!pq.isEmpty() && k > 0) {
    let [value1, value2, j] = pq.pop();
    result.push([value1, value2]);
    k--;
    // 链表中的下一个节点加入优先级队列
    if (j + 1 < nums2.length) {
      pq.push([value1, nums2[j + 1], j + 1]);
    }
  }

  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,7,11]\n[2,4,6]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2]\n[1,2,3]\n2\n
// @lcpr case=end

 */
