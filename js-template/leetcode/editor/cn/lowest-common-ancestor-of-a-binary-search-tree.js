/*
 * @lc app=leetcode.cn id=235 lang=javascript
 * @lcpr version=30202
 *
 * [235] 二叉搜索树的最近公共祖先
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * v2 BST的 LCA
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
let lowestCommonAncestor = function (root, p, q) {
  // BST的LCA 一定 min <= root.val <= max
  let min = Math.min(p.val, q.val);
  let max = Math.max(p.val, q.val);
  // 在 BST 中寻找 min 和 max 的最近公共祖先节点
  let find = (root, min, max) => {
    if (root === null) return null;

    if (root.val < min) {
      // 当前节点太小，去右子树找
      return find(root.right, min, max);
    }

    if (root.val > max) {
      // 当前节点太大，去左子树找
      return find(root.left, min, max);
    }
    // min <= root.val <= max
    // 则当前节点就是最近公共祖先
    return root;
  };

  return find(root, min, max);
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [6,2,8,0,4,7,9,null,null,3,5]\n2\n8\n
// @lcpr case=end

// @lcpr case=start
// [6,2,8,0,4,7,9,null,null,3,5]\n2\n4\n
// @lcpr case=end

 */
