/*
 * @lc app=leetcode.cn id=377 lang=javascript
 * @lcpr version=30304
 *
 * [377] 组合总和 Ⅳ
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start

/**
 * v1 动态规划（完全背包求排列：二维数组版本）
 *
 * 注意：
 * 1. 标准的“物品 x 容量”二维数组（dp[i][j]）只能计算组合数，无法计算排列数。
 * 2. 对于排列问题，二维的定义必须变为：dp[k][j] 表示“使用 k 个物品凑出容量 j 的排列数”。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = function (nums, target) {
  // dp[k][j] 表示：使用 k 个物品凑出容量 j 的排列数
  // k 的最大可能长度是 target（假设最小物品是 1）
  const dp = Array.from({ length: target + 1 }, () =>
    new Array(target + 1).fill(0)
  );

  // base case: 长度为 0，总和为 0 的方案数为 1
  dp[0][0] = 1;

  // 遍历序列长度 k
  for (let k = 1; k <= target; k++) {
    // 遍历当前背包容量
    for (let j = 0; j <= target; j++) {
      // 遍历每一个物品，尝试将其作为序列的第 k 个元素
      for (const num of nums) {
        if (j >= num) {
          // 如果当前位置放 num，那么前 k-1 个元素必须凑出 j - num
          dp[k][j] += dp[k - 1][j - num];
        }
      }
    }
  }

  // 最终结果是所有可能长度的方案总和
  let ans = 0;
  for (let k = 1; k <= target; k++) {
    ans += dp[k][target];
  }
  return ans;
};
// @lc code=end

// your test code here
combinationSum4([1, 2, 3], 4);
/*
// @lcpr case=start
// [1,2,3]\n4\n
// @lcpr case=end

// @lcpr case=start
// [9]\n3\n
// @lcpr case=end

 */
