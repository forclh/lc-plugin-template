/*
 * @lc app=leetcode.cn id=538 lang=javascript
 * @lcpr version=30202
 *
 * [538] 把二叉搜索树转换为累加树
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
 * DFS v1 从大到小的中序遍历
 * @param {TreeNode} root
 * @return {TreeNode}
 */
let convertBST = function (root) {
  if (root === null) {
    return null;
  }
  let sum = 0;

  function traverse(root) {
    if (root === null) {
      return;
    }

    // 从大到小
    traverse(root.right);
    // 中序位置
    sum += root.val;
    root.val = sum;
    traverse(root.left);
  }

  traverse(root);
  return root;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]\n
// @lcpr case=end

// @lcpr case=start
// [0,null,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,0,2]\n
// @lcpr case=end

// @lcpr case=start
// [3,2,4,1]\n
// @lcpr case=end

 */
