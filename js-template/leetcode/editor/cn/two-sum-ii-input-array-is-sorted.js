/*
 * @lc app=leetcode.cn id=167 lang=javascript
 * @lcpr version=30203
 *
 * [167] 两数之和 II - 输入有序数组
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 双指针（左右指针）
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (numbers, target) {
  // 一左一右两个指针相向而行
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      // 题目要求的索引是从 1 开始的
      return [left + 1, right + 1];
    } else if (sum < target) {
      // 让 sum 大一点
      left++;
    } else {
      // 让 sum 小一点
      right--;
    }
  }
  return [-1, -1];
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [2,3,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [-1,0]\n-1\n
// @lcpr case=end

 */
