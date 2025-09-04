/*
 * @lc app=leetcode.cn id=22 lang=javascript
 * @lcpr version=30202
 *
 * [22] 括号生成
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 回溯算法
 * @param {number} n
 * @return {string[]}
 */
let generateParenthesis = function (n) {
  let result = [];
  let track = [];
  let pNum = {
    "(": 0,
    ")": 0,
  };

  function backtrack(start) {
    if (start === n * 2) {
      result.push(track.join(""));
      return;
    }

    for (let p of ["(", ")"]) {
      // 剪枝
      // 1. 左括号的数量小于 n
      if (p === "(" && pNum[p] >= n) continue;
      // 2. 右括号的数量小于 n， 并且有能够配对的左括号（左括号数量大于右括号）
      if (p === ")" && (pNum[p] >= n || pNum["("] - pNum[p] <= 0)) continue;

      // 做选择
      track.push(p);
      pNum[p]++;
      backtrack(start + 1);
      track.pop();
      pNum[p]--;
    }
  }
  backtrack(0);
  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */
