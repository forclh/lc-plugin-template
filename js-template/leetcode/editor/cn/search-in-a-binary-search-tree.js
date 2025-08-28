/*
 * @lc app=leetcode.cn id=700 lang=javascript
 * @lcpr version=30202
 *
 * [700] 二叉搜索树中的搜索
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
 * v1
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
let searchBST = function (root, val) {
  // 递归调用子树的节点有可能为 null
  if (root === null) {
    return null;
  }
  // 搜索左子树
  if (root.val > val) {
    return searchBST(root.left, val);
  }
  // 搜索右子树
  if (root.val < val) {
    return searchBST(root.right, val);
  }
  // 目标值等于当前节点值，直接返回
  return root;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [4,2,7,1,3]\n2\n
// @lcpr case=end

// @lcpr case=start
// [4,2,7,1,3]\n5\n
// @lcpr case=end

 */
