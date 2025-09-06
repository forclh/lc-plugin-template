/*
 * @lc app=leetcode.cn id=173 lang=javascript
 * @lcpr version=30202
 *
 * [173] 二叉搜索树迭代器
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
 * v2 栈模拟递归对 BST 进行中序遍历
 * @param {TreeNode} root
 */
class BSTIterator {
  constructor(root) {
    // 模拟递归栈
    this.stack = [];
    // 初始化时将左侧分支全部入栈
    // 使用箭头函数确保this上下文正确
    this._pushLeftBranch = (p) => {
      while (p !== null) {
        this.stack.push(p);
        p = p.left;
      }
    };
    this._pushLeftBranch(root);
  }

  next() {
    let node = this.stack.pop(); // 中序遍历顺序弹出
    // 将弹出节点的右子树的左侧分支入栈
    this._pushLeftBranch(node.right);
    return node.val;
  }

  hasNext() {
    return this.stack.length > 0;
  }
}
/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

// your test code here
