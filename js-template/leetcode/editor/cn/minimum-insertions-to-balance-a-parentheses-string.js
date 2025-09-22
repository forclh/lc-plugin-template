/*
 * @lc app=leetcode.cn id=1541 lang=javascript
 * @lcpr version=30203
 *
 * [1541] 平衡括号字符串的最少插入次数
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 括号类问题
 * @param {string} s
 * @return {number}
 */
let minInsertions = function (s) {
  let res = 0; // 插入括号的数量
  let need = 0; // 需要的右括号数量
  for (let item of s) {
    if (item === "(") {
      // 遇到左括号，右括号需求增加2
      need += 2;
      // !当遇到左括号时，若对右括号的需求量为奇数，需要插入 1 个右括号
      // 左括号必须对应两个连续的右括号
      if (need % 2 === 1) {
        res++; // 插入一个右括号
        need--;
      }
    } else {
      // 遇到右括号，右括号需求减少1
      need--;
      if (need === -1) {
        // 右括号太多了
        res++; // 插入一个左括号
        need = 1; // 同时，对右括号的需求变为 1
      }
    }
  }
  return res + need;
};

// @lc code=end

// your test code here

/*
// @lcpr case=start
// "(()))"\n
// @lcpr case=end

// @lcpr case=start
// "())"\n
// @lcpr case=end

// @lcpr case=start
// "))())("\n
// @lcpr case=end

// @lcpr case=start
// "(((((("\n
// @lcpr case=end

// @lcpr case=start
// ")))))))"\n
// @lcpr case=end

 */
