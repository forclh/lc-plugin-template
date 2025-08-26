/*
 * @lc app=leetcode.cn id=116 lang=javascript
 * @lcpr version=30202
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * 层序遍历
 * @param {_Node} root
 * @return {_Node}
 */
let connect = function (root) {
  if (root === null) {
    return null;
  }

  let queue = [root];
  while (queue.length > 0) {
    let sz = queue.length;
    let pre = null; // 保存当前层中的上一个节点
    for (let i = 0; i < sz; i++) {
      let curNode = queue.shift();
      // 链接当前层所有节点的 next 指针
      if (pre !== null) {
        pre.next = curNode;
      }
      pre = curNode;

      if (curNode.left !== null) {
        queue.push(curNode.left);
      }

      if (curNode.right !== null) {
        queue.push(curNode.right);
      }
    }
  }

  return root;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,4,5,6,7]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
