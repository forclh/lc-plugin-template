/*
 * @lc app=leetcode.cn id=997 lang=javascript
 * @lcpr version=30304
 *
 * [997] 找到小镇的法官
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 图论：利用节点的入度和出度
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function (n, trust) {
  const inDegree = new Array(n + 1).fill(0);
  const outDegree = new Array(n + 1).fill(0);
  for (let i = 0; i < trust.length; i++) {
    const [from, to] = trust[i];
    inDegree[to]++; // 入度
    outDegree[from]++; // 出度
  }

  for (let i = 1; i <= n; i++) {
    // 法官的入度为 n - 1，出度为0
    if (inDegree[i] === n - 1 && outDegree[i] === 0) {
      return i;
    }
  }
  return -1;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 2\n[[1,2]]\n
// @lcpr case=end

// @lcpr case=start
// 3\n[[1,3],[2,3]]\n
// @lcpr case=end

// @lcpr case=start
// 3\n[[1,3],[2,3],[3,1]]\n
// @lcpr case=end

 */
