/*
 * @lc app=leetcode.cn id=55 lang=javascript
 * @lcpr version=30203
 *
 * [55] 跳跃游戏
 */

// import {ListNode} from "../common/listNode.js";
// import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * v1 贪心算法
 * 局部最优解直接得出全局最优解
 * @param {number[]} nums
 * @return {boolean}
 */
let canJump = function (nums) {
  let n = nums.length;
  let farthest = 0;
  for (let i = 0; i < n - 1; i++) {
    // 不断更新可以到达的最大索引
    farthest = Math.max(farthest, i + nums[i]);
    // 可能碰到了 0，卡住跳不动了
    if (farthest <= i) {
      return false;
    }
  }

  return farthest >= n - 1;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [2,3,1,1,4]\n
// @lcpr case=end

// @lcpr case=start
// [3,2,1,0,4]\n
// @lcpr case=end

 */
