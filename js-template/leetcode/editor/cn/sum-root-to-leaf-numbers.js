/*
 * @lc app=leetcode.cn id=129 lang=javascript
 * @lcpr version=30202
 *
 * [129] 求根节点到叶节点数字之和
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
let sumNumbers = function (root) {
  // 保存结果
  let result = 0;
  // 保存当前节点所在的路径
  let path = [];
  // 和枝条相关的问题通常使用遍历俩解决
  function traverse(root) {
    if (root === null) {
      return;
    }

    // 前序位置记录路径
    path.push(root.val);
    // 叶子节点时计算当前路径的值
    if (root.left === null && root.right === null) {
      result += parseInt(path.join(""));
    }

    traverse(root.left);
    traverse(root.right);
    // 后续位置，
    path.pop();
  }
  traverse(root);

  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [4,9,0,5,1]\n
// @lcpr case=end

 */
