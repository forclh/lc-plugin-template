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
 * v1 动态规划（转换为子集背包问题）
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
  // dp[i][j]表示使用前i个物品，装满容量为j的背包的方式
  let dp = Array.from({ length: n + 1 }, () => new Array(sum + 1).fill(0));
  // base case
  dp[0][0] = 1; // nums中可以存在0，因此dp[i][0]不能初始化为 1

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= sum; j++) {
      if (nums[i - 1] > j) {
        // 背包的空间不足，只能选择不装物品 i
        dp[i][j] = dp[i - 1][j];
      } else {
        // 两种选择的结果之和
        dp[i][j] = dp[i - 1][j - nums[i - 1]] + dp[i - 1][j];
      }
    }
  }

  return dp[n][sum];
};

// @lc code=end

// your test code here
findTargetSumWays([1, 1, 1, 1, 1], 3);

// @lcpr case=start
// [1,1,1,1,1]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end
