/*
 * @lc app=leetcode.cn id=416 lang=javascript
 * @lcpr version=30203
 *
 * [416] 分割等和子集
 */

// import {ListNode} from "../common/listNode.js";
// import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * v2 动态规划（自底向上 + 空间压缩）
 *
 * @param {number[]} nums
 * @return {boolean}
 */
let canPartition = function (nums) {
  let sum = nums.reduce((a, b) => a + b);
  if (sum % 2 !== 0) return false; // 和为奇数则不可能分割
  sum = sum / 2;
  let n = nums.length;
  // 问题转换：
  // 给一个可装载重量为 sum 的背包和 n 个物品，每个物品的重量为 nums[i]。
  // 是否存在一种装法，能够恰好将背包装满？

  // 定义dp[j]表示当背包容量为j时是否存在一种方法可以装满背包
  const dp = new Array(sum + 1).fill(false);
  dp[0] = true;

  // 先遍历物品
  for (let i = 0; i < n; i++) {
    // 然后倒叙遍历容量
    for (let j = sum; j >= nums[i]; j--) {
      dp[j] = dp[j] || dp[j - nums[i]];
    }
  }

  return dp[sum];
};
// @lc code=end

// your test code here
canPartition([2, 2, 1, 1]);
/*
// @lcpr case=start
// [1,5,11,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,5]\n
// @lcpr case=end

 */
