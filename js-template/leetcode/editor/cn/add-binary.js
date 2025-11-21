/*
 * @lc app=leetcode.cn id=67 lang=javascript
 * @lcpr version=30304
 *
 * [67] 二进制求和
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 双指针
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  let res = "";
  let p1 = a.length - 1;
  let p2 = b.length - 1;
  let carry = 0; // 进位

  while (p1 >= 0 || p2 >= 0 || carry > 0) {
    let value = carry;
    if (a[p1]) value += Number(a[p1]);
    if (b[p2]) value += Number(b[p2]);

    carry = Math.floor(value / 2);
    value = value % 2;

    res += `${value}`;
    p1--;
    p2--;
  }
  return [...res].reverse().join("");
};
// @lc code=end

// your test code here
addBinary("11", "1");
/*
// @lcpr case=start
// "11"\n"1"\n
// @lcpr case=end

// @lcpr case=start
// "1010"\n"1011"\n
// @lcpr case=end

 */
