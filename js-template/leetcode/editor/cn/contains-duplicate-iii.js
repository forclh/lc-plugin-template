/*
 * @lc app=leetcode.cn id=220 lang=javascript
 * @lcpr version=30203
 *
 * [220] 存在重复元素 III
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 滑动窗口 + 桶排序
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
let containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
  // 找出长度小于等于 indexDiff + 1，且存在两个不同元素之差小于等于 valueDiff 的子数组
  let window = new Map();
  // 保证一个桶内的元素差值 <= valueDiff(例如valueDiff = 3时，桶0元素：[0,1,2,3])
  let bucketSize = valueDiff + 1;

  let left = 0;
  let right = 0;
  while (right < nums.length) {
    let num = nums[right];
    let bucketId = Math.floor(num / bucketSize);
    // 检查当前桶
    if (window.has(bucketId)) {
      return true;
    }
    // 检查小一点的桶
    if (
      window.has(bucketId - 1) &&
      Math.abs(num - window.get(bucketId - 1)) <= valueDiff
    ) {
      return true;
    }
    // 检查大一点的桶
    if (
      window.has(bucketId + 1) &&
      Math.abs(num - window.get(bucketId + 1)) <= valueDiff
    ) {
      return true;
    }
    // 扩大窗口
    window.set(bucketId, num);
    right++;

    // 当窗口大小大于 indexDiff 时，缩小窗口，减少窗口元素
    // 由于窗口缩小结束后，就要进行是否符合条件的判断，因此需要提前一步进行缩小
    while (right - left > indexDiff) {
      window.delete(Math.floor(nums[left] / bucketSize));
      left++;
    }
  }
  return false;
};
// @lc code=end

// your test code here
containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3);
/*
// @lcpr case=start
// [1,2,3,1]\n3\n0\n
// @lcpr case=end

// @lcpr case=start
// [1,5,9,1,5,9]\n2\n3\n
// @lcpr case=end

 */
