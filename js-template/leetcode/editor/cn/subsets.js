/*
 * @lc app=leetcode.cn id=78 lang=javascript
 * @lcpr version=30202
 *
 * [78] 子集
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 回溯算法
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsets = function (nums) {
  let result = [];
  let track = []; // 记录路径
  // 回溯算法核心函数，遍历子集问题的回溯树
  function backtrack(start) {
    // 前序遍历位置，每个节点的值都是一个子集
    result.push([...track]);
    for (let i = start; i < nums.length; i++) {
      // 选择
      track.push(nums[i]);
      // 回溯遍历下一层节点
      backtrack(i + 1);
      // 撤销选择
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
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */
