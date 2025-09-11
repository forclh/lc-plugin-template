/*
 * @lc app=leetcode.cn id=1658 lang=javascript
 * @lcpr version=30203
 *
 * [1658] 将 x 减到 0 的最小操作数
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 滑动窗口
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
let minOperations = function (nums, x) {
  let sum = nums.reduce((a, b) => a + b, 0);
  // 等价于寻找 nums 中元素和为 target 的最长子数组。
  let target = sum - x;
  if (target < 0) return -1; // 由于nums数组都为正数，因此 target 不可能小于 0
  let window = 0; // 记录窗口内所有元素和
  let result = Infinity;

  let left = 0;
  let right = 0;
  while (right < nums.length) {
    window += nums[right];
    right++;

    // 缩小窗口
    while (window > target) {
      window -= nums[left];
      left++;
    }

    // 寻找目标子数组
    if (window === target) {
      result = Math.min(result, nums.length - (right - left));
    }
  }

  return result === Infinity ? -1 : result;
};
// @lc code=end
minOperations([1, 1], 2);
// your test code here

/*
// @lcpr case=start
// [1,1,4,2,3]\n5\n
// @lcpr case=end

// @lcpr case=start
// [5,6,7,8,9]\n4\n
// @lcpr case=end

// @lcpr case=start
// [3,2,20,1,1,3]\n10\n
// @lcpr case=end

 */
