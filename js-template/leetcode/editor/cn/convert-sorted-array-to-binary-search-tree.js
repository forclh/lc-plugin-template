/*
 * @lc app=leetcode.cn id=108 lang=javascript
 * @lcpr version=30202
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * v1 分解问题思想
 * @param {number[]} nums
 * @return {TreeNode}
 */
let sortedArrayToBST = function (nums) {
  // 定义返回由nums[lo,...,hi]构成的二叉搜索树的根节点
  function build(nums, lo, hi) {
    // base case
    if (lo > hi) return null;

    let mid = Math.floor((lo + hi) / 2);
    let root = new TreeNode(nums[mid]);
    // 递归构建左右子树
    root.left = build(nums, lo, mid - 1);
    root.right = build(nums, mid + 1, hi);
    // 返回根节点
    return root;
  }

  return build(nums, 0, nums.length - 1);
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [-10,-3,0,5,9]\n
// @lcpr case=end

// @lcpr case=start
// [1,3]\n
// @lcpr case=end

 */
