/*
 * @lc app=leetcode.cn id=977 lang=javascript
 * @lcpr version=30203
 *
 * [977] 有序数组的平方
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 双指针（左右指针）
 * 合并两个有序数组的变体
 * 时间复杂度O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
let sortedSquares = function (nums) {
  let n = nums.length;
  let left = 0; // 指向 nums 头
  let right = n - 1; // 指向 nums 尾
  let result = new Array(n); // 存放结果
  let p = n - 1; // 指向结果数组末尾,得到的有序结果是降序的

  // 执行双指针合并有序数组的逻辑
  while (left <= right) {
    let leftSquare = nums[left] ** 2;
    let rightSquare = nums[right] ** 2;
    if (rightSquare > leftSquare) {
      result[p] = rightSquare;
      right--;
    } else {
      result[p] = leftSquare;
      left++;
    }
    p--;
  }
  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [-4,-1,0,3,10]\n
// @lcpr case=end

// @lcpr case=start
// [-7,-3,2,3,11]\n
// @lcpr case=end

 */
