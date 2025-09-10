/*
 * @lc app=leetcode.cn id=80 lang=javascript
 * @lcpr version=30203
 *
 * [80] 删除有序数组中的重复项 II
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 双指针（快慢指针）
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;
  // slow 表示当前需要处理的位置
  // fast 出去探路
  let slow = 2;
  let fast = 2;
  while (fast < nums.length) {
    // 确保每个元素最多出现两次
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast];
      slow++;
    }
    // 如果 nums[slow - 2] === nums[fast] 则 num[slow - 2,...,fast]都相等
    fast++;
  }
  return slow;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,1,1,2,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,1,2,3,3]\n
// @lcpr case=end

 */
