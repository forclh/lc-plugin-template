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
 * v2 添加备忘录消除重叠子问题
 * @param {number} n
 * @return {number}
 */
let numTrees = function (n) {
  let memo = new Map();
  // 计算闭区间 [1, n] 组成的 BST 个数
  return count(1, n);

  // 定义：返回闭区间 [lo, hi] 的数字能组成 count(lo, hi) 种 BST
  function count(lo, hi) {
    let res = 0;
    // 空节点也是一种情况
    if (lo >= hi) {
      return 1;
    }
    if (memo.get(`${lo}-${hi}`)) {
      return memo.get(`${lo}-${hi}`);
    }

    for (let i = lo; i <= hi; i++) {
      // 左子树组合式
      let leftTreeNode = count(lo, i - 1);
      // 右子树组合数
      let rightTreeNode = count(i + 1, hi);
      //  以 i 为根元素的 BST 的总数是左右子树的组合数乘积
      res += leftTreeNode * rightTreeNode;
    }

    memo.set(`${lo}-${hi}`, res);

    return res;
  }
};

// @lc code=end

// your test code here

/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */
