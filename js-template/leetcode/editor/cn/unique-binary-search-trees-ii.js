/*
 * @lc app=leetcode.cn id=95 lang=javascript
 * @lcpr version=30202
 *
 * [95] 不同的二叉搜索树 II
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
 * v1
 * @param {number} n
 * @return {TreeNode[]}
 */
let generateTrees = function (n) {
  let memo = new Map(); // 备忘录-消除重叠子问题
  // 定义：返回[lo, hi]内的数字能够构成的所有 BFS
  function build(lo, hi) {
    let result = [];
    if (lo > hi) {
      return [null];
    }
    if (memo.get(`${lo}-${hi}`)) {
      return memo.get(`${lo}-${hi}`);
    }
    // 1、穷举 root 节点的所有可能。
    for (let i = lo; i <= hi; i++) {
      // 2、递归构造出左右子树的所有有效 BST。
      let leftTreeList = build(lo, i - 1);
      let rightTreeList = build(i + 1, hi);
      // 3、给 root 节点穷举所有左右子树的组合。
      for (let left of leftTreeList) {
        for (let right of rightTreeList) {
          // i 为根节点
          let root = new TreeNode(i); // 根节点要在循环中构造
          root.left = left;
          root.right = right;
          result.push(root);
        }
      }
    }
    memo.set(`${lo}-${hi}`, result);
    return result;
  }

  return build(1, n);
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */
