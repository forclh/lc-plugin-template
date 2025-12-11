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
 * v2 动态规划（完全背包求排列问题:一维数组）
 * 注意：本题求的是“排列数”（顺序不同视为不同），而非“组合数”。
 * - 求组合数：先遍历物品，再遍历背包（完全背包标准模板）
 * - 求排列数：先遍历背包，再遍历物品
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = function (nums, target) {
  // dp[i]表示凑出容量为i的背包的排列数
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  // 因为求排列数所以必须先遍历背包容量，再遍历物品
  // 这样才能保证对于每个容量，所有物品都有机会作为“最后一个物品”被选中，从而产生不同的排列
  // 例如 dp[3] 可以由 dp[2] + 1 (最后选1) 和 dp[1] + 2 (最后选2) 推导而来
  // 这就覆盖了 (1, 2) 和 (2, 1) 两种情况
  for (let i = 1; i <= target; i++) {
    // 后遍历物品
    for (const num of nums) {
      if (num > i) {
        continue;
      }
      dp[i] += dp[i - num];
    }
  }

  return dp[target];
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
