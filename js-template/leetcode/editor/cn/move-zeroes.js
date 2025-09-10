/*
 * @lc app=leetcode.cn id=283 lang=javascript
 * @lcpr version=30203
 *
 * [283] 移动零
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 双指针（快慢指针）
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function (nums) {
  if (nums.length === 0) return 0;
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast];
      if (fast !== slow) {
        nums[fast] = 0;
      }
      slow++;
    }
    fast++;
  }
};

// @lc code=end

// your test code here

/*
// @lcpr case=start
// [0,1,0,3,12]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */
