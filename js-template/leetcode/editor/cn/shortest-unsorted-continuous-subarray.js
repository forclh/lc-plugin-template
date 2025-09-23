/*
 * @lc app=leetcode.cn id=581 lang=javascript
 * @lcpr version=30203
 *
 * [581] 最短无序连续子数组
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 单调栈
 * @param {number[]} nums
 * @return {number}
 */
let findUnsortedSubarray = function (nums) {
  let n = nums.length;
  let left = Infinity;
  let right = -Infinity;

  // 正序维护递增栈
  let increaseStack = [];
  for (let i = 0; i < n; i++) {
    while (
      increaseStack.length !== 0 &&
      nums[i] < nums[increaseStack[increaseStack.length - 1]]
    ) {
      // 弹出的元素都是乱序元素，其中最小的索引就是乱序子数组的左边界
      left = Math.min(left, increaseStack.pop());
    }
    increaseStack.push(i);
  }

  // 倒序维护递减栈
  let decreaseStack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (
      decreaseStack.length !== 0 &&
      nums[i] > nums[decreaseStack[decreaseStack.length - 1]]
    ) {
      // 弹出的元素都是乱序元素，其中最大的索引就是乱序子数组的右边界
      right = Math.max(right, decreaseStack.pop());
    }
    decreaseStack.push(i);
  }

  if (left === Infinity && right === -Infinity) {
    return 0;
  }
  return right - left + 1;
};
// @lc code=end

// your test code here
findUnsortedSubarray([2, 1]);
/*
// @lcpr case=start
// [2,6,4,8,10,9,15]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
