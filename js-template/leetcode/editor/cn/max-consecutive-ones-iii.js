/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 * @lcpr version=30203
 *
 * [1004] 最大连续1的个数 III
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 滑动窗口
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let longestOnes = function (nums, k) {
  // 等价于求满足 最多k个0其他都是1的子数组的最大长度
  let window = 0; // 记录 window中0的个数
  let left = 0;
  let right = 0;
  let result = 0;
  while (right < nums.length) {
    let c = nums[right];
    right++;
    if (c === 0) {
      window++;
    }
    // 缩小窗口：窗口中的0的数量大于k
    while (window > k) {
      let d = nums[left];
      left++;
      if (d === 0) {
        window--;
      }
    }
    result = Math.max(result, right - left);
  }
  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,1,1,0,0,0,1,1,1,1,0]\n2\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]\n3\n
// @lcpr case=end

 */
