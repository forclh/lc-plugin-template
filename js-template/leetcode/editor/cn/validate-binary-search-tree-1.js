/*
 * @lc app=leetcode.cn id=98 lang=javascript
 * @lcpr version=30202
 *
 * [98] 验证二叉搜索树
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
 * v1 中序遍历二叉树，判断是否严格递增
 * @param {TreeNode} root
 * @return {boolean}
 */
let isValidBST = function (root) {
  let isBST = true;
  let pre = null;

  function traverse(root) {
    if (root === null || !isBST) return;

    traverse(root.left);

    if (pre !== null && root.val <= pre) {
      isBST = false;
      return;
    }
    pre = root.val;
    traverse(root.right);
  }

  traverse(root);

  return isBST;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [5,1,4,null,null,3,6]\n
// @lcpr case=end

 */
