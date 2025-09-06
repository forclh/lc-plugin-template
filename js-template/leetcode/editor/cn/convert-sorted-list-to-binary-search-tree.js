/*
 * @lc app=leetcode.cn id=109 lang=javascript
 * @lcpr version=30202
 *
 * [109] 有序链表转换二叉搜索树
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * v1 升序链表 -> 升序数组 -> BST
 * @param {ListNode} head
 * @return {TreeNode}
 */
let sortedListToBST = function (head) {
  let nums = [];
  // 有序链表转数组
  let p = head;
  while (p !== null) {
    nums.push(p.val);
    p = p.next;
  }
  // 有序数组转BST
  let build = (lo, hi) => {
    if (lo > hi) return null;
    let mid = Math.floor((lo + hi) / 2);
    let root = new TreeNode(nums[mid]);

    root.left = build(lo, mid - 1);
    root.right = build(mid + 1, hi);
    return root;
  };

  return build(0, nums.length - 1);
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [-10,-3,0,5,9]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
