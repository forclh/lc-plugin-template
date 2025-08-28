/*
 * @lc app=leetcode.cn id=230 lang=javascript
 * @lcpr version=30202
 *
 * [230] 二叉搜索树中第 K 小的元素
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
 * v2
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
let kthSmallest = function (root, k) {
  // 记录结果
  let result = 0;
  let rank = 0;
  function traverse(root) {
    if (root === null) {
      return;
    }

    traverse(root.left);
    // 中序位置
    rank++;
    if (rank === k) {
      result = root.val;
      return;
    }
    traverse(root.right);
  }

  traverse(root);
  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [3,1,4,null,2]\n1\n
// @lcpr case=end

// @lcpr case=start
// [5,3,6,2,4,null,null,1]\n3\n
// @lcpr case=end

 */
