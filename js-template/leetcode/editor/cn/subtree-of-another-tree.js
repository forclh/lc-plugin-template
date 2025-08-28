/*
 * @lc app=leetcode.cn id=572 lang=javascript
 * @lcpr version=30202
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
let isSubtree = function (root, subRoot) {
  if (root === null) {
    return subRoot === null;
  }

  // 判断以 root 为根的二叉树是否和 subRoot 相同
  if (isSameTree(root, subRoot)) {
    return true;
  }
  // 去左右子树中判断是否有和 subRoot 相同的子树
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

// 判断两颗二叉树是否相同
function isSameTree(p, q) {
  // 都是空节点
  if (p === null && q === null) {
    return true;
  }
  // 有一个空节点
  if (p === null || q === null) {
    return false;
  }
  // 都是非空节点
  if (p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [3,4,5,1,2]\n[4,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [3,4,5,1,2,null,null,null,null,0]\n[4,1,2]\n
// @lcpr case=end

 */
