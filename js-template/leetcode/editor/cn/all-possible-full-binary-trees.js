/*
 * @lc app=leetcode.cn id=894 lang=javascript
 * @lcpr version=30202
 *
 * [894] 所有可能的真二叉树
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (n) {
  let memo = new Map();

  // 定义：输入一个 n，返回节点树为 n 的所有可能的满二叉树
  function build(n) {
    let result = [];
    if (n === 1) {
      result.push(new TreeNode(0));
      return result;
    }

    // 记忆存储
    if (memo.get(n)) {
      return memo.get(n);
    }

    // 生成左子树和右子树
    for (let i = 1; i < n; i += 2) {
      // i 代表左子树个数（奇数）
      // j 代表右子树个数（奇数）
      let j = n - 1 - i;
      let leftTree = build(i); // 生成所有可能的左子树
      let rightTree = build(j); // 生成所有可能的右子树
      // 左右子树的不同排列也能构成不同的二叉树
      for (let left of leftTree) {
        for (let right of rightTree) {
          // 生成根节点
          let root = new TreeNode(0);
          root.left = left;
          root.right = right;
          // 存入结果列表
          result.push(root);
        }
      }
    }

    memo.set(n, result);
    return result;
  }

  // 根据定义节点数只能为奇数
  if (n % 2 === 0) {
    return [];
  }

  return build(n);
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 7\n
// @lcpr case=end

// @lcpr case=start
// 3\n
// @lcpr case=end

 */
