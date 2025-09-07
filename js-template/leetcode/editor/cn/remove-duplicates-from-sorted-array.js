/*
 * @lc app=leetcode.cn id=26 lang=javascript
 * @lcpr version=30202
 *
 * [26] 删除有序数组中的重复项
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
  if (nums.length === 0) return 0;
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      // 维护 nums[0..slow] 无重复
      nums[slow] = nums[fast];
    }
    fast++;
  }

  return slow + 1;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,2,2,3,3,4]\n
// @lcpr case=end

 */
