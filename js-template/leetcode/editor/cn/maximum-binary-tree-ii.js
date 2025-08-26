/*
 * @lc app=leetcode.cn id=998 lang=javascript
 * @lcpr version=30202
 *
 * [998] 最大二叉树 II
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
 * @param {number} val
 * @return {TreeNode}
 */
let insertIntoMaxTree = function (root, val) {
  if (root === null) {
    return new TreeNode(val);
  }
  // 因为 val 节点是接在原始数组 a 的最后一个元素
  // 如果插入的 val 是最大的，那么原来的这棵树应该是 val 节点的左子树
  if (val > root.val) {
    let temp = root;
    root = new TreeNode(val);
    root.left = temp;
  } else {
    // 如果 val 不是最大的，那么就应该在右子树上，
    root.right = insertIntoMaxTree(root.right, val);
  }

  return root;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [4,1,3,null,null,2]\n5\n
// @lcpr case=end

// @lcpr case=start
// [5,2,4,null,1]\n3\n
// @lcpr case=end

// @lcpr case=start
// [5,2,3,null,1]\n4\n
// @lcpr case=end

 */
