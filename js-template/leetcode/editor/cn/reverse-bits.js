/*
 * @lc app=leetcode.cn id=190 lang=javascript
 * @lcpr version=30304
 *
 * [190] 颠倒二进制位
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 位运算
 *
 * 时间复杂度 O(N)
 * 空间复杂度 O(1)
 * @param {number} n
 * @return {number}
 */
const reverseBits = function (n) {
  let res = 0;
  for (let i = 0; i < 32 && n > 0; i++) {
    res |= (n & 1) << (31 - i);
    n >>>= 1; // 无符号右移，避免符号干扰
  }
  return res;
};

// @lc code=end

// your test code here
reverseBits(43261596);
/*
// @lcpr case=start
// 43261596\n
// @lcpr case=end

// @lcpr case=start
// 2147483644\n
// @lcpr case=end

 */
