/*
 * @lc app=leetcode.cn id=523 lang=javascript
 * @lcpr version=30202
 *
 * [523] 连续的子数组和
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 前缀和 + 哈希表
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
let checkSubarraySum = function (nums, k) {
  let preSum = new Array(nums.length + 1).fill(0);

  for (let i = 1; i < preSum.length; i++) {
    preSum[i] = preSum[i - 1] + nums[i - 1];
  }
  // 前缀和到索引的映射
  let valToIndex = new Map();
  for (let i = 0; i < preSum.length; i++) {
    // 在哈希表中记录余数
    let value = preSum[i] % k; // (preSum[i] - presum[j]) % k === 0 等价于 preSum[i] % k ===  preSum[j] % k
    // 如果这个余数还没有对应的索引，则记录下来
    if (!valToIndex.has(value)) {
      valToIndex.set(value, i);
    }
    // 如果这个前缀和已经有对应的索引了，则什么都不做
    // 因为题目想找长度尽可能大的子数组，所以前缀和索引应尽可能小
  }

  for (let i = 0; i < preSum.length; i++) {
    // 计算 need，使得 (preSum[i] - need) % k == 0
    let need = preSum[i] % k;
    if (valToIndex.has(need)) {
      // 这个子数组的长度至少为 2
      if (i - valToIndex.get(need) >= 2) return true;
    }
  }

  return false;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [23,2,4,6,7]\n6\n
// @lcpr case=end

// @lcpr case=start
// [23,2,6,4,7]\n6\n
// @lcpr case=end

// @lcpr case=start
// [23,2,6,4,7]\n13\n
// @lcpr case=end

 */
