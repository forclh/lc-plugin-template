/*
 * @lc app=leetcode.cn id=449 lang=javascript
 * @lcpr version=30202
 *
 * [449] 序列化和反序列化二叉搜索树
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
let serialize = function (root) {
  let path = [];
  let traverse = (root) => {
    if (root === null) return;
    path.push(root.val);
    traverse(root.left);
    traverse(root.right);
  };
  traverse(root);
  return path.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
let deserialize = function (data) {
  if (!data) return null;
  let nums = data.split(",").map(Number); // !注意如果data是空字符串，则nums = [0]
  let index = 0;
  // 返回nums中节点值位于[min,...,max]之间的节点构成的BST
  let build = (nums, min, max) => {
    if (index >= nums.length) return null;
    let val = nums[index];
    if (val < min || val > max) {
      return null;
    }
    index++; // 注意位置 需要放在val判断后，否则会造成值的丢失
    let root = new TreeNode(val);
    root.left = build(nums, min, val);
    root.right = build(nums, val, max);
    return root;
  };

  return build(nums, -Infinity, Infinity);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
