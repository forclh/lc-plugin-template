/*
 * @lc app=leetcode.cn id=496 lang=javascript
 * @lcpr version=30203
 *
 * [496] 下一个更大元素 I
 */

import { startTransition } from "react";
import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 单调栈
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let nextGreaterElement = function (nums1, nums2) {
  let map = new Map();
  let stack = []; // 单调栈
  // 倒着往栈里放
  for (let i = nums2.length - 1; i >= 0; i--) {
    // 把两个「个子高」元素之间的元素排除
    while (stack.length !== 0 && nums2[i] >= stack[stack.length - 1]) {
      stack.pop();
    }
    stack.length === 0
      ? map.set(nums2[i], -1)
      : map.set(nums2[i], stack[stack.length - 1]); // 将 nums2 中元素的下一个最大值存入 map
    stack.push(nums2[i]);
  }

  let result = [];
  for (let num of nums1) {
    result.push(map.get(num)); // 查找 num1 元素的下一个最大值
  }
  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [4,1,2]\n[1,3,4,2].\n
// @lcpr case=end

// @lcpr case=start
// [2,4]\n[1,2,3,4].\n
// @lcpr case=end

 */
