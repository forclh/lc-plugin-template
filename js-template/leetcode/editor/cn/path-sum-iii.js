/*
 * @lc app=leetcode.cn id=437 lang=javascript
 * @lcpr version=30202
 *
 * [437] 路径总和 III
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
 * v1 遍历的思维模式 + 前缀和
 * 对前序遍历的路径进行前缀和
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
let pathSum = function (root, targetSum) {
  let result = 0;
  let preSum = 0;
  let preSumCount = new Map(); // 根节点开始的路径和：等于该路径和的路径条数
  preSumCount.set(0, 1);

  function traverse(root) {
    if (root === null) return;
    // 前序遍历位置
    preSum += root.val;
    // !从二叉树的根节点开始，路径和为 pathSum - targetSum 的路径条数
    // !就是路径和为 targetSum 的路径条数
    if (preSumCount.has(preSum - targetSum)) {
      // 记录从二叉树的根节点开始，路径和为 pathSum 的路径条数
      result += preSumCount.get(preSum - targetSum);
    }
    // 等价于
    // result += preSumCount.get(preSum - targetSum) || 0;

    if (!preSumCount.has(preSum)) {
      preSumCount.set(preSum, 1);
    } else {
      preSumCount.set(preSum, preSumCount.get(preSum) + 1);
    }
    // 等价于
    // preSumCount.set(preSum, (preSumCount.get(preSum) || 0) + 1)

    traverse(root.left);
    traverse(root.right);

    // !后序遍历位置
    preSumCount.set(preSum, preSumCount.get(preSum) - 1); // 要先减去条数
    preSum -= root.val;
  }

  traverse(root);
  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [10,5,-3,3,2,null,11,3,-2,null,1]\n8\n
// @lcpr case=end

// @lcpr case=start
// [5,4,8,11,null,13,4,7,2,null,null,5,1]\n22\n
// @lcpr case=end

 */
