/*
 * @lc app=leetcode.cn id=94 lang=javascript
 * @lcpr version=30202
 *
 * [94] 二叉树的中序遍历
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
 * @param {TreeNode} root
 * @return {number[]}
 */
let inorderTraversal = function (root) {
  let result = [];

  function traverse(root) {
    if (root === null) {
      return;
    }

    traverse(root.left);
    result.push(root.val);
    traverse(root.right);
  }

  traverse(root);

  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,null,2,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
