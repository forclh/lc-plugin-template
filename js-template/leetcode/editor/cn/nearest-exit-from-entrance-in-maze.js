/*
 * @lc app=leetcode.cn id=1926 lang=javascript
 * @lcpr version=30300
 *
 * [1926] 迷宫中离入口最近的出口
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 BFS
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
const nearestExit = function (maze, entrance) {
  const m = maze.length;
  const n = maze[0].length;

  const visited = Array.from({ length: m }, () => new Array(n).fill(false));
  const q = [entrance];
  visited[entrance[0]][entrance[1]] = true;

  let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let step = 0;
  while (q.length > 0) {
    let sz = q.length;
    for (let i = 0; i < sz; i++) {
      let [row, col] = q.shift();

      // 到达出口
      if (
        (row === 0 || row === m - 1 || col === 0 || col === n - 1) &&
        (row !== entrance[0] || col !== entrance[1])
      ) {
        return step;
      }
      for (const dir of directions) {
        const nextRow = row + dir[0];
        const nextCol = col + dir[1];
        if (
          nextRow >= m ||
          nextRow < 0 ||
          nextCol >= n ||
          nextCol < 0 ||
          visited[nextRow][nextCol] ||
          maze[nextRow][nextCol] === "+"
        )
          continue;

        visited[nextRow][nextCol] = true;
        q.push([nextRow, nextCol]);
      }
    }
    step++;
  }

  return -1;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]]\n[1,2]\n
// @lcpr case=end

// @lcpr case=start
// [["+","+","+"],[".",".","."],["+","+","+"]]\n[1,0]\n
// @lcpr case=end

// @lcpr case=start
// [[".","+"]]\n[0,0]\n
// @lcpr case=end

 */
