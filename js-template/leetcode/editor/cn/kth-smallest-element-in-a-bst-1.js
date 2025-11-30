/*
 * @lc app=leetcode.cn id=230 lang=javascript
 * @lcpr version=30202
 *
 * [230] 二叉搜索树中第 K 小的元素
 */

import { ListNode } from "../common/listNode.js";
// import { TreeNode } from "../common/treeNode.js";

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
 * v2 扩展力扣的TreeNode类，记录更多的信息
 *
 * 时间复杂度 O(logN)
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
let kthSmallest = function (root, k) {
  if (root === null) return -1;

  const leftSize = root.left ? root.left.size : 0;

  if (k <= leftSize) {
    // 第k小的元素在左子树
    return kthSmallest(root.left, k);
  } else if (k === leftSize + 1) {
    // 当前节点就是第K小的元素
    return root.val;
  } else {
    // 第K小的元素在右子树中
    // 在右子树中找第 (k - leftSize - 1) 小的元素
    return kthSmallest(root.right, k - leftSize - 1);
  }
};

class TreeNode {
  constructor(val) {
    this.val = val;
    // 以该节点为根的树的节点总数，初始值为1
    this.size = 1;
    this.left = null;
    this.right = null;
  }
}
/**
 * 插入节点并更新size，返回成功后的根节点（用于构建树）
 */
function insertNode(root, val) {
  if (root === null) {
    return new TreeNode(val);
  }

  if (val < root.val) {
    root.left = insertNode(root.left, val);
  } else {
    root.right = insertNode(root.right, val);
  }

  root.size = 1 + (root.left?.size ?? 0) + (root.right?.size ?? 0);

  return root;
}
// @lc code=end

// your test code here
// 构建BST: [5, 3, 6, 2, 4, 1]
let root = null;
root = insertNode(root, 5);
root = insertNode(root, 3);
root = insertNode(root, 6);
root = insertNode(root, 2);
root = insertNode(root, 4);
root = insertNode(root, 1);

// 测试查找第K小的元素
console.log(kthSmallest(root, 1)); // 1 (第1小的元素)
console.log(kthSmallest(root, 3)); // 3 (第3小的元素)
console.log(kthSmallest(root, 6)); // 6 (第6小的元素)

// 验证树的size信息
console.log(root.size); // 6 (整棵树的节点数)
console.log(root.left.size); // 4 (左子树的节点数: 3,2,4,1)
/*
// @lcpr case=start
// [3,1,4,null,2]\n1\n
// @lcpr case=end

// @lcpr case=start
// [5,3,6,2,4,null,null,1]\n3\n
// @lcpr case=end

 */
