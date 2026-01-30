/*
 * @lc app=leetcode.cn id=986 lang=javascript
 * @lcpr version=30307
 *
 * [986] 区间列表的交集
 */

import { ListNode } from '../common/listNode.js';
import { TreeNode } from '../common/treeNode.js';

// @lc code=start
/**
 * S1 区间交集
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
const intervalIntersection = function (firstList, secondList) {
  // 对两个区间进行排序（题目已经完成）
  // 双指针
  let i = 0;
  let j = 0;
  const res = [];
  while (i < firstList.length && j < secondList.length) {
    let [firstStart, firstEnd] = firstList[i];
    let [secondStart, secondEnd] = secondList[j];
    // 判断是否相交
    if (secondEnd >= firstStart && secondStart <= firstEnd) {
      // 计算出交集，加入 res
      const left = Math.max(firstStart, secondStart);
      const right = Math.min(firstEnd, secondEnd);
      res.push([left, right]);
    }
    // 指针前进
    if (secondEnd <= firstEnd) {
      j++;
    } else {
      i++;
    }
  }
  return res;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[0,2],[5,10],[13,23],[24,25]]\n[[1,5],[8,12],[15,24],[25,26]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,3],[5,9]]\n[]\n
// @lcpr case=end

 */
