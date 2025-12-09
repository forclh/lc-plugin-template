/*
 * @lc app=leetcode.cn id=96 lang=javascript
 * @lcpr version=30202
 *
 * [96] 不同的二叉搜索树
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 动态规划（自底向上）
 *
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(n)
 * @param {number} n
 * @return {number}
 */
const numTrees = function (n) {
  // 1. 确定dp数组和索引的定义
  // dp[i]表示给定一个整数 i ，求恰由 i 个节点组成且节点值从 1 到 i 互不相同的二叉搜索树的数量
  // 2. 确定状态转移方程
  // dp[i] += dp[j - 1] * dp[i - j]
  // 3. 初始化
  // dp[1] = 1  dp[2] = 2

  const dp = new Array(n + 1).fill(0);
  dp[0] = 1; // 空子树
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      // 当 j 为根节点时：
      // 左子树由节点 [1, j-1] 组成，共有 j-1 个节点，其形态数为 dp[j-1]
      // 右子树由节点 [j+1, i] 组成，共有 i-j 个节点，其形态数为 dp[i-j]
      // 根据乘法原理，以 j 为根的 BST 数量 = 左子树形态数 * 右子树形态数
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }
  return dp[n];
};

// @lc code=end

// your test code here
numTrees(3);
/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */
