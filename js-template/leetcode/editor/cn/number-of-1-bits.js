/*
 * @lc app=leetcode.cn id=191 lang=javascript
 * @lcpr version=30304
 *
 * [191] 位1的个数
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 位运算
 * @param {number} n
 * @return {number}
 */
const hammingWeight = function (n) {
  let res = 0;
  while (n) {
    res++;
    n &= n - 1; // 去除最低位的1
  }
  return res;
};
// @lc code=end

// your test code here
hammingWeight(11);
/*
// @lcpr case=start
// 11\n
// @lcpr case=end

// @lcpr case=start
// 128\n
// @lcpr case=end

// @lcpr case=start
// 2147483645\n
// @lcpr case=end

 */
