/*
 * @lc app=leetcode.cn id=988 lang=javascript
 * @lcpr version=30202
 *
 * [988] 从叶结点开始的最小字符串
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
 * @return {string}
 */
let smallestFromLeaf = function (root) {
  let result = "";
  if (root === null) {
    return result;
  }
  let path = [];
  function traverse(root) {
    if (root === null) {
      return;
    }
    // 前序位置
    // 将数字转换为字母，并且反向存储
    path.unshift(String.fromCharCode("a".charCodeAt(0) + root.val));
    // 叶子节点
    if (root.left === null && root.right === null) {
      let pathStr = path.join("");
      // 初始result为空时可以直接设置
      if (!result) {
        result = pathStr;
      }

      // 比较字母表顺序
      result = result > pathStr ? pathStr : result;
    }

    traverse(root.left);
    traverse(root.right);
    // 后序位置
    path.shift();
  }

  traverse(root);

  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [0,1,2,3,4,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [25,1,3,1,3,0,2]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,1,null,1,0,null,0]\n
// @lcpr case=end

 */
