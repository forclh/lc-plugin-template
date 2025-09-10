/*
 * @lc app=leetcode.cn id=1260 lang=javascript
 * @lcpr version=30203
 *
 * [1260] 二维网格迁移
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 暴力法
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
let shiftGrid = function (grid, k) {
  let nums = [];
  let m = grid.length;
  let n = grid[0].length;
  // 计算迁移的步数
  k = k % (m * n);
  if (k === 0) return grid;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      nums.push(grid[i][j]);
    }
  }
  // 数组旋转 k 个单位
  while (k > 0) {
    nums.unshift(nums.pop());
    k--;
  }
  // 填充 grid
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      grid[i][j] = nums[i * n + j];
    }
  }

  return grid;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n1\n
// @lcpr case=end

// @lcpr case=start
// [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]]\n4\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n9\n
// @lcpr case=end

 */
