/*
 * @lc app=leetcode.cn id=106 lang=javascript
 * @lcpr version=30202
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
let buildTree = function (inorder, postorder) {
  // 由于树中没有重复值，因此可以使用map来简化索引查找的复杂度
  let valToIndex = new Map();
  for (let i = 0; i < inorder.length; i++) {
    valToIndex.set(inorder[i], i);
  }

  return build(
    inorder,
    0,
    inorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  );

  /**
   * 根据中序和后续遍历递归构造二叉树，并返回根节点
   * @param {*} inorder 中序遍历数组
   * @param {*} inStart 中序遍历起始索引
   * @param {*} inEnd 中序遍历终止索引
   * @param {*} postorder 后续遍历数组
   * @param {*} postStart 后续遍历起始索引
   * @param {*} postEnd 后续遍历终止索引
   */
  function build(inorder, inStart, inEnd, postorder, postStart, postEnd) {
    if (inStart > inEnd) return null;

    // 构造根节点(后序遍历的最后一个值)
    let rootValue = postorder[postEnd];
    let root = new TreeNode(rootValue);
    // 获取中序遍历根节点的位置
    let index = valToIndex.get(rootValue);
    // 获取左子树的节点个数
    let leftSize = index - inStart;
    // 递归构造左右子树
    root.left = build(
      inorder,
      inStart,
      index - 1,
      postorder,
      postStart,
      postStart + leftSize - 1 // 注意结束区间
    );
    root.right = build(
      inorder,
      index + 1,
      inEnd,
      postorder,
      postStart + leftSize, // 注意开始区间
      postEnd - 1 // 注意结束区间
    );
    return root;
  }
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [9,3,15,20,7]\n[9,15,7,20,3]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */
