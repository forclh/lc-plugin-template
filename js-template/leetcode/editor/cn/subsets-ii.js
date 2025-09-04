/*
 * @lc app=leetcode.cn id=90 lang=javascript
 * @lcpr version=30202
 *
 * [90] 子集 II
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 回溯算法
 * 对于一个节点如果存在两条值相同的相邻树枝（排序）则需要剪枝
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsetsWithDup = function (nums) {
  let result = [];
  let track = [];
  // 先排序，让相同的元素靠在一起
  nums.sort((a, b) => a - b); // 原地操作

  backtrack(nums, track, result, 0);
  return result;
};

function backtrack(nums, track, result, start) {
  // 前序位置，每个节点的值都是一个子集
  result.push([...track]);

  for (let i = start; i < nums.length; i++) {
    // 剪枝逻辑
    // 两条值相同的枝条只保留第一条
    if (i > start && nums[i] === nums[i - 1]) {
      continue;
    }

    track.push(nums[i]);
    backtrack(nums, track, result, i + 1);
    track.pop();
  }
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,2]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */
