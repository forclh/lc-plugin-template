/*
 * @lc app=leetcode.cn id=1049 lang=javascript
 * @lcpr version=30304
 *
 * [1049] 最后一块石头的重量 II
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 动态规划(子集背包问题:自底向上+空间压缩)
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeightII = function (stones) {
  // 由于石头之间会相互抵消,那么本题求的就是将数组分为两个集合,求两个集合和的最小差值
  // 想要插值最小则集合的和应该接近 sum / 2
  // 因此问题转换为,给定一个容量为 sum / 2 的背包和重量为stones[i]的物品,请问背包能够装的最大重量是多少
  const n = stones.length;
  let sum = stones.reduce((a, b) => a + b);
  let target = Math.floor(sum / 2);

  // 定义: dp[j]表示当容量为j时,背包能够装下的最大重量
  const dp = new Array(target + 1).fill(0);

  // 先遍历物品
  for (let i = 0; i < n; i++) {
    // 再倒序遍历容量
    for (let j = target; j >= stones[i]; j--) {
      dp[j] = Math.max(
        dp[j], // 不放
        dp[j - stones[i]] + stones[i] // 放
      );
    }
  }

  return sum - dp[target] * 2;
};
// @lc code=end

// your test code here
lastStoneWeightII([31, 26, 33, 21, 40]);
/*
// @lcpr case=start
// [2,7,4,1,8,1]\n
// @lcpr case=end

// @lcpr case=start
// [31,26,33,21,40]\n
// @lcpr case=end

 */
