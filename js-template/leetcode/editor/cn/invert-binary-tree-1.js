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
 * v1 分解问题的思想
 *
 * 函数定义：给定二叉树的根节点，返回翻转后的二叉树的根节点
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
  if (root === null) return null;
  // 翻转左右子树
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  // 然后交换左右子节点
  root.left = right;
  root.right = left;
  return root;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [4,2,7,1,3,6,9]\n
// @lcpr case=end

 */
