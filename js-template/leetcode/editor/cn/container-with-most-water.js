/*
 * @lc app=leetcode.cn id=11 lang=javascript
 * @lcpr version=30203
 *
 * [11] 盛最多水的容器
 */

// import {ListNode} from "../common/listNode.js";
// import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * v1 双指针
 *
 * 算法思路：
 * 1. 使用左右两个指针分别指向数组的开始和结束位置
 * 2. 计算当前两个指针所形成的容器的面积
 * 3. 每次移动较短一边的指针，因为这样可能找到更大的面积
 * 4. 重复过程直到两指针相遇
 *
 * 为什么移动较短一边的指针？
 * 因为容器的容量由较短的一边决定，如果移动较长一边的指针：
 * 1. 新的较短边只会更短或相等，不会更长
 * 2. 容器的宽度在减小
 * 3. 所以面积只会减小或不变，不会增大
 * 因此，只有移动较短一边的指针才有可能找到更大的面积
 *
 * 时间复杂度：O(n) - 只需遍历一次数组
 * 空间复杂度：O(1) - 只使用常数额外空间
 *
 * @param {number[]} height 表示各位置高度的数组
 * @return {number} 返回能盛最多水的容器容量
 */
let maxArea = function (height) {
  let n = height.length;
  let left = 0; // 左指针，从数组开始位置
  let right = n - 1; // 右指针，从数组结束位置
  let result = 0; // 存储最大的面积

  // 当左右指针相遇时停止循环
  while (left < right) {
    // 计算当前容器的面积
    // 面积 = min(左高度, 右高度) * 宽度
    let area = Math.min(height[left], height[right]) * (right - left);

    // 更新最大面积
    result = Math.max(result, area);

    // 移动较短一边的指针，因为这是唯一可能获得更大面积的方式
    if (height[left] > height[right]) {
      // 右边较短，移动右指针
      right--;
    } else {
      // 左边较短或相等，移动左指针
      left++;
    }
  }

  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,8,6,2,5,4,8,3,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,1]\n
// @lcpr case=end

 */
