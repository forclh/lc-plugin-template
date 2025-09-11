/*
 * @lc app=leetcode.cn id=209 lang=javascript
 * @lcpr version=30203
 *
 * [209] 长度最小的子数组
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 滑动窗口
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
let minSubArrayLen = function (target, nums) {
  let windowSum = 0;
  let left = 0;
  let right = 0;
  let result = Infinity;
  while (right < nums.length) {
    // 总和小于 target 的时候扩大窗口
    windowSum += nums[right];
    right++;
    // 总和大于等于target的时候缩小窗口
    while (windowSum >= target && left < right) {
      result = Math.min(result, right - left);
      windowSum -= nums[left];
      left++;
    }
  }

  return result === Infinity ? 0 : result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 7\n[2,3,1,2,4,3]\n
// @lcpr case=end

// @lcpr case=start
// 4\n[1,4,4]\n
// @lcpr case=end

// @lcpr case=start
// 11\n[1,1,1,1,1,1,1,1]\n
// @lcpr case=end

 */
