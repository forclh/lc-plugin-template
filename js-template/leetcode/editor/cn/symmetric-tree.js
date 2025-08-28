/*
 * @lc app=leetcode.cn id=101 lang=javascript
 * @lcpr version=30202
 *
 * [101] 对称二叉树
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
 * v1 分解问题
 * @param {TreeNode} root
 * @return {boolean}
 */
let isSymmetric = function (root) {
  // 判断两颗子树是否对称
  return check(root.left, root.right);

  function check(p, q) {
    // 两个空节点
    if (p === null && q === null) return true;
    // 一个空节点
    if (p === null || q === null) return false;

    // 没有空节点
    if (p.val !== q.val) {
      return false;
    }
    // 判断左右子树是否镜像对称
    return check(p.left, q.right) && check(p.right, q.left);
  }
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,2,3,4,4,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2,null,3,null,3]\n
// @lcpr case=end

 */
