/*
 * @lc app=leetcode.cn id=404 lang=javascript
 * @lcpr version=30202
 *
 * [404] 左叶子之和
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
 * v1 遍历思想
 * @param {TreeNode} root
 * @return {number}
 */
let sumOfLeftLeaves = function (root) {
  let sum = 0;

  function traverse(root, isLeft) {
    if (root === null) {
      return;
    }
    // 左子叶子
    if (root.left === null && root.right === null && isLeft) {
      sum += root.val;
    }
    traverse(root.left, true);
    traverse(root.right, false);
  }
  traverse(root, null);

  return sum;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
