/*
 * @lc app=leetcode.cn id=226 lang=javascript
 * @lcpr version=30304
 *
 * [226] 翻转二叉树
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
 * v1 遍历的思想
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
  function traverse(root) {
    if (root === null) return;
    // 前序位置：交换左右子树
    [root.left, root.right] = [root.right, root.left];
    traverse(root.left);
    traverse(root.right);
  }

  traverse(root);
  return root;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [4,2,7,1,3,6,9]\n
// @lcpr case=end

 */
