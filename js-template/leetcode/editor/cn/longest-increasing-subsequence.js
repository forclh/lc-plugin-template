/*
 * @lc app=leetcode.cn id=300 lang=javascript
 * @lcpr version=30203
 *
 * [300] 最长递增子序列
 */

import { ListNode } from "../common/listNode.js";

// @lc code=start
/**
 * 1. 算法选择：动态规划
 * 2. 选择理由：该问题存在重叠子问题和最优子结构：
 *    - 重叠子问题：计算以每个元素结尾的最长递增子序列时，会重复计算更短序列的长度
 *    - 最优子结构：以nums[i]结尾的最长递增子序列可以通过其前面元素的最长递增子序列推导出来
 * 3. 解题思路：
 *    - 状态定义：dp[i]表示以nums[i]结尾的最长递增子序列的长度
 *    - 状态转移方程：对于每个i，在所有满足j<i且nums[j]<nums[i]的j中，
 *      dp[i] = max(dp[j] + 1)，如果不存在这样的j，则dp[i] = 1
 *    - 初始化：每个元素自身至少构成长度为1的递增子序列，所以dp数组初始化为1
 *    - 结果：dp数组中的最大值即为整个数组的最长递增子序列长度
 * @param {number[]} nums
 * @return {number}
 */
let lengthOfLIS = function (nums) {
  // 定义 dp[i] 表示以nums[i]结尾的最长递增子序列的长度
  let dp = new Array(nums.length).fill(1);
  // base case：dp 数组全都初始化为 1
  for (let i = 0; i < nums.length; i++) {
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
