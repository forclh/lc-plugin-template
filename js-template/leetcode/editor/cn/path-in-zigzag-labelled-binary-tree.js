/*
 * @lc app=leetcode.cn id=1104 lang=javascript
 * @lcpr version=30202
 *
 * [1104] 二叉树寻路
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} label
 * @return {number[]}
 */
let pathInZigZagTree = function (label) {
  let path = [];

  while (label >= 1) {
    path.push(label);
    // 计算原始顺序父节点的序号
    label = Math.floor(label / 2);
    // 计算父节点所在的深度（从0开始）
    let depth = Math.floor(Math.log2(label));
    let [minLevel, maxlevel] = getLevelRange(depth);
    // 之字形排列后，父节点的序号变化成为镜像值
    // maxlevel - newLabel = label - minLevel
    label = maxlevel - label + minLevel;
  }
  // 反转列表
  path.reverse();
  return path;
};
// 计算完全二叉树在 depth 深度下，最小和最大序号
function getLevelRange(depth) {
  minLevel = 2 ** depth; // 当前层序号最小值
  maxlevel = 2 * minLevel - 1; // 当前层序号最大值
  return [minLevel, maxlevel];
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 14\n
// @lcpr case=end

// @lcpr case=start
// 26\n
// @lcpr case=end

 */
