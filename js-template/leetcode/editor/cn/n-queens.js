/*
 * @lc app=leetcode.cn id=51 lang=javascript
 * @lcpr version=30202
 *
 * [51] N 皇后
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 回溯算法
 * @param {number} n
 * @return {string[][]}
 */
let solveNQueens = function (n) {
  let result = [];
  solve(n);
  return result;
  function solve(n) {
    let board = new Array(n).fill(".".repeat(n));
    backtrack(0);
    // n+1层的完全 n叉树
    // 层：棋盘的行
    // n叉：每一行的n个格子(选择)
    // 路径：board
    // 选择：row 0-n-1
    // 结束条件 row === n
    function backtrack(row) {
      if (row === n) {
        result.push([...board]);
        return;
      }
      // 遍历所有选择
      for (let col = 0; col < n; col++) {
        if (!isValid(board, row, col)) {
          continue; // 判断不合适后继续选择下一个
        }

        // 选择
        let newRow = board[row].split("");
        newRow[col] = "Q";
        board[row] = newRow.join("");

        backtrack(row + 1);
        // 撤销选择
        newRow[col] = ".";
        board[row] = newRow.join("");
      }
    }
    // 是否可以在 board[row][col] 放置皇后？
    function isValid(board, row, col) {
      let n = board.length;
      // 判断同一列是否有冲突
      for (let i = 0; i < n; i++) {
        if (board[i][col] === "Q") return false;
      }

      // 判断左上角是否有冲突
      for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === "Q") return false;
      }
      // 判断右上角是否有冲突
      for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === "Q") return false;
      }
      return true;
    }
  }
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 4\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */
