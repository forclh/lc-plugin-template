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
 * v2 动态规划(自底向上 + 空间优化)
 * @param {number[]} nums
 * @return {number}
 */
let rob = function (nums) {
  let n = nums.length;
  if (n === 1) return nums[0];
  if (n === 2) return Math.max(nums[0], nums[1]);

  // dp[start][end]返回 nums[start, end]中能抢到的最大值
  let dp = Array.from({ length: n + 1 }, () => new Array(n).fill(0));
  // base case start===end
  for (let i = 0; i < n; i++) {
    dp[i][i] = nums[i];
  }
  // 从后往前遍历
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      dp[i][j] = Math.max(dp[i + 2][j] + nums[i], dp[i + 1][j]);
    }
  }

  // 抢第一间房或者抢最后一间房
  return Math.max(dp[0][n - 2], dp[1][n - 1]);
};
// @lc code=end

// your test code here
rob([200, 3, 140, 20, 10]);
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
