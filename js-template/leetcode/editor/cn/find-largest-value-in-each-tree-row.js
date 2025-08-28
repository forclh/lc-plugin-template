/*
 * @lc app=leetcode.cn id=515 lang=javascript
 * @lcpr version=30202
 *
 * [515] 在每个树行中找最大值
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
let largestValues = function (root) {
  let result = [];
  if (root === null) {
    return result;
  }

  let queue = [root];
  while (queue.length > 0) {
    let sz = queue.length;
    let maxLevel = queue[0].val;
    for (let i = 0; i < sz; i++) {
      let curNode = queue.shift();
      maxLevel = Math.max(maxLevel, curNode.val);

      if (curNode.left !== null) {
        queue.push(curNode.left);
      }

      if (curNode.right !== null) {
        queue.push(curNode.right);
      }
    }
    result.push(maxLevel);
  }

  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,3,2,5,3,null,9]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

 */
