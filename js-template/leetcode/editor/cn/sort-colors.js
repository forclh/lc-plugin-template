/*
 * @lc app=leetcode.cn id=75 lang=javascript
 * @lcpr version=30203
 *
 * [75] 颜色分类
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 双指针（左右指针） + 遍历指针
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let sortColors = function (nums) {
  let left = 0; // nums[0, left) 维护 0
  let right = nums.length - 1; // nums(right, nums.length - 1] 维护 2
  let p = 0;
  // 由于 right 是开区间，所以 p <= right
  while (p <= right) {
    if (nums[p] === 0) {
      [nums[p], nums[left]] = [nums[left], nums[p]];
      left++;
      p++; // 直接移动p
    } else if (nums[p] === 2) {
      [nums[p], nums[right]] = [nums[right], nums[p]];
      right--;
    } else if (nums[p] === 1) {
      p++;
    }
  }
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [2,0,2,1,1,0]\n
// @lcpr case=end

// @lcpr case=start
// [2,0,1]\n
// @lcpr case=end

 */
