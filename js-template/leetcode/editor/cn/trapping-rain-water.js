/*
 * @lc app=leetcode.cn id=42 lang=javascript
 * @lcpr version=30203
 *
 * [42] 接雨水
 */

// import {ListNode} from "../common/listNode.js";
// import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * v2 双指针
 *
 * 算法思路：
 * 1. 使用左右两个指针分别从数组两端向中间移动
 * 2. 维护左边和右边的最大高度
 * 3. 在每一步中，较矮的一边可以确定其上方能接的雨水量
 * 4. 移动较矮一边的指针，重复过程直到两指针相遇
 *
 * 时间复杂度：O(n) - 只需遍历一次数组
 * 空间复杂度：O(1) - 只使用常数额外空间
 *
 * @param {number[]} height 表示柱子高度的非负整数数组
 * @return {number} 返回能接住的雨水总量
 */
let trap = function (height) {
  let n = height.length;
  let left = 0;
  let right = n - 1;
  let leftMax = 0; // 左侧最大值
  let rightMax = 0; // 右侧最大值
  let result = 0;

  // left和right会在最高柱子相遇
  while (left < right) {
    leftMax = Math.max(leftMax, height[left]); // 更新左侧最大值
    rightMax = Math.max(rightMax, height[right]); // 更新右侧最大值

    // 总是移动较矮一边的指针，因为该边能接的雨水由其自身的最大高度决定
    if (leftMax < rightMax) {
      // 左边较矮，计算左边位置能接的雨水
      result += leftMax - height[left];
      left++;
    } else {
      // 右边较矮，计算右边位置能接的雨水
      result += rightMax - height[right];
      right--;
    }
  }

  return result;
};
// @lc code=end

// your test code here

// @lcpr case=start
// [0,1,0,2,1,0,1,3,2,1,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [4,2,0,3,2,5]\n
// @lcpr case=end
