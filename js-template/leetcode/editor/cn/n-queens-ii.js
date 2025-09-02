/*
 * @lc app=leetcode.cn id=52 lang=javascript
 * @lcpr version=30202
 *
 * [52] N 皇后 II
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 回溯算法
 * @param {number} n
 * @return {number}
 */
let totalNQueens = function (n) {
  let result = 0;
  let board = new Array(n).fill(".".repeat(n));
  function backtrack(row) {
    if (row === n) {
      result++;
      return;
    }

    for (let col = 0; col < n; col++) {
      if (!isValid(board, row, col)) {
        continue;
      }

      // 做选择
      let newRow = board[row].split("");
      newRow[col] = "Q";
      board[row] = newRow.join("");
      backtrack(row + 1);
      // 撤销选择
      newRow[col] = ".";
      board[row] = newRow.join("");
    }
  }

  function isValid(board, row, col) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][col] === "Q") return false;
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  }

  backtrack(0);
  return result;
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
