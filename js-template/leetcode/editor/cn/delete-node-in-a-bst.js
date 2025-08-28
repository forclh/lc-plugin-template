/*
 * @lc app=leetcode.cn id=450 lang=javascript
 * @lcpr version=30202
 *
 * [450] 删除二叉搜索树中的节点
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
 * v1 复杂的问题分情况讨论
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
let deleteNode = function (root, key) {
  if (root === null) {
    return null;
  }
  // 找到了就删除
  if (root.val === key) {
    // 情况一：该节点没有子节点
    if (root.left === null && root.right === null) {
      return null;
    }
    // 情况三：该节点有两个子节点
    else if (root.left !== null && root.right !== null) {
      // 找到右子树最小的节点（或者左子树最大的节点）
      let minNode = getMin(root.right);
      // 把 root 改成 minNode
      root.val = minNode.val;
      // 转而去删除 minNode
      root.right = deleteNode(root.right, minNode.val);
    } else {
      // 情况二：该节点有一个子节点
      return root.left !== null ? root.left : root.right;
    }
  } else if (root.val > key) {
    // 去左子树找
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    // 去右子树找
    root.right = deleteNode(root.right, key);
  }

  return root;
};

// 定义：找到给定 BST 中的最小节点
function getMin(root) {
  if (root === null) {
    return null;
  }
  // BST 中最左边的节点就是最小节点
  while (root.left !== null) {
    root = root.left;
  }

  return root;
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [5,3,6,2,4,null,7]\n3\n
// @lcpr case=end

// @lcpr case=start
// [5,3,6,2,4,null,7]\n0\n
// @lcpr case=end

// @lcpr case=start
// []\n0\n
// @lcpr case=end

 */
