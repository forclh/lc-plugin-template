/*
 * @lc app=leetcode.cn id=6 lang=javascript
 * @lcpr version=30300
 *
 * [6] Z 字形变换
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 模拟行索引的变化
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  const res = new Array(numRows).fill("");
  if (numRows < 2) return s;
  let flag = -1;
  let i = 0;

  for (let c of s) {
    if (i === 0 || i === numRows - 1) flag = -flag;
    res[i] += c;
    i += flag;
  }
  return res.join("");
};
// @lc code=end

// your test code here
convert("AB", 1);
/*
// @lcpr case=start
// "PAYPALISHIRING"\n3\n
// @lcpr case=end

// @lcpr case=start
// "PAYPALISHIRING"\n4\n
// @lcpr case=end

// @lcpr case=start
// "A"\n1\n
// @lcpr case=end

 */
