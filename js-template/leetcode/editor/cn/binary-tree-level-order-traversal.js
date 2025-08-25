/*
 * @lc app=leetcode.cn id=102 lang=javascript
 * @lcpr version=30202
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
let levelOrder = function (root) {
  let result = [];
  if (root === null) {
    return result;
  }
  let queue = [];
  queue.push(root);
  // while 循环控制从上向下一层层遍历
  while (queue.length !== 0) {
    let sz = queue.length;
    // 记录这一层的节点值
    let curLevel = [];
    // for 循环控制每一层从左向右遍历
    for (let i = 0; i < sz; i++) {
      let curNode = queue.shift();
      curLevel.push(curNode.val);

      if (curNode.left !== null) {
        queue.push(curNode.left);
      }

      if (curNode.right !== null) {
        queue.push(curNode.right);
      }
    }
    result.push(curLevel);
  }

  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
