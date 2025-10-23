/*
 * @lc app=leetcode.cn id=863 lang=javascript
 * @lcpr version=30300
 *
 * [863] 二叉树中所有距离为 K 的结点
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
 * v1 BFS
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
let distanceK = function (root, target, k) {
  // 将树转化为图，按照图的BFS来计算距离target为k的节点
  let parent = new Map(); // 只需补充父节点的索引即可
  function traverse(root, parentNode) {
    if (root === null) return;
    parent.set(root.val, parentNode); // 树中节点不重复，可以直接用节点值
    traverse(root.left, root);
    traverse(root.right, root);
  }
  traverse(root, null);

  let q = [target];
  let visited = new Array(parent.size).fill(0);
  visited[target.val] = true;
  let dist = 0;
  let res = [];
  while (q.length > 0) {
    let sz = q.length;
    for (let i = 0; i < sz; i++) {
      let cur = q.shift();

      if (dist === k) {
        res.push(cur.val);
      }
      // 左子树
      if (cur.left !== null && !visited[cur.left.val]) {
        visited[cur.left.val] = true;
        q.push(cur.left);
      }
      // 右子树
      if (cur.right !== null && !visited[cur.right.val]) {
        visited[cur.right.val] = true;
        q.push(cur.right);
      }
      // 父节点
      let pNode = parent.get(cur.val);
      if (pNode !== null && !visited[pNode.val]) {
        visited[pNode.val] = true;
        q.push(pNode);
      }
    }
    // 距离增加
    dist++;
  }

  return res;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [3,5,1,6,2,0,8,null,null,7,4]\n5\n2\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n3\n
// @lcpr case=end

 */
