/*
 * @lc app=leetcode.cn id=45 lang=javascript
 * @lcpr version=30203
 *
 * [45] 跳跃游戏 II
 */

// import {ListNode} from "../common/listNode.js";
// import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * v2 贪心算法
 * @param {number[]} nums
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
let jump = function (nums) {
  let n = nums.length;
  if (n <= 1) return 0;
  // 跳跃步数
  let steps = 0;
  // [i, end] 维护当前的跳跃次数 steps 可以覆盖的索引区间
  let end = 0;
  // 在 [i, end] 区间内，最远可以跳到的索引是 farthest
  let farthest = 0;
  for (let i = 0; i < n - 1; i++) {
    // 计算从索引 i 可以跳到的最远索引
    farthest = Math.max(farthest, i + nums[i]);
    if (i === end) {
      // 现在已经遍历完 [i, end]，所以需要再跳一步
      steps++;
      end = farthest;
      if (farthest >= n - 1) {
        // 如果已经可以到达终点，则可以直接返回
        return steps;
      }
    }
  }
  // 如果无法到达终点，则返回 -1
  return -1;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [2,3,1,1,4]\n
// @lcpr case=end

// @lcpr case=start
// [2,3,0,1,4]\n
// @lcpr case=end

 */
