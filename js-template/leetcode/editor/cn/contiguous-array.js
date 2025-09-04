/*
 * @lc app=leetcode.cn id=525 lang=javascript
 * @lcpr version=30202
 *
 * [525] 连续数组
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 前缀和 + 哈希表
 * @param {number[]} nums
 * @return {number}
 */
let findMaxLength = function (nums) {
  let maxLength = 0;
  let preSum = 0;
  let valueToIndex = new Map(); // 前缀和到索引的映射
  // 初始化前缀和为 0 的位置（索引-1）
  valueToIndex.set(0, -1);
  for (let i = 0; i < nums.length; i++) {
    preSum += nums[i] === 0 ? -1 : 1;
    if (!valueToIndex.has(preSum)) {
      valueToIndex.set(preSum, i);
    } else {
      maxLength = Math.max(maxLength, i - valueToIndex.get(preSum));
    }
  }

  return maxLength;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [0,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,0]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,1,1,1,1,0,0,0]\n
// @lcpr case=end

 */
