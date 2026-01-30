/*
 * @lc app=leetcode.cn id=452 lang=javascript
 * @lcpr version=30307
 *
 * [452] 用最少数量的箭引爆气球
 */

import { ListNode } from '../common/listNode.js';
import { TreeNode } from '../common/treeNode.js';

// @lc code=start
/**
 * S1 贪心策略
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = function (points) {
  // 题目相当于求不相交区间的数量
  points.sort((a, b) => a[1] - b[1]);
  let count = 1; // 记录不相交区间的数量
  let end = points[0][1];
  for (let i = 1; i < points.length; i++) {
    const [left, right] = points[i];
    if (left > end) {
      count++;
      end = right;
    }
  }
  return count;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[10,16],[2,8],[1,6],[7,12]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[3,4],[5,6],[7,8]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[2,3],[3,4],[4,5]]\n
// @lcpr case=end

 */
