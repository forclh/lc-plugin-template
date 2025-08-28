/*
 * @lc app=leetcode.cn id=124 lang=javascript
 * @lcpr version=30202
 *
 * [124] 二叉树中的最大路径和
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
 * v1 分解问题思想（不经过根节点的路径问题）
 * 思考过程：
 * 对于可以不经过根节点的路径问题，可以先看作是经过节点的路径问题来考虑
 * 就可以得出最大路径和=max(0, 左子树最大路径和) + max(0,右子树最大路径和) + 1
 * 然后把这个计算过程放到二叉树的每一个节点上（后序位置），比较更新最大路径和即可。
 * 因此需要定义一个递归函数用于计算经过根节点的单边最大路径和
 * @param {TreeNode} root
 * @return {number}
 */
let maxPathSum = function (root) {
  let maxSum = Number.MIN_SAFE_INTEGER;

  // 定义：计算给定root的二叉树经过跟节点的最大单边路径和
  function oneSideMax(root) {
    if (root === null) {
      return 0;
    }

    let left = Math.max(0, oneSideMax(root.left));
    let right = Math.max(0, oneSideMax(root.right));
    // 后序位置
    maxSum = Math.max(maxSum, left + right + root.val);

    return Math.max(left, right) + root.val;
  }
  oneSideMax(root);
  return maxSum;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [-10,9,20,null,null,15,7]\n
// @lcpr case=end

 */
