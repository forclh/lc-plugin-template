/*
 * @lc app=leetcode.cn id=15 lang=javascript
 * @lcpr version=30304
 *
 * [15] 三数之和
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 转化为不重复的两数之和
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const target = -nums[i];

    const tuples = twoSum(nums, i + 1, target);
    for (const tuple of tuples) {
      tuple.push(nums[i]);
      res.push(tuple);
    }
    // 跳过重复的
    while (i < n - 1 && nums[i] === nums[i + 1]) i++;
  }
  return res;
};
// 寻找两数和为target的不重复元素对
const twoSum = function (nums, start, target) {
  nums.sort((a, b) => a - b);
  const res = [];
  let left = start;
  let right = nums.length - 1;
  while (left < right) {
    const leftVal = nums[left];
    const rightVal = nums[right];
    const sum = leftVal + rightVal;
    if (sum < target) {
      while (left < right && nums[left] === leftVal) left++;
    } else if (sum > target) {
      while (left < right && nums[right] === rightVal) right--;
    } else {
      res.push([nums[left], nums[right]]);
      // 跳过重复的
      while (left < right && nums[left] === leftVal) left++;
      while (left < right && nums[right] === rightVal) right--;
    }
  }
  return res;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [-1,0,1,2,-1,-4]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n
// @lcpr case=end

 */
