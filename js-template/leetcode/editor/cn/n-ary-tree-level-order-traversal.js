/*
 * @lc app=leetcode.cn id=429 lang=javascript
 * @lcpr version=30202
 *
 * [429] N 叉树的层序遍历
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 多叉树层序遍历
 * @param {_Node|null} root
 * @return {number[][]}
 */
let levelOrder = function (root) {
  let result = [];
  if (root === null) {
    return result;
  }

  let queue = [root];
  while (queue.length > 0) {
    let level = [];
    let sz = queue.length;
    for (let i = 0; i < sz; i++) {
      let curNode = queue.shift();
      level.push(curNode.val);
      // 多叉树可能有多个子节点，将所有子节点都加入队列
      for (let child of curNode.children) {
        queue.push(child);
      }
    }
    result.push(level);
  }
  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,null,3,2,4,null,5,6]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]\n
// @lcpr case=end

 */
