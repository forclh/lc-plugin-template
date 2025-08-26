/*
 * @lc app=leetcode.cn id=103 lang=javascript
 * @lcpr version=30202
 *
 * [103] 二叉树的锯齿形层序遍历
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
let zigzagLevelOrder = function (root) {
  let result = [];
  if (root === null) {
    return result;
  }
  let queue = [root];
  let flag = true;
  while (queue.length > 0) {
    let sz = queue.length;
    let res = [];
    for (let i = 0; i < sz; i++) {
      let curNode = queue.shift();
      // 奇数层从左到右
      if (flag) {
        res.push(curNode.val);
      } else {
        // 偶数层从右到左
        res.unshift(curNode.val);
      }

      if (curNode.left !== null) {
        queue.push(curNode.left);
      }

      if (curNode.right !== null) {
        queue.push(curNode.right);
      }
    }
    // 当前层遍历完毕
    flag = !flag;
    result.push(res);
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
