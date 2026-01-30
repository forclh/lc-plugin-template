/*
 * @lc app=leetcode.cn id=1288 lang=javascript
 * @lcpr version=30307
 *
 * [1288] 删除被覆盖区间
 */

import { ListNode } from '../common/listNode.js';
import { TreeNode } from '../common/treeNode.js';

// @lc code=start
/**
 * S1 区间覆盖问题
 * @param {number[][]} intervals
 * @return {number}
 */
const removeCoveredIntervals = function (intervals) {
  // 起点升序，终点降序
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return a[0] - b[0];
  });
  // 记录合并区间的起点和终点
  let [left, right] = intervals[0];
  let res = 0; // 记录覆盖的区间数量

  for (let i = 1; i < intervals.length; i++) {
    let [start, end] = intervals[i];
    // 情况一：找到覆盖区间
    if (end <= right) {
      res++;
      // 情况二：找到相交区间，合并
    } else if (start <= right && end >= right) {
      right = end;
      // 情况三：找到不相交区间，更新起点和终点
    } else {
      left = start;
      right = end;
    }
  }

  return intervals.length - res;
};
// @lc code=end

// your test code here
console.log(
  removeCoveredIntervals([
    [1, 2],
    [1, 4],
    [3, 4],
  ]),
);
/*
// @lcpr case=start
// [[1,4],[3,6],[2,8]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,4],[2,3]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[1,4],[3,4]]\n
// @lcpr case=end
 */
