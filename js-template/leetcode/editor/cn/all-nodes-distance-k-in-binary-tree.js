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
  // 1. 将树转化为图：构建子节点到父节点的映射
  // 这样我们可以从任意节点向父节点移动
  const parent = new Map();

  function traverse(node, parentNode) {
    if (node === null) return;
    parent.set(node.val, parentNode);
    traverse(node.left, node);
    traverse(node.right, node);
  }
  traverse(root, null);

  // 2. 使用 BFS 从 target 节点开始向外扩散搜索
  const visited = new Set(); // 记录访问过的节点值，避免回头
  const queue = [target];
  visited.add(target.val);

  let currentDistance = 0;
  while (queue.length > 0) {
    // 如果当前层级的距离等于 k，那么队列中所有的节点就是我们要找的结果
    if (currentDistance === k) {
      return queue.map((node) => node.val);
    }

    const sz = queue.length;
    for (let i = 0; i < sz; i++) {
      const cur = queue.shift();
      // 遍历当前节点的三个邻居：左子节点、右子节点、父节点
      const neighbors = [cur.left, cur.right, parent.get(cur.val)];
      for (const next of neighbors) {
        // 如果邻居存在且未被访问过
        if (next && !visited.has(next.val)) {
          visited.add(next.val);
          queue.push(next);
        }
      }
    }
    currentDistance++;
  }
  // 如果搜索结束还没找到，返回空数组
  return [];
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
