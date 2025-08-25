/*
 * @lc app=leetcode.cn id=236 lang=javascript
 * @lcpr version=30202
 *
 * [236] 二叉树的最近公共祖先
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  return find(root, p.val, q.val);
};

// 在二叉树中寻找 val1 和 val2 的最近公共祖先节点
let find = function (root, val1, val2) {
  if (root === null) return null;
  // 前序位置
  if (root.val === val1 || root.val === val2) {
    // 如果遇到目标值，直接返回LCA
    return root;
  }

  let left = find(root.left, val1, val2);
  let right = find(root.right, val1, val2);
  // 后序位置，已经知道左右子树是否存在目标值
  // 如果左右子树都找到了，那么root就是LCA
  if (left !== null && right !== null) {
    return root;
  }

  return left !== null ? left : right;
};

// @lc code=end

// your test code here

/*
// @lcpr case=start
// [3,5,1,6,2,0,8,null,null,7,4]\n5\n1\n
// @lcpr case=end

// @lcpr case=start
// [3,5,1,6,2,0,8,null,null,7,4]\n5\n4\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n2\n
// @lcpr case=end

 */
