/*
 * @lc app=leetcode.cn id=53 lang=javascript
 * @lcpr version=30203
 *
 * [53] 最大子数组和
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 前缀和
 * 以 nums[i]结尾的最小子数组和 = preNum[i + 1] - min(preNum[0],...,preNum[i])
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function (nums) {
  let n = nums.length;
  let preNum = new Array(n);
  preNum[0] = 0;
  for (let i = 1; i <= n; i++) {
    preNum[i] = preNum[i - 1] + nums[i - 1];
  }

  let minValue = Infinity;
  let maxSum = -Infinity;
  for (let i = 0; i < n; i++) {
    // 维护 minVal 是 preSum[0],...,preSum[i] 的最小值
    minValue = Math.min(minValue, preNum[i]);
    // preNum[i + 1] - minValue 表示以nums[i]结尾的最大子数组和
    maxSum = Math.max(maxSum, preNum[i + 1] - minValue);
  }
  return maxSum;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [-2,1,-3,4,-1,2,1,-5,4]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [5,4,-1,7,8]\n
// @lcpr case=end

 */
