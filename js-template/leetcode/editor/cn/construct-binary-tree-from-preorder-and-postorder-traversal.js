/*
 * @lc app=leetcode.cn id=889 lang=javascript
 * @lcpr version=30202
 *
 * [889] 根据前序和后序遍历构造二叉树
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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
let constructFromPrePost = function (preorder, postorder) {
  // 由于树中没有重复值，所以可以使用map来简化索引查找的复杂度
  let valToIndex = new Map();
  for (let i = 0; i < postorder.length; i++) {
    valToIndex.set(postorder[i], i);
  }

  return build(
    preorder,
    0,
    preorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  );

  // 定义：根据 preorder[preStart..preEnd] 和 postorder[postStart..postEnd]
  // 构建二叉树，并返回根节点。
  function build(preorder, preStart, preEnd, postorder, postStart, postEnd) {
    if (preStart > preEnd) return null;

    // 只有一个元素的之后直接返回该元素为根结点（否则后续preorder[preStart + 1]会越界）
    if (preStart === preEnd) {
      return new TreeNode(preorder[preStart]);
    }
    // 构造根节点(前序遍历的第一个值)
    let rootValue = preorder[preStart];
    let root = new TreeNode(rootValue);

    // 构造左右子树
    let leftRootValue = preorder[preStart + 1]; // 获取左子树的根节点
    // 获取左子树的根节点在后续遍历中的索引，从而确定左右子树的分界点
    let index = valToIndex.get(leftRootValue);
    let leftSize = index - postStart + 1; // 左子树的个数
    root.left = build(
      preorder,
      preStart + 1,
      preStart + leftSize, // 注意结束区间
      postorder,
      postStart,
      index
    );
    root.right = build(
      preorder,
      preStart + leftSize + 1,
      preEnd,
      postorder,
      index + 1,
      postEnd - 1 // 注意结束区间
    );

    return root;
  }
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,4,5,3,6,7]\n[4,5,2,6,7,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n[1]\n
// @lcpr case=end

 */
