/*
 * @lc app=leetcode.cn id=274 lang=javascript
 * @lcpr version=30300
 *
 * [274] H 指数
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 先计数排序，再统计大于k的论文数量
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function (citations) {
  const n = citations.length;
  citations.sort((a, b) => a - b); // 升序排序

  let h = 0;
  for (let i = 0; i < n; i++) {
    h = Math.max(h, Math.min(citations[i], n - i));
  }
  return h;
};
// @lc code=end

// your test code here
hIndex([3]);
/*
// @lcpr case=start
// [3,0,6,1,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,3,1]\n
// @lcpr case=end

 */
