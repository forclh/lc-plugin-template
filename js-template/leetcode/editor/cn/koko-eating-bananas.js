/*
 * @lc app=leetcode.cn id=875 lang=javascript
 * @lcpr version=30203
 *
 * [875] 爱吃香蕉的珂珂
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 二分查找
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
let minEatingSpeed = function (piles, h) {
  // 二分查找的思考：求单调函数f(x) === target的x取值边界
  // x : 吃掉香蕉的速度 k
  // f(x) : 吃完全部香蕉需要的时间与速度的关系函数，单调递减
  // target : h
  // 求最小的k所以是求左侧边界
  // x的取值范围：1-Max(pile[i])或者根据提示取 10**9

  // 使用左闭右开的搜索区间
  let left = 1;
  let right = 10 ** 9 + 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2); // 速度
    let time = piles.reduce((acc, pile) => acc + Math.ceil(pile / mid), 0); // 时间

    // 注意f(x)是单调递减
    if (time === h) {
      right = mid;
    } else if (time < h) {
      right = mid;
    } else if (time > h) {
      left = mid + 1;
    }
  }

  return left;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [3,6,7,11]\n8\n
// @lcpr case=end

// @lcpr case=start
// [30,11,23,4,20]\n5\n
// @lcpr case=end

// @lcpr case=start
// [30,11,23,4,20]\n6\n
// @lcpr case=end

 */
