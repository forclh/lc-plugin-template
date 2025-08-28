/*
 * @lc app=leetcode.cn id=701 lang=javascript
 * @lcpr version=30202
 *
 * [701] 二叉搜索树中的插入操作
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
 * v1
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
let insertIntoBST = function (root, val) {
  // 找到空位置插入新节点
  if (root === null) {
    return new TreeNode(val);
  }
  // 目标值小于根节点，插入到左子树，并返回插入后的根节点
  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  }
  // 目标值大于根节点，插入到右子树，并返回插入后的根节点
  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  }
  // 返回 root，上层递归会接收返回值作为子节点
  return root;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [4,2,7,1,3]\n5\n
// @lcpr case=end

// @lcpr case=start
// [40,20,60,10,30,50,70]\n25\n
// @lcpr case=end

// @lcpr case=start
// [4,2,7,1,3,null,null,null,null,null,null]\n5\n
// @lcpr case=end

 */
