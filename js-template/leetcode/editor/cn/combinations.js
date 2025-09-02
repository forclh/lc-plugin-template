/*
 * @lc app=leetcode.cn id=77 lang=javascript
 * @lcpr version=30202
 *
 * [77] 组合
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 回溯算法（组合问题等同子集问题）
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let combine = function (n, k) {
  let result = [];
  let track = [];

  function backtrack(start) {
    // 前序位置
    if (k === track.length) {
      // 大小为 k 的组合就是大小为 k 的子集
      result.push([...track]);
    }

    for (let i = start; i < n; i++) {
      track.push(i + 1);
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
// 4\n2\n
// @lcpr case=end

// @lcpr case=start
// 1\n1\n
// @lcpr case=end

 */
