/*
 * @lc app=leetcode.cn id=410 lang=javascript
 * @lcpr version=30203
 *
 * [410] 分割数组的最大值
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 二分查找
 * 代码同：1011 题「在 D 天内送达包裹的能力」
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let splitArray = function (nums, k) {
  // 二分查找思考：
  // x : 分割后的数组和的最大值
  // x范围 : max(nums[i])-sum(nums[i])
  // f(x) : 随着最大值变化的子数组的个数，单调递减
  // target: k个非空子数组
  // 左右边界：求最小的和的最大值，因此是左边界

  let left = Math.max(...nums);
  let right = nums.reduce((acc, item) => acc + item, 0) + 1; // 左闭右开

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    let curK = f(nums, mid);

    if (curK <= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
// 输入分割后的数组和的最大值，得到分割后的数组个数
let f = function (nums, x) {
  let k = 1;
  let sum = 0;
  for (let item of nums) {
    if (item + sum > x) {
      k++;
      sum = item;
    } else {
      sum += item;
    }
  }

  return k;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [7,2,5,10,8]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,4,4]\n3\n
// @lcpr case=end

 */
