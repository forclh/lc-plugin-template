/*
 * @lc app=leetcode.cn id=1329 lang=javascript
 * @lcpr version=30203
 *
 * [1329] 将矩阵按对角线排序
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 判断两个元素坐标是否在同一个对角线
 * 在同一个对角线上的元素，其横纵坐标之差是相同的
 * @param {number[][]} mat
 * @return {number[][]}
 */
let diagonalSort = function (mat) {
  let m = mat.length;
  let n = mat[0].length;
  let map = new Map(); // 存放所有的对角线元素
  // 遍历矩阵
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 横纵坐标之差可以作为一条对角线的 ID
      let id = i - j;
      if (!map.has(id)) {
        map.set(id, []);
      }
      map.get(id).push(mat[i][j]);
    }
  }

  // 给每条对角线元素排序
  for (let diagnal of map.values()) {
    diagnal.sort((a, b) => b - a); // 降序排序，方便后续填充
  }

  // 填充矩阵
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let id = i - j;
      mat[i][j] = map.get(id).pop();
    }
  }

  return mat;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[3,3,1,1],[2,2,1,2],[1,1,1,2]]\n
// @lcpr case=end

// @lcpr case=start
// [[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]\n
// @lcpr case=end

 */
