/*
 * @lc app=leetcode.cn id=100 lang=javascript
 * @lcpr version=30202
 *
 * [100] 相同的树
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
 * DFS v1 分解问题思想
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
let isSameTree = function (p, q) {
  // 都是空节点
  if (!p && !q) return true;
  // 有一个非空节点，另一个是空节点
  if (!p || !q) return false;
  // 都是非空节点
  if (p.val !== q.val) {
    return false;
  }

  let left = isSameTree(p.left, q.left);
  let right = isSameTree(p.right, q.right);

  return left && right;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3]\n[1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n[1,null,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,1]\n[1,1,2]\n
// @lcpr case=end

 */
