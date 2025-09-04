/*
 * @lc app=leetcode.cn id=560 lang=javascript
 * @lcpr version=30202
 *
 * [560] 和为 K 的子数组
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 前缀和 + 哈希表
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let subarraySum = function (nums, k) {
  let result = 0;
  let preSum = 0;
  // 前缀和 到 该前缀和个数 的映射
  let valueToCount = new Map();
  valueToCount.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    preSum += nums[i]; // 计算前缀和
    // 如果之前存在值为 need 的前缀和
    // 说明存在以 nums[i-1] 结尾的子数组的和为 k
    let need = preSum - k;
    if (valueToCount.has(need)) {
      result += valueToCount.get(need);
    }
    if (!valueToCount.has(preSum)) {
      // 没有该前缀和
      valueToCount.set(preSum, 1);
    } else {
      // 有该前缀和
      valueToCount.set(preSum, valueToCount.get(preSum) + 1);
    }
  }

  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,1,1]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n3\n
// @lcpr case=end

 */
