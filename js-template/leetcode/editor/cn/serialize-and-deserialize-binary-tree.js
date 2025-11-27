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
 * v1 层序遍历进行编码
 * @param {TreeNode} root
 * @return {string}
 */
let serialize = function (root) {
  if (root === null) return "";

  let result = [];
  // 层序遍历
  let queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    let curNode = queue.shift();
    if (curNode === null) {
      result.push("#");
      continue;
    }
    result.push(curNode.val);
    // 入队
    queue.push(curNode.left);
    queue.push(curNode.right);
  }

  return result.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
let deserialize = function (data) {
  if (data.length === 0) return null;

  let nodes = data.split(",");
  // 第一个元素就是 root 的值
  let root = new TreeNode(parseInt(nodes[0]));
  // 队列记录需要遍历的所有节点，将 root 加入队列
  let queue = [];
  queue.push(root);
  // index 变量记录正在序列化的节点在数组中的位置
  let index = 1;
  // 层序遍历
  while (queue.length !== 0) {
    let root = queue.shift();
    // 为父节点构造左侧子节点
    let leftVal = nodes[index++];
    if (leftVal !== "#") {
      root.left = new TreeNode(parseInt(leftVal));
      queue.push(root.left);
    }
    // 为父节点构造右侧子节点
    let rightVal = nodes[index++];
    if (rightVal !== "#") {
      root.right = new TreeNode(parseInt(rightVal));
      queue.push(root.right);
    }
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

// your test code here

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
