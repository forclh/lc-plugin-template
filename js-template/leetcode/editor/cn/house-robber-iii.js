/*
 * @lc app=leetcode.cn id=337 lang=javascript
 * @lcpr version=30203
 *
 * [337] 打家劫舍 III
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
 * v2 分解问题思想
 * @param {TreeNode} root
 * @return {number}
 */
let rob = function (root) {
  // 返回一个数组arr:
  // arr[0]表示抢root,得到的最大钱数
  // arr[1]:表示不抢root得到的最大钱数
  let _rob = function (root) {
    if (root === null) return [0, 0];

    let left = _rob(root.left);
    let right = _rob(root.right);

    /// 不抢，下家可抢可不抢，取决于收益大小
    let doIt = root.val + left[1] + right[1];
    // 不抢，下家可抢可不抢，取决于收益大小
    let notDo = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

    return [doIt, notDo];
  };

  let res = _rob(root);

  return Math.max(res[0], res[1]);
};
// @lc code=end

// your test code here
let root = new TreeNode(4);
root.left = new TreeNode(1);
root.left.left = new TreeNode(2);
root.left.left.left = new TreeNode(3);

rob(root);
/*
// @lcpr case=start
// [3,2,3,null,3,null,1]\n
// @lcpr case=end

// @lcpr case=start
// [3,4,5,1,3,null,1]\n
// @lcpr case=end

 */
