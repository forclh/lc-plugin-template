/*
 * @lc app=leetcode.cn id=958 lang=javascript
 * @lcpr version=30202
 *
 * [958] 二叉树的完全性检验
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
 * BFS(v2)
 * @param {TreeNode} root
 * @return {boolean}
 */
let isCompleteTree = function (root) {
  let flag = false; // 表示是否遇到非空节点
  let queue = [root];

  while (queue.length > 0) {
    let sz = queue.length;

    for (let i = 0; i < sz; i++) {
      let curNode = queue.shift();
      if (curNode === null) {
        // 遇到空节点(后续如果全是空节点那么 flag=true)
        flag = true;
      } else {
        // 如果遇到一个非空节点则检验失败
        if (flag) {
          return false;
        }
        queue.push(curNode.left);
        queue.push(curNode.right);
      }
    }
  }

  return true;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,4,5,6]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5,null,7]\n
// @lcpr case=end

 */
