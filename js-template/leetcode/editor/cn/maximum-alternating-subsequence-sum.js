/*
 * @lc app=leetcode.cn id=1911 lang=javascript
 * @lcpr version=30304
 *
 * [1911] 最大交替子序列和
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 动态规划
 * @param {number[]} nums
 * @return {number}
 */
const maxAlternatingSum = function (nums) {
  // base case
  let even = nums[0]; // 以偶数位置结束的最大交替和（当前子序列长度为奇数）
  let odd = 0; // 以奇数位置结束的最大交替和（当前子序列长度为偶数）
  for (let i = 1; i < nums.length; i++) {
    even = Math.max(even, odd + nums[i]);
    odd = Math.max(odd, even - nums[i]);
  }
  return even;
};

// @lc code=end

// your test code here

/*
// @lcpr case=start
// [4,2,5,3]\n
// @lcpr case=end

// @lcpr case=start
// [5,6,7,8]\n
// @lcpr case=end

// @lcpr case=start
// [6,2,1,2,4,5]\n
// @lcpr case=end

 */
