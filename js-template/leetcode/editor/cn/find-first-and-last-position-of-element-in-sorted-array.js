/*
 * @lc app=leetcode.cn id=34 lang=javascript
 * @lcpr version=30203
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let searchRange = function (nums, target) {
  if (nums.length === 0 || target < nums[0] || target > nums[nums.length - 1]) {
    return [-1, -1];
  }

  let result = [];
  result.push(leftBound(nums, target));
  result.push(rightBound(nums, target));
  return result;
};

// 查找左侧边界
function leftBound(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      right = mid - 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  return nums[left] === target ? left : -1;
}
// 查找右侧边界
function rightBound(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  return nums[left - 1] === target ? left - 1 : -1;
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [5,7,7,8,8,10]\n8\n
// @lcpr case=end

// @lcpr case=start
// [5,7,7,8,8,10]\n6\n
// @lcpr case=end

// @lcpr case=start
// []\n0\n
// @lcpr case=end

 */
