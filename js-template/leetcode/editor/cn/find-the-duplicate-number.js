/*
 * @lc app=leetcode.cn id=287 lang=javascript
 * @lcpr version=30304
 *
 * [287] 寻找重复数
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 二分查找-变体
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
  const n = nums.length;
  if (n === 1 || n === 2) return nums[0];
  let left = 1;
  let right = n - 1; // 元素值范围是 1~n

  // 区间范围只剩一个的时候就是答案
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    let count = 0;
    for (const num of nums) {
      if (num <= mid) {
        count++;
      }
    }

    if (count > mid) {
      right = mid; // 重复数在左侧 [left, mid]
    } else {
      left = mid + 1; // 重复数在右侧 [mid+1, right]
    }
  }
  return left;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,3,4,2,2]\n
// @lcpr case=end

// @lcpr case=start
// [3,1,3,4,2]\n
// @lcpr case=end

// @lcpr case=start
// [3,3,3,3,3]\n
// @lcpr case=end

 */
