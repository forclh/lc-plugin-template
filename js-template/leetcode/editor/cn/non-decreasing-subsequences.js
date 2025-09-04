/*
 * @lc app=leetcode.cn id=491 lang=javascript
 * @lcpr version=30202
 *
 * [491] 非递减子序列
 */

import { use } from "react";
import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 回溯算法（子集）
 * 元素可重复不可复选
 * @param {number[]} nums
 * @return {number[][]}
 */
let findSubsequences = function (nums) {
  let result = [];
  let track = [];

  function backtrack(start) {
    // base case 至少有两个元素
    if (track.length >= 2) {
      result.push([...track]);
    }

    // 由于这题不能排序，因此需要借助used集合
    // 来保证递归树的每一层不能出现重复选择
    let used = new Set();
    for (let i = start; i < nums.length; i++) {
      // 剪枝逻辑：
      if (used.has(nums[i])) continue; // 重复值具有相同子集
      if (track.length !== 0 && nums[i] < track[track.length - 1]) continue; // 需要递增子序列

      track.push(nums[i]);
      used.add(nums[i]);
      backtrack(i + 1);
      track.pop();
    }
  }

  backtrack(0);
  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [4,6,7,7]\n
// @lcpr case=end

// @lcpr case=start
// [4,4,3,2,1]\n
// @lcpr case=end

 */
