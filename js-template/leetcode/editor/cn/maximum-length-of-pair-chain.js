/*
 * @lc app=leetcode.cn id=646 lang=javascript
 * @lcpr version=30304
 *
 * [646] 最长数对链
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 贪心算法
 * @param {number[][]} pairs
 * @return {number}
 */
const findLongestChain = function (pairs) {
  const n = pairs.length;
  if (n === 0) return 0;
  // 按右端点升序排序，贪心选择最早结束的区间以留出更多后续空间
  pairs.sort((a, b) => a[1] - b[1]);
  let res = 0;
  // 当前链最后一个区间的右端点，初始化为负无穷以便首个区间被选择
  let end = -Infinity;
  for (const [a, b] of pairs) {
    // 若当前区间起点大于上一个选中区间的终点，则可以接入链
    if (a > end) {
      res++;
      end = b;
    }
  }
  return res;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[1,2],[2,3],[3,4]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[7,8],[4,5]]\n
// @lcpr case=end

 */
