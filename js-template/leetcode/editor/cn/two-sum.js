/*
 * @lc app=leetcode.cn id=1 lang=javascript
 * @lcpr version=30304
 *
 * [1] 两数之和
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const n = nums.length;
  if (n < 2) return [];
  // 创建索引数组并按原始值排序
  const indices = Array.from({ length: n }, (_, i) => i);
  indices.sort((a, b) => nums[a] - nums[b]);

  let left = 0;
  let right = n - 1;

  while (left < right) {
    const leftIndex = indices[left];
    const rightIndex = indices[right];
    let sum = nums[leftIndex] + nums[rightIndex];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      return [leftIndex, rightIndex];
    }
  }
  return [];
};
// @lc code=end

// your test code here
twoSum([3, 2, 4], 6);
/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [3,2,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [3,3]\n6\n
// @lcpr case=end

 */
