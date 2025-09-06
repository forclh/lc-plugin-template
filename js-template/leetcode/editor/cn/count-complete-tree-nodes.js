/*
 * @lc app=leetcode.cn id=222 lang=javascript
 * @lcpr version=30202
 *
 * [222] 完全二叉树的节点个数
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
 * v1 计算完全二叉树的节点 O(logN * logN)
 * @param {TreeNode} root
 * @return {number}
 */
let countNodes = function (root) {
  let left = root;
  let right = root;
  let lh = 0;
  let rh = 0;
  // 沿最左侧和最右侧分别计算高度
  while (left !== null) {
    left = left.left;
    lh++;
  }

  while (right !== null) {
    right = right.right;
    rh++;
  }
  // 如果高度相同那么就是满二叉树
  if (lh === rh) {
    return Math.pow(2, lh) - 1; // 满二叉树节点个数和高度的关系
  }
  // 如果左右高度不同，那么就按照普通二叉树的逻辑计算
  return 1 + countNodes(root.left) + countNodes(root.right);
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,4,5,6]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
