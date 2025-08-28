/*
 * @lc app=leetcode.cn id=951 lang=javascript
 * @lcpr version=30202
 *
 * [951] 翻转等价二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
let flipEquiv = function (root1, root2) {
  if (root1 === null && root2 === null) {
    return true;
  }

  if (root1 === null || root2 === null) {
    return false;
  }
  if (root1.val !== root2.val) {
    return false;
  }

  return (
    // 不翻转子树
    (flipEquiv(root1.left, root2.left) &&
      flipEquiv(root1.right, root2.right)) ||
    // 翻转子树
    (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left))
  );
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,4,5,6,null,null,null,7,8]\n[1,3,2,null,6,4,5,null,null,null,null,8,7]\n
// @lcpr case=end

// @lcpr case=start
// []\n[]\n
// @lcpr case=end

// @lcpr case=start
// []\n[1]\n
// @lcpr case=end

 */
