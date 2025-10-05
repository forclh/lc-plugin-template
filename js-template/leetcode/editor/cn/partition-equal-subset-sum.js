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
 * v1 动态规划（自底向上）
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

  // dp[n][w]:背包可承载的重量为 w 的时候，从前 n 个物品中选取，是否可以装满背包
  let dp = Array.from({ length: n + 1 }, () => new Array(sum + 1).fill(false));

  // base case
  // n = 0 时 dp[n][w] = false 没有物品可选，无法装满（除0容量外）
  // w = 0 时 dp[n][w] = true 背包没有容量，视作装满了
  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < sum + 1; j++) {
      // 决策过程：是否选择第 i 个物品（索引为 i-1）
      if (nums[i - 1] > j) {
        dp[i][j] = dp[i - 1][j]; // 第 i个物品太重，无法装入，只能不装
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]; // 可以选择装入或不装入，只要有一种能成功就行
      }
    }
  }

  return dp[n][sum];
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,5,11,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,5]\n
// @lcpr case=end

 */
