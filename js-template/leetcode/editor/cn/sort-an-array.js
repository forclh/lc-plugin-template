/*
 * @lc app=leetcode.cn id=912 lang=javascript
 * @lcpr version=30304
 *
 * [912] 排序数组
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 快速排序
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function (nums) {
  //  为了避免出现耗时的极端情况，先随机打乱
  shuffle(nums);
  // 排序整个数组（原地修改）
  sort(nums, 0, nums.length - 1);
  return nums;
};

function sort(nums, lo, hi) {
  if (lo >= hi) return;
  // 前序位置
  // 对 nums[lo..hi] 进行切分
  // 使得 nums[lo..p-1] <= nums[p] < nums[p+1..hi]
  const p = partition(nums, lo, hi);
  sort(nums, lo, p - 1);
  sort(nums, p + 1, hi);
}

function partition(nums, lo, hi) {
  const p = nums[lo];
  let i = lo + 1;
  let j = hi;

  while (i <= j) {
    // 此 while 结束时恰好 nums[i] > pivot
    while (i < hi && nums[i] <= p) i++;

    // 此 while 结束时恰好 nums[j] <= pivot
    while (j > lo && nums[j] > p) j--;

    if (i >= j) break;

    // 交换 nums[j] 和 nums[i]
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  // 最后将 pivot 放到合适的位置，即 pivot 左边元素较小，右边元素较大
  [nums[lo], nums[j]] = [nums[j], nums[lo]];
  return j;
}

// 洗牌算法
function shuffle(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [5,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [5,1,1,2,0,0]\n
// @lcpr case=end

 */
