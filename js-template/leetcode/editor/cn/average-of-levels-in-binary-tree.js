/*
 * @lc app=leetcode.cn id=637 lang=javascript
 * @lcpr version=30202
 *
 * [637] 二叉树的层平均值
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
 * BFS
 * @param {TreeNode} root
 * @return {number[]}
 */
let averageOfLevels = function (root) {
  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let sz = queue.length;
    let sum = 0; // 存放当前行的节点值之和
    for (let i = 0; i < sz; i++) {
      let curNode = queue.shift();
      sum += curNode.val;

      if (curNode.left !== null) {
        queue.push(curNode.left);
      }

      if (curNode.right !== null) {
        queue.push(curNode.right);
      }
    }
    let mean = sum / sz;
    result.push(mean);
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
// [3,9,20,15,7]\n
// @lcpr case=end

 */
