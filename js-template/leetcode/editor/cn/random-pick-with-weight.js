/*
 * @lc app=leetcode.cn id=528 lang=javascript
 * @lcpr version=30304
 *
 * [528] 按权重随机选择
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 前缀和+二分查找
 * @param {number[]} w
 */
var Solution = function (w) {
  // 构建前缀和数组
  this.preSum = new Array(w.length + 1);
  this.preSum[0] = 0;
  for (let i = 1; i < this.preSum.length; i++) {
    this.preSum[i] = this.preSum[i - 1] + w[i - 1];
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const n = this.preSum.length;
  //  生成在闭区间 [1, preSum[n - 1]] 中的随机整数
  const target = Math.floor(Math.random() * this.preSum[n - 1]) + 1;
  // 获取 target 在前缀和数组 preSum 中的索引
  // 别忘了前缀和数组 preSum 和原始数组 w 有一位索引偏移
  return leftBound(this.preSum, target) - 1;
};

// 二分查找：返回左侧边界
function leftBound(nums, target) {
  const n = nums.length;
  let left = 0;
  let right = n;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
// @lc code=end

// your test code here

/*
// @lcpr case=start
// ["Solution","pickIndex"]\n[[[1]],[]]\n["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]\n[[[1,3]],[],[],[],[],[]]\n
// @lcpr case=end

 */
