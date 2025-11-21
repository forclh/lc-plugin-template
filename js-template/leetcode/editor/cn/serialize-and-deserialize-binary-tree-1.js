/*
 * @lc app=leetcode.cn id=297 lang=javascript
 * @lcpr version=30202
 *
 * [297] 二叉树的序列化与反序列化
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
 * v1 前序遍历进行编码
 * @param {TreeNode} root
 * @return {string}
 */
let serialize = function (root) {
  const result = [];
  traverse(root);
  return result.join(",");
  function traverse(root) {
    if (root === null) {
      result.push("#");
      return;
    }

    result.push(root.val);
    traverse(root.left);
    traverse(root.right);
  }
};

/**
 * 前序遍历解码
 * @param {string} data
 * @return {TreeNode}
 */
let deserialize = function (data) {
  // 将字符串转化成列表
  const nodes = data.split(",");
  return _deserialize(nodes);
  // 辅助函数，通过 nodes 列表构造二叉树
  function _deserialize(nodes) {
    if (nodes.length === 0) return null;

    // 列表最左侧就是根节点
    const rootValue = nodes.shift();
    if (rootValue === "#") return null;
    const root = new TreeNode(parseInt(rootValue));

    root.left = _deserialize(nodes);
    root.right = _deserialize(nodes);
    return root;
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

// your test code here
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

deserialize(serialize(root));

/*
// @lcpr case=start
// [1,2,3,null,null,4,5]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */
