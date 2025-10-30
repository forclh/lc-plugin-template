/*
 * @lc app=leetcode.cn id=354 lang=javascript
 * @lcpr version=30203
 *
 * [354] 俄罗斯套娃信封问题
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 转换为 最长递增子序列问题（LIS） + 二分查找解法
 * @param {number[][]} envelopes
 * @return {number}
 */
let maxEnvelopes = function (envelopes) {
  let n = envelopes.length;
  // 按宽度升序排序，相同宽度降序排序
  envelopes.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));

  // 构建高度数组
  let height = new Array(n);
  for (let i = 0; i < n; i++) {
    height[i] = envelopes[i][1];
  }

  return lengthOfLIS(height);
};
// 二分查找：最长递增子序列
let lengthOfLIS = function (nums) {
  /**
   * 使用二分查找帮助函数来找到数字在递增子序列中的插入位置(查找左侧边界)
   * @param {number[]} nums 当前已知的递增子序列
   * @param {number} target 待插入的数字
   * @return {number} 数字在递增子序列中的插入位置
   */
  function help(nums, target) {
    let left = 0;
    let right = nums.length; // 左闭右开
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (nums[mid] >= target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left; // 返回要插入的位置
  }
  let top = []; // top[i]表示牌堆i最上方的元素
  for (const num of nums) {
    let pos = help(top, num);
    if (pos === top.length) {
      top.push(num); // 新建牌堆
    } else {
      top[pos] = num; // 替换该牌堆最上方元素
    }
  }
  return top.length;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[5,4],[6,4],[6,7],[2,3]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[1,1],[1,1]]\n
// @lcpr case=end

 */
