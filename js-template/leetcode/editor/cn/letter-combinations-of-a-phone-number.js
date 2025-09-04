/*
 * @lc app=leetcode.cn id=17 lang=javascript
 * @lcpr version=30202
 *
 * [17] 电话号码的字母组合
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 回溯算法
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function (digits) {
  let result = [];
  if (digits === "") return result;
  let track = [];
  let map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  function backtrack(depth) {
    if (depth === digits.length) {
      result.push(track.join(""));
      return;
    }
    let choice = map[digits[depth]];
    for (let i = 0; i < choice.length; i++) {
      track.push(choice[i]);
      backtrack(depth + 1);
      track.pop();
    }
  }
  backtrack(0);

  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "23"\n
// @lcpr case=end

// @lcpr case=start
// ""\n
// @lcpr case=end

// @lcpr case=start
// "2"\n
// @lcpr case=end

 */
