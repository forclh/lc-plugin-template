/*
 * @lc app=leetcode.cn id=590 lang=javascript
 * @lcpr version=30202
 *
 * [590] N 叉树的后序遍历
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 多叉树后序遍历
 * @param {_Node|null} root
 * @return {number[]}
 */
let postorder = function (root) {
  let result = [];
  if (root === null) {
    return result;
  }

  function traverse(root) {
    if (root === null) {
      return;
    }

    for (let i = 0; i < root.children.length; i++) {
      traverse(root.children[i]);
    }
    result.push(root.val);
  }

  traverse(root);

  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,null,3,2,4,null,5,6]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]\n
// @lcpr case=end

 */
