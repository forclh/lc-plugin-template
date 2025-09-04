/*
 * @lc app=leetcode.cn id=39 lang=javascript
 * @lcpr version=30202
 *
 * [39] 组合总和
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 回溯算法
 * 与无重复不可复选的子集/组合问题相类比
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum = function (candidates, target) {
  let result = [];
  let track = [];
  let trackSum = 0;

  backtrack(candidates, target, result, track, trackSum, 0);
  return result;
};

function backtrack(candidates, target, result, track, trackSum, start) {
  // base case
  if (trackSum === target) {
    result.push([...track]);
    return;
  }
  // base case
  if (trackSum > target) {
    return;
  }

  for (let i = start; i < candidates.length; i++) {
    let value = candidates[i];
    track.push(value);
    trackSum += value;
    // 与无重复不可复选的子集/组合问题区别在于 start 变量的设置
    backtrack(candidates, target, result, track, trackSum, i);
    track.pop();
    trackSum -= value;
  }
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [2,3,6,7]\n7\n
// @lcpr case=end

// @lcpr case=start
// [2,3,5]\n8\n
// @lcpr case=end

// @lcpr case=start
// [2]\n1\n
// @lcpr case=end

 */
