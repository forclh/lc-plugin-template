/*
 * @lc app=leetcode.cn id=674 lang=javascript
 * @lcpr version=30304
 *
 * [674] 最长连续递增序列
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 贪心策略
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = function (nums) {
  const n = nums.length;
  if (n === 0 || n === 1) return n;
  let result = 0;
  let start = 0;
  for (let i = 0; i < n; i++) {
    // 不再单调后更新起始节点
    if (i >= 1 && nums[i - 1] >= nums[i]) {
      start = i;
    }
    // 跟新最大长度
    result = Math.max(result, i - start + 1);
  }
  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,3,5,4,7]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,2,2,2]\n
// @lcpr case=end

 */
