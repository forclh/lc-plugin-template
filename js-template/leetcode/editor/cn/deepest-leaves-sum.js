/*
 * @lc app=leetcode.cn id=1302 lang=javascript
 * @lcpr version=30202
 *
 * [1302] 层数最深叶子节点的和
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
 * BFS v1
 * @param {TreeNode} root
 * @return {number}
 */
let deepestLeavesSum = function (root) {
  let levelSum = root.val;
  let queue = [root];

  while (queue.length > 0) {
    let sz = queue.length;
    levelSum = 0; // 计算每一层的节点和
    for (let i = 0; i < sz; i++) {
      let curNode = queue.shift();
      levelSum += curNode.val;

      if (curNode.left !== null) {
        queue.push(curNode.left);
      }
      if (curNode.right !== null) {
        queue.push(curNode.right);
      }
    }
  }
  // 这就是最后一层的节点和（最后一次迭代）
  return levelSum;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,4,5,null,6,7,null,null,null,null,8]\n
// @lcpr case=end

// @lcpr case=start
// [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]\n
// @lcpr case=end

 */
