/*
 * @lc app=leetcode.cn id=79 lang=javascript
 * @lcpr version=30202
 *
 * [79] 单词搜索
 */

import { use } from "react";
import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 回溯算法
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let exist = function (board, word) {
  let found = false; // !使用全局变量要搭配提前终止
  let m = board.length;
  let n = board[0].length;
  let used = Array.from({ length: m }, () => new Array(n).fill(false));
  let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  function dfs(i, j, pos) {
    // !提前终止：已找到匹配
    if (found) return;
    if (pos === word.length) {
      found = true;
      return;
    }

    if (i < 0 || j < 0 || i >= m || j >= n) return; // 索引越界
    if (used[i][j]) return; // 已经访问过
    if (board[i][j] !== word[pos]) return; // 不是需要的字母

    used[i][j] = true;

    for (let dir of directions) {
      dfs(i + dir[0], j + dir[1], pos + 1);
    }

    used[i][j] = false;
  }
  // 从第一个字母开始找
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 第一个字母可能不止一个
      if (board[i][j] === word[0]) {
        dfs(i, j, 0);
        if (found) break; // !如果第一个成功就退出循环
      }
    }
  }

  return found;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']]\n"ABCCED"\n
// @lcpr case=end

// @lcpr case=start
// [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']]\n"SEE"\n
// @lcpr case=end

// @lcpr case=start
// [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']]\n"ABCB"\n
// @lcpr case=end

 */
