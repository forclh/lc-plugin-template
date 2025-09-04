/*
 * @lc app=leetcode.cn id=40 lang=javascript
 * @lcpr version=30202
 *
 * [40] 组合总和 II
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 回溯算法
 * 组合问题就是子集问题
 * 等价于找出 candidates 数组中和为 target 的子集
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum2 = function (candidates, target) {
  let result = [];
  let track = [];
  let trackSum = 0;
  // 排序使得重复元素相邻便于后续剪枝
  candidates.sort((a, b) => a - b);
  backtrack(candidates, target, track, trackSum, result, 0);
  return result;
};

function backtrack(candidates, target, track, trackSum, result, start) {
  // base case，达到目标和，找到符合条件的组合
  if (trackSum === target) {
    result.push([...track]);
    return;
  }
  // base case，超过目标和，直接结束
  if (trackSum > target) {
    return;
  }
  for (let i = start; i < candidates.length; i++) {
    // 剪枝
    if (i > start && candidates[i] === candidates[i - 1]) {
      continue;
    }
    // 做选择
    let value = candidates[i];
    track.push(value);
    trackSum += value;
    backtrack(candidates, target, track, trackSum, result, i + 1);
    // 撤销选择
    track.pop(value);
    trackSum -= value;
  }
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [10,1,2,7,6,1,5]\n8\n
// @lcpr case=end

// @lcpr case=start
// [2,5,2,1,2]\n5\n
// @lcpr case=end

 */
