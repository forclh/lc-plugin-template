/*
 * @lc app=leetcode.cn id=257 lang=javascript
 * @lcpr version=30202
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
let binaryTreePaths = function (root) {
  // 存放最终路径结果
  let result = [];
  // 存放当前节点的路径
  let path = [];
  // 遍历二叉树
  function traverse(root) {
    if (root === null) {
      return;
    }
    // 前序位置放入路径上的节点
    path.push(root.val);
    // 遇到叶子节点就构造路径
    if (root.left === null && root.right === null) {
      let pathStr = path.join("->");
      result.push(pathStr);
    }
    traverse(root.left);
    traverse(root.right);
    // 后续位置弹出当前节点
    path.pop();
  }

  traverse(root);

  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,null,5]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
