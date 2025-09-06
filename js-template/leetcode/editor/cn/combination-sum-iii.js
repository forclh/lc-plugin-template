/*
 * @lc app=leetcode.cn id=216 lang=javascript
 * @lcpr version=30202
 *
 * [216] 组合总和 III
 */

import { use } from "react";
import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 回溯算法
 * 子集/组合问题（元素无重复不可复选）
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
let combinationSum3 = function (k, n) {
  let result = [];
  let track = [];
  let sum = 0;

  function backtrack(start) {
    if (track.length === k && sum === n) {
      result.push([...track]);
      return;
    }
    for (let i = start; i <= 9; i++) {
      // 剪枝
      if (sum > n) break;
      // 做选择
      track.push(i);
      sum += i;
      backtrack(i + 1);
      // 撤销选择
      track.pop();
      sum -= i;
    }
  }

  backtrack(1);
  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 3\n7\n
// @lcpr case=end

// @lcpr case=start
// 3\n9\n
// @lcpr case=end

// @lcpr case=start
// 4\n1\n
// @lcpr case=end

 */
