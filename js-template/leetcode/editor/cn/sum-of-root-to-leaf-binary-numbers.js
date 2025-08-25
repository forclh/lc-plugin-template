/*
 * @lc app=leetcode.cn id=1022 lang=javascript
 * @lcpr version=30202
 *
 * [1022] 从根到叶的二进制数之和
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
 * @param {TreeNode} root
 * @return {number}
 */
let sumRootToLeaf = function (root) {
  let result = 0;
  let path = [];
  function traverse(root) {
    if (root === null) {
      return;
    }

    // 前序位置
    path.push(root.val);

    if (root.left === null && root.right === null) {
      pathStr = path.join("");
      // 二进制转十进制
      result += parseInt(pathStr, 2);
    }
    traverse(root.left);
    traverse(root.right);
    // 后序位置
    path.pop();
  }

  traverse(root);

  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,0,1,0,1,0,1]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */
