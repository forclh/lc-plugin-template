/*
 * @lc app=leetcode.cn id=238 lang=javascript
 * @lcpr version=30300
 *
 * [238] 除自身以外数组的乘积
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 前缀积和后缀积
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const n = nums.length;
  const prefix = new Array(n);
  // 前缀积数组
  prefix[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] * nums[i];
  }

  const postfix = new Array(n);
  postfix[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    postfix[i] = postfix[i + 1] * nums[i];
  }

  const res = [];
  res[0] = postfix[1];
  res[n - 1] = prefix[n - 2];
  for (let i = 1; i < n - 1; i++) {
    // 除了 nums[i] 自己的元素积就是 nums[i] 左侧和右侧所有元素之积
    res[i] = prefix[i - 1] * postfix[i + 1];
  }
  return res;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [-1,1,0,-3,3]\n
// @lcpr case=end

 */
