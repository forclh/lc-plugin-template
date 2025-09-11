/*
 * @lc app=leetcode.cn id=713 lang=javascript
 * @lcpr version=30203
 *
 * [713] 乘积小于 K 的子数组
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
let numSubarrayProductLessThanK = function (nums, k) {
  // if (k === 0) return 0; // 两种写法都行
  let result = 0;
  let left = 0;
  let right = 0;
  let window = 1;

  while (right < nums.length) {
    window *= nums[right];
    right++;

    while (window >= k && left < right) {
      window /= nums[left];
      left++;
    }
    // 现在必然是一个合法的窗口，但注意思考这个窗口中的子数组个数怎么计算：
    // 比方说 left = 1, right = 4 划定了 [1, 2, 3] 这个窗口（right 是开区间）
    // 但不止 [left..right-1] 是合法的子数组，[left+1..right-1], [left+2..right-1] 等都是合法子数组
    // 所以我们需要把 [3], [2,3], [1,2,3] 这 right - left 个子数组都加上
    result += right - left;
  }

  return result;
};
// @lc code=end

// your test code here
numSubarrayProductLessThanK([1, 2, 3], 0);
/*
// @lcpr case=start
// [10,5,2,6]\n100\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n0\n
// @lcpr case=end

 */
