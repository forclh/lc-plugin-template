/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 * @lcpr version=30203
 *
 * [1011] 在 D 天内送达包裹的能力
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 二分查找
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
let shipWithinDays = function (weights, days) {
  // 分析：
  // x: 运载能力
  // f(x): 运载能力x和需要的天数之间的关系，单调递减
  // target: days
  // x的取值范围：max(weights[i])-sum(weights[i])
  // 左侧还是右侧的二分查找：求最小x所以是左侧边界

  let left = Math.max(...weights);
  let right = weights.reduce((acc, weight) => acc + weight, 0) + 1; // 注意，right 是开区间，所以额外加一
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    let day = f(mid, weights);

    if (day <= days) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
// 范围当运载能力为 x 时送达所有包裹需要的天数
function f(x, weights) {
  let day = 1; // 总共需要的天数
  let currentLoad = 0; // 当前船上已经有的重量
  for (let weight of weights) {
    if (currentLoad + weight > x) {
      day++;
      currentLoad = weight;
    } else {
      currentLoad += weight;
    }
  }
  return day;
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,4,5,6,7,8,9,10]\n5\n
// @lcpr case=end

// @lcpr case=start
// [3,2,2,4,1,4]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,1,1]\n4\n
// @lcpr case=end

 */
