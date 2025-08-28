/*
 * @lc app=leetcode.cn id=98 lang=javascript
 * @lcpr version=30202
 *
 * [98] 验证二叉搜索树
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
 * DFS v2
 * @param {TreeNode} root
 * @return {boolean}
 */
let isValidBST = function (root) {
  // 定义：该函数返回 root 为根的子树的所有节点是否满足 max.val > root.val > min.val
  function valid(root, max, min) {
    if (root === null) {
      return true;
    }
    // 若 root.val 不符合 max 和 min 的限制，说明不是合法 BST
    if (max !== null && root.val >= max.val) {
      return false;
    }

    if (min !== null && root.val <= min.val) {
      return false;
    }
    // 根据定义，限定左子树的最大值是 root.val，右子树的最小值是 root.val
    return valid(root.left, root, min) && valid(root.right, max, root);
  }
  return valid(root, null, null);
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [5,1,4,null,null,3,6]\n
// @lcpr case=end

 */
