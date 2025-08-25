/*
 * @lc app=leetcode.cn id=199 lang=javascript
 * @lcpr version=30202
 *
 * [199] 二叉树的右视图
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
 * BFS 层序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
let rightSideView = function (root) {
  let result = [];
  if (root === null) return result;
  let depth = 0; // 记录当前遍历的节点所在层
  function traverse(root) {
    if (root === null) {
      return;
    }
    // 前序位置
    depth++;

    if (result.length < depth) {
      // 这一层还没有记录值，说明root就是右侧第一个
      result.push(root.val);
    }
    // 先遍历右子树
    traverse(root.right);
    traverse(root.left);
    // 后续位置
    depth--;
  }

  traverse(root);

  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,null,5,null,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,null,null,null,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
