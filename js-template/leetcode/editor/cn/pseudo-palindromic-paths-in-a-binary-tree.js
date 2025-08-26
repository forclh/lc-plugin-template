/*
 * @lc app=leetcode.cn id=1457 lang=javascript
 * @lcpr version=30202
 *
 * [1457] 二叉树中的伪回文路径
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
 * @param {TreeNode} root
 * @return {number}
 */
let pseudoPalindromicPaths = function (root) {
  let result = 0;
  if (root === null) {
    return result;
  }
  // 记录路径对于索引数字出现的次数
  let count = new Array(10).fill(0);

  function traverse(root) {
    if (root === null) {
      return;
    }

    // 前序位置
    count[root.val]++;
    if (root.left === null && root.right === null) {
      // 判断是否存在伪回文：路径上最多有一个数字出现次数为奇数，其他都为偶数
      let oddCount = count.filter((item) => item % 2 === 1);
      if (oddCount.length <= 1) {
        result++;
      }
    }
    traverse(root.left);
    traverse(root.right);
    // 后续位置
    count[root.val]--;
  }
  traverse(root);
  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [2,3,1,3,1,null,1]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,1,1,3,null,null,null,null,null,1]\n
// @lcpr case=end

// @lcpr case=start
// [9]\n
// @lcpr case=end

 */
