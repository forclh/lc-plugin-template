/*
 * @lc app=leetcode.cn id=435 lang=javascript
 * @lcpr version=30307
 *
 * [435] 无重叠区间
 */

import { ListNode } from '../common/listNode.js';
import { TreeNode } from '../common/treeNode.js';

// @lc code=start
/**
 * S1 贪心算法
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]); // 按照终点升序排序
  let count = 1; // 统计最多不相交的区间
  let end = intervals[0][1]; // 第一个区间（最早结束）的终点
  for (let i = 1; i < intervals.length; i++) {
    const [left, right] = intervals[i];
    if (left >= end) {
      // 如果和当前区间不重叠
      count++;
      end = right; // 找到下一个选择的区间了
    }
  }
  return intervals.length - count;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[1,2],[2,3],[3,4],[1,3]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[1,2],[1,2]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[2,3]]\n
// @lcpr case=end

 */
