/*
 * @lc app=leetcode.cn id=114 lang=javascript
 * @lcpr version=30304
 *
 * [114] 二叉树展开为链表
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
 * 函数定义：给定一颗二叉树的根节点，将其拉平为单链表
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function (root) {
  if (root === null) return null;

  // 拉平左右子树
  flatten(root.left);
  flatten(root.right);

  // 后序位置
  // 1、左右子树已经被拉平成一条链表
  const left = root.left;
  const right = root.right;
  // 2、将左子树作为右子树
  root.left = null;
  root.right = left;

  // 3、将原先的右子树接到当前右子树的末端
  let p = root;
  while (p.right !== null) {
    p = p.right;
  }
  p.right = right;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,5,3,4,null,6]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */
