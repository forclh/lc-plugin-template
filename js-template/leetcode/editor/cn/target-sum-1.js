/*
 * @lc app=leetcode.cn id=494 lang=javascript
 * @lcpr version=30203
 *
 * [494] 目标和
 */

// import {ListNode} from "../common/listNode.js";
// import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * v2 动态规划（子集背包:自底向上+空间压缩）
 * @param {number[]} nums 非负整数数组
 * @param {number} target 目标和（可能为负数）
 * @return {number} 返回能达到目标和的表达式数量
 */
let findTargetSumWays = function (nums, target) {
  // 把 nums 划分成两个子集 A 和 B，分别代表分配 + 的数和分配 - 的数
  // 则 sum(A) - sum(B) = target
  // sum(A) = target + sum(B)
  // 2 * sum(A) = target + sum(B) + sum(A)
  // 2 * sum(A) = target + sum(nums)
  // sum(A) = (target + sum(nums)) / 2
  // 问题等价于：
  // 有一个容量为 (target + sum(nums)) / 2 的背包，
  // 现在给你 N 个物品，第 i 个物品的重量为 nums[i - 1]，
  // 每个物品只有一个，有几种方式能够恰好装满这个背包

  let sum = nums.reduce((a, b) => a + b);
  // 这两种情况，不可能存在合法的子集划分
  if (sum + target < 0 || (sum + target) % 2 === 1) return 0;
  sum = (sum + target) / 2;
  let n = nums.length;
  // dp[j]表示装满容量为j的背包的方式共有几种
  let dp = new Array(sum + 1).fill(0);
  // 初始化,想当于初始化二维的dp[0][j],即二维矩阵第一行
  dp[0] = 1;

  // 先遍历物品
  for (let i = 0; i < n; i++) {
    // 再倒序遍历容量
    // 注意：必须遍历到 nums[i]，处理 nums[i] 为 0 的情况
    for (let j = sum; j >= nums[i]; j--) {
      // 两种选择的结果之和
      dp[j] = dp[j - nums[i]] + dp[j];
    }
  }

  return dp[sum];
};

// @lc code=end

// your test code here
findTargetSumWays([0], 0);

// @lcpr case=start
// [1,1,1,1,1]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end
