/*
 * @lc app=leetcode.cn id=994 lang=javascript
 * @lcpr version=30300
 *
 * [994] 腐烂的橘子
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 BFS
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const q = [];
  // 将所有的烂橘子加入队列
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        q.push([i, j]);
      }
    }
  }
  // 需要的最小分钟数
  let step = 0;
  while (q.length > 0) {
    const sz = q.length;
    for (let i = 0; i < sz; i++) {
      const [x, y] = q.shift();

      for (let dir of directions) {
        const nextX = x + dir[0];
        const nextY = y + dir[1];
        // 索引越界
        if (
          nextX >= m ||
          nextX < 0 ||
          nextY >= n ||
          nextY < 0 ||
          grid[nextX][nextY] === 0 ||
          grid[nextX][nextY] === 2
        )
          continue;
        grid[nextX][nextY] = 2;
        q.push([nextX, nextY]);
      }
    }
    step++; // 扩散步数加一
  }
  // 检查是否还有新鲜橘子
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }
  return step === 0 ? 0 : step - 1;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[2,1,1],[1,1,0],[0,1,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[2,1,1],[0,1,1],[1,0,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,2]]\n
// @lcpr case=end

 */
