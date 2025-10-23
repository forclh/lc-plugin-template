/*
 * @lc app=leetcode.cn id=919 lang=javascript
 * @lcpr version=30300
 *
 * [919] 完全二叉树插入器
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
 * v1 BFS
 * @param {TreeNode} root
 */
class CBTInserter {
  constructor(root) {
    this.root = root;
    this.q = [];
    this.temp = [root];

    // 层序遍历
    while (this.temp.length > 0) {
      let cur = this.temp.shift();

      if (cur.left !== null) this.temp.push(cur.left);
      if (cur.right !== null) this.temp.push(cur.right);

      // 可以插入节点的节点
      if (cur.left === null || cur.right === null) this.q.push(cur);
    }
  }
  // 插入节点
  insert(val) {
    let node = new TreeNode(val);
    let cur = this.q[0];
    if (cur.left === null) {
      cur.left = node;
    } else if (cur.right === null) {
      cur.right = node;
      this.q.shift(); // 插入右子树之后，该节点左右都满了就弹出
    }
    // 新节点的左右节点也是可以插入的
    this.q.push(node);
    return cur.val; // 返回父节点的值
  }

  get_root() {
    return this.root;
  }
}

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
// @lc code=end

// your test code here
