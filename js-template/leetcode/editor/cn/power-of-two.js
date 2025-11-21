/*
 * @lc app=leetcode.cn id=231 lang=javascript
 * @lcpr version=30304
 *
 * [231] 2 的幂
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 位运算
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
  // 二进制的表示只有一个1，删除最低位的1后值为0
  return n > 0 && (n & (n - 1)) === 0;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 1\n
// @lcpr case=end

// @lcpr case=start
// 16\n
// @lcpr case=end

// @lcpr case=start
// 3\n
// @lcpr case=end

 */
