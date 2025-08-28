/*
 * @lc app=leetcode.cn id=530 lang=javascript
 * @lcpr version=30202
 *
 * [530] 二叉搜索树的最小绝对差
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
 * v1 中序遍历的同时记录最小差值
 * @param {TreeNode} root
 * @return {number}
 */
let getMinimumDifference = function (root) {
  let min = Number.MAX_SAFE_INTEGER;
  let pre = null;
  function traverse(root) {
    if (root === null) {
      return;
    }

    traverse(root.left);
    // 中序位置
    if (pre !== null) {
      min = Math.min(min, root.val - pre.val);
    }
    pre = root;
    traverse(root.right);
  }

  traverse(root);
  return min;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [4,2,6,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,0,48,null,null,12,49]\n
// @lcpr case=end

 */
