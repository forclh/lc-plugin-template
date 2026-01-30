/*
 * @lc app=leetcode.cn id=56 lang=javascript
 * @lcpr version=30307
 *
 * [56] 合并区间
 */

import { ListNode } from '../common/listNode.js';
import { TreeNode } from '../common/treeNode.js';

// @lc code=start
/**
 * S1 区间合并
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  // 按照起点升序排序
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];
  for (let i = 0; i < intervals.length; i++) {
    const cur = intervals[i];
    const last = res[res.length - 1];
    // 如果当前区间的起点小于前一个区间的终点，则进行合并
    if (cur[0] <= last[1]) {
      last[1] = Math.max(last[1], cur[1]);
    } else {
      // 否则成为一个单独区间
      res.push(cur);
    }
  }
  return res;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[1,3],[2,6],[8,10],[15,18]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,4],[4,5]]\n
// @lcpr case=end

// @lcpr case=start
// [[4,7],[1,4]]\n
// @lcpr case=end

 */
