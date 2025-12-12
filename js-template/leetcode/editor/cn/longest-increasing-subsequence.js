/*
 * @lc app=leetcode.cn id=300 lang=javascript
 * @lcpr version=30203
 *
 * [300] 最长递增子序列
 */

import { ListNode } from "../common/listNode.js";

// @lc code=start
/**
 * v1 动态规划(子序列问题)
 * @param {number[]} nums
 * @return {number}
 */
let lengthOfLIS = function (nums) {
  // 定义 dp[i] 表示以nums[i]结尾的最长递增子序列的长度
  let dp = new Array(nums.length).fill(1);
  // base case：dp 数组全都初始化为 1
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // 把 nums[i] 接在后面，即可形成长度为 dp[j] + 1，
        // 且以 nums[i] 为结尾的递增子序列
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};

// @lc code=end

// your test code here

/*
// @lcpr case=start
// [10,9,2,5,3,7,101,18]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,0,3,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [7,7,7,7,7,7,7]\n
// @lcpr case=end

 */
