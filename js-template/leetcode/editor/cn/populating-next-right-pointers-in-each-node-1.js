/*
 * @lc app=leetcode.cn id=116 lang=javascript
 * @lcpr version=30202
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * v1 遍历的思想
 *
 * 将二叉树中的空隙抽象为一颗三叉树
 * @param {_Node} root
 * @return {_Node}
 */
let connect = function (root) {
  if (root === null) return null;
  traverse(root.left, root.right);
  return root;

  function traverse(node1, node2) {
    if (node1 === null || node2 === null) return;

    // 前序位置：连接下一个节点
    node1.next = node2;

    // 递归遍历
    traverse(node1.left, node1.right);
    traverse(node1.right, node2.left);
    traverse(node2.left, node2.right);
  }
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,4,5,6,7]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
