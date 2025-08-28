/*
 * @lc app=leetcode.cn id=623 lang=javascript
 * @lcpr version=30202
 *
 * [623] 在二叉树中增加一行
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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
let addOneRow = function (root, val, depth) {
  // 插入根节点时单独考虑
  if (depth === 1) {
    let node = new TreeNode(val);
    node.left = root;
    return node;
  }

  function traverse(root, dep) {
    if (root === null) {
      return;
    }
    if (dep === depth - 1) {
      // 创建新节点
      let leftNode = new TreeNode(val);
      let rightNode = new TreeNode(val);
      leftNode.left = root.left;
      rightNode.right = root.right;
      root.left = leftNode;
      root.right = rightNode;
      return;
    }

    traverse(root.left, dep + 1);
    traverse(root.right, dep + 1);
  }
  traverse(root, 1);

  return root;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [4,2,6,3,1,5]\n1\n2\n
// @lcpr case=end

// @lcpr case=start
// [4,2,null,3,1]\n1\n3\n
// @lcpr case=end

 */
