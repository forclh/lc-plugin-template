/*
 * @lc app=leetcode.cn id=88 lang=javascript
 * @lcpr version=30203
 *
 * [88] 合并两个有序数组
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 双指针（从后往前的指针）
 * 合并两个有序数组
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function (nums1, m, nums2, n) {
  let p1 = m - 1; // 指向num1的非0尾巴
  let p2 = m + n - 1; // 指向num1的尾
  let p = n - 1; // 指向num2的尾巴
  // 从后向前生成结果数组，类似合并两个有序链表的逻辑
  while (p >= 0 && p1 >= 0) {
    if (nums1[p1] >= nums2[p]) {
      nums1[p2] = nums1[p1];
      p1--;
    } else {
      nums1[p2] = nums2[p];
      p--;
    }
    p2--;
  }
  // 可能其中一个数组的指针走到尽头了，而另一个还没走完
  // 因为我们本身就是在往 nums1 中放元素，所以只需考虑 nums2 是否剩元素即可
  while (p >= 0) {
    nums1[p2] = nums2[p];
    p--;
    p2--;
  }
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,0,0,0]\n3\n[2,5,6]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n[]\n0\n
// @lcpr case=end

// @lcpr case=start
// [0]\n0\n[1]\n1\n
// @lcpr case=end

 */
