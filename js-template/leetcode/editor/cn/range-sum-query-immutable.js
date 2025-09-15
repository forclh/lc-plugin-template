/*
 * @lc app=leetcode.cn id=303 lang=javascript
 * @lcpr version=30202
 *
 * [303] 区域和检索 - 数组不可变
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 一位数组前缀和技巧
 * @param {number[]} nums
 */
class NumArray {
  constructor(nums) {
    let preNum = new Array(nums.length + 1).fill(0);
    // 前缀和数组，利用preNum[i]来记录num[0,...i - 1]的累加和,从而降低时间复杂度到 O(1)
    for (let i = 1; i < preNum.length; i++) {
      preNum[i] = preNum[i - 1] + nums[i - 1];
    }
    this.preNum = preNum;
  }

  /**
   * 求区间[left,...,right]的数组和
   * @param {number} left
   * @param {number} right
   * @return {number}
   */
  sumRange(left, right) {
    if (left < 0 || right >= this.preNum.length - 1 || left > right) {
      return 0;
    }
    return this.preNum[right + 1] - this.preNum[left];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

// your test code here

/*
// @lcpr case=start
// ["NumArray", "sumRange", "sumRange", "sumRange"]\n[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]\n
// @lcpr case=end

 */
