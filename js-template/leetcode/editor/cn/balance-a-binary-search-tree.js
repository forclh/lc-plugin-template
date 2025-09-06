/*
 * @lc app=leetcode.cn id=1382 lang=javascript
 * @lcpr version=30202
 *
 * [1382] 将二叉搜索树变平衡
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
 * v1 中序遍历转BST
 * @param {TreeNode} root
 * @return {TreeNode}
 */
let balanceBST = function (root) {
  // 中序遍历结果
  let inorder = [];
  let traverse = (root) => {
    if (root === null) return;
    traverse(root.left);
    inorder.push(root.val); // 中序遍历
    traverse(root.right);
  };
  traverse(root);

  // 返回有序数组nums[lo, ..., hi]构造的二叉树的根节点
  let build = (nums, lo, hi) => {
    if (lo > hi) {
      return null;
    }
    let mid = Math.floor((lo + hi) / 2);
    let root = new TreeNode(nums[mid]);

    root.left = build(nums, lo, mid - 1);
    root.right = build(nums, mid + 1, hi);
    return root;
  };
  // 根据中序遍历结果构造二叉树，返回的一定是平衡树
  return build(inorder, 0, inorder.length - 1);
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,null,2,null,3,null,4,null,null]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

 */
