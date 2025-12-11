/*
 * @lc app=leetcode.cn id=213 lang=javascript
 * @lcpr version=30203
 *
 * [213] 打家劫舍 II
 */

// import {ListNode} from "../common/listNode.js";
// import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划(自底向上)
 * @param {number[]} nums
 * @return {number}
 */
let rob = function (nums) {
  const n = nums.length;
  if (n === 1) return nums[0];
  return Math.max(robRange(nums, 0, n - 2), robRange(nums, 1, n - 1));
};

// 参考题[198] 打家劫舍
function robRange(nums, start, end) {
  if (start > end) return 0;
  if (start === end) return nums[start];
  const n = nums.length;
  const dp = new Array(n).fill(0);
  dp[start] = nums[start];
  dp[start + 1] = Math.max(nums[start], nums[start + 1]);
  for (let i = start + 2; i <= end; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[end];
}
// @lc code=end

// your test code here
rob([2, 3, 2]);
/*
// @lcpr case=start
// [2,3,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

 */
