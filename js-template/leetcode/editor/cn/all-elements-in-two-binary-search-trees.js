/*
 * @lc app=leetcode.cn id=1305 lang=javascript
 * @lcpr version=30202
 *
 * [1305] 两棵二叉搜索树中的所有元素
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
 * v1 利用迭代器将BST模拟成有序链表，然后合并两个有序链表
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
let getAllElements = function (root1, root2) {
  let result = [];
  // BST 有序迭代器
  let t1 = new BSTIterator(root1);
  let t2 = new BSTIterator(root2);
  // 类似合并有序链表的算法逻辑
  while (t1.hasNext() && t2.hasNext()) {
    result.push(t1.peek() < t2.peek() ? t1.next() : t2.next());
  }
  // 如果有一棵 BST 还剩元素，添加到最后
  while (t1.hasNext()) {
    result.push(t1.next());
  }
  while (t2.hasNext()) {
    result.push(t2.next());
  }

  return result;
};
// BST 有序迭代器
class BSTIterator {
  constructor(root) {
    this.stack = [];
    this._pushLeftBranch = (root) => {
      while (root !== null) {
        this.stack.push(root);
        root = root.left;
      }
    };
    this._pushLeftBranch(root);
  }

  hasNext() {
    return this.stack.length > 0;
  }

  next() {
    let node = this.stack.pop();
    this._pushLeftBranch(node.right);
    return node.val;
  }

  peek() {
    return this.stack[this.stack.length - 1].val;
  }
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [2,1,4]\n[1,0,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,8]\n[8,1]\n
// @lcpr case=end

 */
