/*
 * @lc app=leetcode.cn id=331 lang=javascript
 * @lcpr version=30202
 *
 * [331] 验证二叉树的前序序列化
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * 利用二叉树节点和边的关系
 * @param {string} preorder
 * @return {boolean}
 */
let isValidSerialization = function (preorder) {
  // 思路：二叉树中节点的出入度只和（diff：出度-入度）为 0，且遍历过程中 diff >=0
  // 空节点：入度 1 出度 0
  // 非空节点 入度 1 出度 2
  let diff = 1; // 由于根节点入度为 0，所以初始化diff为1，使得根节点与其他节点不做区分，能够参与循环。
  let nodes = preorder.split(",");
  for (let node of nodes) {
    diff -= 1; // 减去入度
    // 任何时候，diff都不能小于 0
    if (diff < 0) {
      return false;
    }
    // 非空节点
    if (node !== "#") {
      diff += 2; // 加上出度
    }
  }
  // 最后diff应该为0
  return diff === 0;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "9,3,4,#,#,1,#,#,2,#,6,#,#"\n
// @lcpr case=end

// @lcpr case=start
// "1,#"\n
// @lcpr case=end

// @lcpr case=start
// "9,#,#,1"\n
// @lcpr case=end

 */
