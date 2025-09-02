/*
 * @lc app=leetcode.cn id=46 lang=javascript
 * @lcpr version=30202
 *
 * [46] 全排列
 */

import { use } from "react";
import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 回溯算法
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function (nums) {
  let result = []; // 结果列表

  let track = []; //记录路径
  let used = new Array(nums.length).fill(false); // 选择列表（配合num）

  function backtrack(track, used) {
    // 路径：记录在 track 中
    // 选择列表：nums 中不存在于 track 的那些元素（used[i] 为 false）
    // 结束条件：nums 中的元素全都在 track 中出现
    if (track.length === nums.length) {
      // 触发结束条件
      result.push([...track]); // 注意点: 传递的值是地址引用
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      // 前序位置
      // 做选择
      track.push(nums[i]);
      used[i] = true;
      // 进入下一层决策树
      backtrack(track, used);
      // 后序位置
      // 撤销当前选择
      track.pop();
      used[i] = false;
    }
  }

  backtrack(track, used);
  return result;
};
// @lc code=end

// your test code here

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
