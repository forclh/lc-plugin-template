/*
 * @lc app=leetcode.cn id=652 lang=javascript
 * @lcpr version=30202
 *
 * [652] 寻找重复的子树
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
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
let findDuplicateSubtrees = function (root) {
  // 记录所有的子树
  let memo = new Map();
  // 记录出现重复的子树根节点
  let result = [];

  // 使用后序遍历进行子树序列化
  let serialize = function (root) {
    if (root === null) {
      return "#";
    }
    // 左右子树的序列化结果
    let leftStr = serialize(root.left);
    let rightStr = serialize(root.right);
    // 后序位置，计算以自己为根的二叉树序列化结果
    let subTreeStr = leftStr + "," + rightStr + "," + root.val;
    // 获取子树出现的次数
    let freq = memo.get(subTreeStr) || 0;
    if (freq === 1) {
      // 多次重复也只会被加入结果集一次
      result.push(root);
    }
    // 给子树对应的出现次数加一
    memo.set(subTreeStr, freq + 1);
    return subTreeStr;
  };

  serialize(root);

  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,4,null,2,4,null,null,4]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,2,3,null,3,null]\n
// @lcpr case=end

 */
