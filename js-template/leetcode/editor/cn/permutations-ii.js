/*
 * @lc app=leetcode.cn id=47 lang=javascript
 * @lcpr version=30202
 *
 * [47] 全排列 II
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 全排列 + 对同一节点的相同枝条进行剪枝
 * @param {number[]} nums
 * @return {number[][]}
 */
let permuteUnique = function (nums) {
  let result = [];
  let track = [];
  let isUsed = new Array(nums.length).fill(false);
  nums.sort((a, b) => a - b);

  backtrack(nums, result, track, isUsed, 0);
  return result;
};

function backtrack(nums, result, track, isUsed, n) {
  if (n === nums.length) {
    result.push([...track]);
    return;
  }
  let preNum = null;
  // 遍历所有选择
  for (let i = 0; i < nums.length; i++) {
    if (isUsed[i]) {
      continue;
    }
    // 剪枝逻辑：一个节点出现了相同的树枝
    if (nums[i] === preNum) {
      continue;
    }
    track.push(nums[i]);
    isUsed[i] = true;
    preNum = nums[i];
    backtrack(nums, result, track, isUsed, n + 1);
    track.pop();
    isUsed[i] = false;
  }
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

 */
