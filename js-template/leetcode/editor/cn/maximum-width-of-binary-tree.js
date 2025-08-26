/*
 * @lc app=leetcode.cn id=662 lang=javascript
 * @lcpr version=30202
 *
 * [662] 二叉树最大宽度
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
 * BFS + 对完全二叉树进行相对编号
 * @param {TreeNode} root
 * @return {number}
 */
let widthOfBinaryTree = function (root) {
  // 记录最大的宽度
  let maxWidth = 1;
  // 记录节点和对应编号
  let queue = [{ node: root, id: 1 }];

  while (queue.length > 0) {
    let sz = queue.length;
    let startId = queue[0].id;
    let endId = queue[sz - 1].id;
    for (let i = 0; i < sz; i++) {
      let { node, id } = queue.shift();
      // 相对id为当前节点的id - 当前层的最小id
      // 使用相对 id 来防止 二叉树层数太深(>50)超过js安全数字范围
      let relativeId = id - startId;
      // 左右子节点入队，同时记录对应节点的编号
      // 利用完全二叉树的性质，可以从父节点推算子节点的id
      if (node.left !== null) {
        queue.push({ node: node.left, id: 2 * relativeId });
      }
      if (node.right !== null) {
        queue.push({ node: node.right, id: 2 * relativeId + 1 });
      }
    }

    maxWidth = Math.max(maxWidth, endId - startId + 1);
  }

  return maxWidth;
};

// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,3,2,5,3,null,9]\n
// @lcpr case=end

// @lcpr case=start
// [1,3,2,5,null,null,9,6,null,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,3,2,5]\n
// @lcpr case=end

 */
