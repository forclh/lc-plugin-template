/*
 * @lc app=leetcode.cn id=289 lang=javascript
 * @lcpr version=30300
 *
 * [289] 生命游戏
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 状态编码
 *
 * 时间复杂度 O(MN)
 * 空间复杂度 O(1)
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = function (board) {
  // 使用状态编码来避免复制整个数组
  // 0: 死细胞保持死
  // 1: 活细胞保持活
  // 2: 活细胞变死细胞
  // 3: 死细胞变活细胞
  const m = board.length;
  const n = board[0].length;

  // 定义方向数组
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];
  // 第一遍遍历：标记细胞的下一个状态
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let liveCell = 0;

      // 遍历方向数组统计活邻居数量
      for (const [dx, dy] of directions) {
        const x = i + dx;
        const y = j + dy;
        if (x < 0 || x >= m || y < 0 || y >= n) continue;
        // 活细胞或者将要死的细胞都算活细胞
        if (board[x][y] === 1 || board[x][y] === 2) liveCell++;
      }

      // 应用生命游戏规则
      // 该位置是活细胞
      if (board[i][j] === 1) {
        if (liveCell < 2 || liveCell > 3) {
          board[i][j] = 2; // 活细胞死亡
        }
      } else {
        // 该位置是死细胞
        if (liveCell === 3) {
          board[i][j] = 3; // 死细胞复活
        }
      }
    }
  }
  // 第二遍遍历：应用状态变化
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 2) {
        board[i][j] = 0;
      } else if (board[i][j] === 3) {
        board[i][j] = 1;
      }
    }
  }
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[1,0]]\n
// @lcpr case=end

 */
