/*
 * @lc app=leetcode.cn id=136 lang=javascript
 * @lcpr version=30304
 *
 * [136] 只出现一次的数字
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 位运算
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  let res = 0;
  for (const n of nums) {
    res ^= n;
  }
  return res;
};
// @lc code=end

// your test code here
singleNumber([4, 1, 2, 1, 2]);
/*
// @lcpr case=start
// [2,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [4,1,2,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
