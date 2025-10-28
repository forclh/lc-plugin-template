/*
 * @lc app=leetcode.cn id=46 lang=javascript
 * @lcpr version=30202
 *
 * [46] 全排列
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 回溯算法(swap)
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function (nums) {
  let result = []; // 结果列表

  function backtrack(start) {
    if (start === nums.length) {
      result.push([...nums]);
      return;
    }
    // 盒的视角(start位置表示当前的盒子)
    for (let i = start; i < nums.length; i++) {
      // 做选择
      swap(nums, start, i);
      // 进入下一层决策树
      backtrack(start + 1);
      // 撤销当前选择
      swap(nums, start, i);
    }
  }

  function swap(nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  backtrack(0);

  return result;
};
// @lc code=end

// your test code here
permute([1, 2, 3]);
/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
