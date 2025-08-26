/*
 * @lc app=leetcode.cn id=107 lang=javascript
 * @lcpr version=30202
 *
 * [107] 二叉树的层序遍历 II
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
 * 层序遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
let levelOrderBottom = function (root) {
  let result = [];
  if (root === null) {
    return result;
  }

  let queue = [root];
  while (queue.length > 0) {
    let sz = queue.length;
    // 记录当前层的节点值
    let res = [];
    for (let i = 0; i < sz; i++) {
      let curNode = queue.shift();
      res.push(curNode.val);

      if (curNode.left !== null) {
        queue.push(curNode.left);
      }

      if (curNode.right !== null) {
        queue.push(curNode.right);
      }
    }
    // 添加到结果列表开头，自下而上返回结果
    result.unshift(res);
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
