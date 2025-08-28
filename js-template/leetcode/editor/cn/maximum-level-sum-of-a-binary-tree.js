/*
 * @lc app=leetcode.cn id=1161 lang=javascript
 * @lcpr version=30202
 *
 * [1161] 最大层内元素和
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
 * BFS v1
 * @param {TreeNode} root
 * @return {number}
 */
let maxLevelSum = function (root) {
  let minLevelNum = 1; // 最大元素和层的最小层号
  let maxSum = root.val; // 最大层元素和

  let queue = [root];
  let level = 0; // 记录当前层的层号
  while (queue.length) {
    let sz = queue.length;
    level++;
    let levelSum = 0;
    for (let i = 0; i < sz; i++) {
      let curNode = queue.shift();
      levelSum += curNode.val;

      if (curNode.left !== null) {
        queue.push(curNode.left);
      }

      if (curNode.right !== null) {
        queue.push(curNode.right);
      }
    }
    // 如果当前层元素和最大则更新最大值和层号
    if (maxSum < levelSum) {
      minLevelNum = level;
      maxSum = levelSum;
    }
  }

  return minLevelNum;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,7,0,7,-8,null,null]\n
// @lcpr case=end

// @lcpr case=start
// [989,null,10250,98693,-89388,null,null,null,-32127]\n
// @lcpr case=end

 */
