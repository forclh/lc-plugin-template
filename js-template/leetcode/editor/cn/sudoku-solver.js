/*
 * @lc app=leetcode.cn id=37 lang=javascript
 * @lcpr version=30202
 *
 * [37] 解数独
 */

import { use } from "react";
import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 回溯算法
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solveSudoku(board) {
  // 标记是否已经找到可行解
  let found = false;

  function backtrack(index) {
    if (found) {
      // 已经找到一个可行解，立即结束
      return;
    }

    const m = 9,
      n = 9;
    const i = Math.floor(index / n),
      j = index % n;
    if (index === m * n) {
      // 找到一个可行解，触发 base case
      found = true;
      return;
    }

    if (board[i][j] !== ".") {
      // 如果有预设数字，不用我们穷举
      backtrack(index + 1);
      return;
    }

    for (let c = 1; c <= 9; c++) {
      let ch = `${c}`;
      // 剪枝：如果遇到不合法的数字，就跳过
      if (!isValid(board, i, j, ch)) {
        continue;
      }

      // 做选择
      board[i][j] = ch;

      backtrack(index + 1);
      if (found) {
        // 如果找到一个可行解，立即结束
        // 不要撤销选择，否则 board[i][j] 会被重置为 '.'
        return;
      }

      // 撤销选择
      board[i][j] = ".";
    }
  }

  function isValid(board, r, c, num) {
    for (let i = 0; i < 9; i++) {
      // 判断行是否存在重复
      if (board[r][i] === num) return false;
      // 判断列是否存在重复
      if (board[i][c] === num) return false;
      // 判断 3 x 3 方框是否存在重复
      if (
        board[Math.floor(r / 3) * 3 + Math.floor(i / 3)][
          Math.floor(c / 3) * 3 + (i % 3)
        ] === num
      ) {
        return false;
      }
    }
    return true;
  }

  backtrack(0);
}

// @lc code=end

// your test code here

/*
// @lcpr case=start
// \n[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]\n
// @lcpr case=end

 */
