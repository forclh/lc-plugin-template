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
 * v1 动态规划(解决回溯算法中存在的重叠子问题)
 * @param {number[]} nums 非负整数数组
 * @param {number} target 目标和（可能为负数）
 * @return {number} 返回能达到目标和的表达式数量
 */
let findTargetSumWays = function (nums, target) {
  if (nums.length === 0) return 0;
  const memo = new Map();
  return dp(nums, 0, target, memo);
};
// 定义:dp(nums, i, remain)表示使用nums[i,...]中的元素凑成remain有几种方法
function dp(nums, i, remain, memo) {
  if (i === nums.length) {
    if (remain === 0) {
      return 1;
    }
    return 0;
  }

  const key = `${i},${remain}`;
  // 避免重复计算
  if (memo.has(key)) {
    return memo.get(key);
  }

  const result =
    dp(nums, i + 1, remain + nums[i], memo) +
    dp(nums, i + 1, remain - nums[i], memo);
  // 记入备忘录
  memo.set(key, result);
  return result;
}

// @lc code=end

// your test code here
findTargetSumWays([0], 0);

// @lcpr case=start
// [1,1,1,1,1]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end
