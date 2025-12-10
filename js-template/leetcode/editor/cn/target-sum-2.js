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
 * v1 回溯算法(超时)
 * @param {number[]} nums 非负整数数组
 * @param {number} target 目标和（可能为负数）
 * @return {number} 返回能达到目标和的表达式数量
 */
let findTargetSumWays = function (nums, target) {
  if (nums.length === 0) return 0;
  let result = 0;
  backtrack(nums, 0, target);
  return result;
};

function backtrack(nums, i, remain) {
  if (i === nums.length) {
    if (remain === 0) {
      result++;
    }
    return;
  }

  // 选择加号
  remain -= nums[i];
  backtrack(nums, i + 1, remain);
  remain += nums[i]; // 撤销选择

  // 选择减号
  remain += nums[i];
  backtrack(nums, i + 1, remain);
  remain -= nums[i]; // 撤销选择
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
