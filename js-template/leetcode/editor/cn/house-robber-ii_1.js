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
 * v1.1 动态规划(二维数组版本)
 * @param {number[]} nums
 * @return {number}
 */
let rob = function (nums) {
  let n = nums.length;
  if (n === 1) return nums[0];
  if (n === 2) return Math.max(nums[0], nums[1]);

  // dp[i][j] 表示在区间 nums[i...j] 中能抢到的最大值
  // 初始化为 0
  let dp = Array.from({ length: n }, () => new Array(n).fill(0));

  // base case: 区间长度为 1 (i == j)
  for (let i = 0; i < n; i++) {
    dp[i][i] = nums[i];
  }

  // 从后往前遍历 i (起始点)
  for (let i = n - 2; i >= 0; i--) {
    // 从 i+1 往后遍历 j (结束点)
    for (let j = i + 1; j < n; j++) {
      // 状态转移：
      // 1. 抢第 i 间房：获得 nums[i]，剩下的区间变为 [i+2...j]
      //    如果 i+2 > j，说明没有房子可抢了，值为 0
      // 2. 不抢第 i 间房：区间变为 [i+1...j]

      const robCurrent = nums[i] + (i + 2 <= j ? dp[i + 2][j] : 0);
      const skipCurrent = dp[i + 1][j];

      dp[i][j] = Math.max(robCurrent, skipCurrent);
    }
  }

  // 环形问题拆解：
  // 情况1：考虑包含首元素，但不包含尾元素 -> 区间 [0, n-2]
  // 情况2：考虑包含尾元素，但不包含首元素 -> 区间 [1, n-1]
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
