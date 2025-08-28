/*
 * @lc app=leetcode.cn id=543 lang=javascript
 * @lcpr version=30202
 *
 * [543] 二叉树的直径
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
 * v1 分解问题
 * @param {TreeNode} root
 * @return {number}
 */
let diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;
  // 返回一颗二叉树的最大深度
  function maxdepth(root) {
    if (root === null) {
      return 0;
    }
    let left = maxdepth(root.left);
    let right = maxdepth(root.right);
    // 后序遍历位置计算最大直径
    maxDiameter = Math.max(maxDiameter, left + right);

    return Math.max(left, right) + 1;
  }
  maxdepth(root);
  return maxDiameter;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */
