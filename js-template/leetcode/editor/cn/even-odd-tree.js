/*
 * @lc app=leetcode.cn id=1609 lang=javascript
 * @lcpr version=30202
 *
 * [1609] 奇偶树
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
 * BFS v2
 * @param {TreeNode} root
 * @return {boolean}
 */
let isEvenOddTree = function (root) {
  let queue = [root];
  let even = true; // 记录奇偶层数
  while (queue.length > 0) {
    let sz = queue.length;
    // 记录前一个节点，便于判断是否递增/递减(给一个不影响第一个节点判断逻辑的初始值)
    let pre = even ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < sz; i++) {
      let curNode = queue.shift();
      // 偶数层
      if (even) {
        if (curNode.val % 2 !== 1 || curNode.val <= pre.val) {
          return false;
        }
        // 奇数层
      } else {
        if (curNode.val % 2 !== 0 || curNode.val >= pre.val) {
          return false;
        }
      }
      pre = curNode;

      if (curNode.left !== null) {
        queue.push(curNode.left);
      }
      if (curNode.right !== null) {
        queue.push(curNode.right);
      }
    }
    // 奇偶层数切换
    even = !even;
  }
  return true;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,10,4,3,null,7,9,12,8,6,null,null,2]\n
// @lcpr case=end

// @lcpr case=start
// [5,4,2,3,3,7]\n
// @lcpr case=end

// @lcpr case=start
// [5,9,1,3,5,7]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [11,8,6,1,3,9,11,30,20,18,16,12,10,4,2,17]\n
// @lcpr case=end

 */
