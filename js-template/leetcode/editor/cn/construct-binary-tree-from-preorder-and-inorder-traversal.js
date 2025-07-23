/*
 * @lc app=leetcode.cn id=105 lang=javascript
 * @lcpr version=30202
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let buildTree = function (preorder, inorder) {
  // 由于没有重复的值，因此可以通过map来简化获取索引的复杂度
  let valToIndex = new Map();
  for (let i = 0; i < inorder.length; i++) {
    valToIndex.set(inorder[i], i);
  }

  return build(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1
  );

  /**
   * 根据前序和中序递归构建二叉树
   * @param {*} preorder 前序数组
   * @param {*} preStart 前序开始位置
   * @param {*} preEnd 前序结束位置
   * @param {*} inorder 中序数组
   * @param {*} inStart 中序开始位置
   * @param {*} inEnd 中序结束位置
   */
  function build(preorder, preStart, preEnd, inorder, inStart, inEnd) {
    if (preStart > preEnd) return null;

    // 构造根节点(前序遍历的第一个值就是根节点)
    let rootValue = preorder[preStart];
    let root = new TreeNode(rootValue);

    // 获取中序遍历中根节点的索引
    let index = valToIndex.get(rootValue);

    let leftSize = index - inStart; // 左子树节点的个数
    // 递归构造左右子树
    root.left = build(
      preorder,
      preStart + 1, // 注意开始区间
      preStart + leftSize, // 注意结束区间
      inorder,
      inStart,
      index - 1
    );
    root.right = build(
      preorder,
      preStart + leftSize + 1, // 注意结束区间
      preEnd,
      inorder,
      index + 1,
      inEnd
    );

    return root;
  }
};

// @lc code=end

// your test code here

/*
// @lcpr case=start
// [3,9,20,15,7]\n[9,3,15,20,7]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */
