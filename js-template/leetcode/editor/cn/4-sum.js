/*
 * @lc app=leetcode.cn id=18 lang=javascript
 * @lcpr version=30304
 *
 * [18] 四数之和
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 nSum之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  return nSum(nums, 4, 0, target);
};
// 注意：调用这个函数之前一定要先给 nums 排序
const nSum = function (nums, n, start, target) {
  const res = [];
  const len = nums.length;
  if (n < 2 || n > len) return res;
  // base case 两数之和
  if (n === 2) {
    // 注意left的起始值
    let left = start;
    let right = len - 1;
    while (left < right) {
      const leftVal = nums[left];
      const rightVal = nums[right];
      const sum = leftVal + rightVal;
      if (sum < target) {
        while (left < right && nums[left] === leftVal) left++;
      } else if (sum > target) {
        while (left < right && nums[right] === rightVal) right--;
      } else {
        res.push([leftVal, rightVal]);
        // 跳过重复
        while (left < right && nums[left] === leftVal) left++;
        while (left < right && nums[right] === rightVal) right--;
      }
    }
  } else {
    // 注意i的起始值
    for (let i = start; i < len; i++) {
      const subTarget = target - nums[i];
      const tuples = nSum(nums, n - 1, i + 1, subTarget); // 递归调用
      for (const tuple of tuples) {
        tuple.push(nums[i]);
        res.push(tuple);
      }
      // 跳过重复
      while (i < len - 1 && nums[i] === nums[i + 1]) i++;
    }
  }

  return res;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,0,-1,0,-2,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [2,2,2,2,2]\n8\n
// @lcpr case=end

 */
