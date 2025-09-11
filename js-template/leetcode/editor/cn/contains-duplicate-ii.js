/*
 * @lc app=leetcode.cn id=219 lang=javascript
 * @lcpr version=30203
 *
 * [219] 存在重复元素 II
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 滑动窗口
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
let containsNearbyDuplicate = function (nums, k) {
  // 是否存在一个长度小于等于 k + 1，且有重复元素的子串
  let left = 0;
  let right = 0;
  let window = new Set();
  while (right < nums.length) {
    // 窗口长度小于 k  时扩大窗口
    if (window.has(nums[right])) {
      return true;
    }
    window.add(nums[right]);
    right++;

    // 当数组长度大于 k 时收缩窗口
    // 因为在窗口扩张的时候进行判断，如果大于k + 1才收缩的话会导致下一次扩张时进行错误判断
    while (right - left > k) {
      window.delete(nums[left]);
      left++;
    }
  }

  return false;
};
// @lc code=end

// your test code here
containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2);
/*
// @lcpr case=start
// [1,2,3,1]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,0,1,1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,1,2,3]\n2\n
// @lcpr case=end

 */
