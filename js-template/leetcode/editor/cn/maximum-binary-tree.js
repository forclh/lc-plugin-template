/*
 * @lc app=leetcode.cn id=654 lang=javascript
 * @lcpr version=30202
 *
 * [654] 最大二叉树
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * v1 分解问题的思想
 * @param {number[]} nums
 * @return {TreeNode}
 */
let constructMaximumBinaryTree = function (nums) {
  return build(nums, 0, nums.length - 1);
};

// 定义：将 nums[start..end] 构造成符合条件的树，返回根节点
let build = function (nums, start, end) {
  if (start > end) return null;

  // 找到数组中的最大值和对应的索引
  let maxValue = -Infinity;
  let index = start;
  for (let i = start; i <= end; i++) {
    if (nums[i] > maxValue) {
      maxValue = nums[i];
      index = i;
    }
  }
  // 先构造出根节点
  let root = new TreeNode(maxValue);
  // 递归调用构造左右子树
  root.left = build(nums, start, index - 1);
  root.right = build(nums, index + 1, end);
  return root;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [3,2,1,6,0,5]\n
// @lcpr case=end

// @lcpr case=start
// [3,2,1]\n
// @lcpr case=end

 */
