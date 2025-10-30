/*
 * @lc app=leetcode.cn id=198 lang=javascript
 * @lcpr version=30203
 *
 * [198] 打家劫舍
 */

// import {ListNode} from "../common/listNode.js";
// import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * v1.1 动态规划(自底向上 + 空间优化)
 * @param {number[]} nums
 * @return {number}
 */
let rob = function (nums) {
  let n = nums.length;

  let dp_i_2 = 0;
  let dp_i_1 = nums[0];
  let dp_i = 0;
  if (n === 1) return dp_i_1;
  for (let i = 2; i <= n; i++) {
    // 第 i 间房子能偷则金额为dp[i - 2] + nums[i - 1]
    // 不能偷则金额为dp[i - 1]
    dp_i = Math.max(dp_i_2 + nums[i - 1], dp_i_1);
    dp_i_2 = dp_i_1;
    dp_i_1 = dp_i;
  }

  return dp_i;
};
// @lc code=end

// your test code here
rob([1]);
/*
// @lcpr case=start
// [1,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [2,7,9,3,1]\n
// @lcpr case=end

 */
