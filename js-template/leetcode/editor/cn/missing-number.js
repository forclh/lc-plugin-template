/*
 * @lc app=leetcode.cn id=268 lang=javascript
 * @lcpr version=30304
 *
 * [268] 丢失的数字
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 位运算
 *
 * 时间复杂度 O(N)
 * 空间复杂度 O(1)
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  const n = nums.length;
  let res = 0;
  // 先和新补的索引异或一下
  res ^= n;
  // 和其他的元素、索引做异或
  for (let i = 0; i < n; i++) {
    res ^= i ^ nums[i];
  }

  return res;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [3,0,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

// @lcpr case=start
// [9,6,4,2,3,5,7,0,1]\n
// @lcpr case=end

 */
