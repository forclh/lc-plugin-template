/*
 * @lc app=leetcode.cn id=773 lang=javascript
 * @lcpr version=30203
 *
 * [773] 滑动谜题
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 BFS(最短路径) 抽象成图
 * @param {number[][]} board
 * @return {number}
 */
let slidingPuzzle = function (board) {
  let target = "123450"; // 最终节点(状态)
  // 构造初始节点(状态)
  let start = "";
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      start += board[i][j];
    }
  }

  // BFS
  let queue = [start];
  let visited = new Set(); // 记录访问过的节点(状态),防止成环
  visited.add(start);
  let step = 0; // 记录步数
  while (queue.length !== 0) {
    let sz = queue.length;
    for (let i = 0; i < sz; i++) {
      let cur = queue.shift(); // 当前节点(状态)

      if (cur === target) {
        return step;
      }
      // 得到当前节点(状态)的领居节点(状态)
      let neighbors = getNeighbors(cur);
      for (let n of neighbors) {
        if (!visited.has(n)) {
          queue.push(n);
          visited.add(n);
        }
      }
    }
    step++; // 下一层步数增加
  }

  return -1;

  /**
   * 返回当前棋盘所有可能的下一步状态
   * @param {string} board 当前棋盘的字符串表示
   */
  function getNeighbors(board) {
    // 2x3 棋牌中一维索引和领居索引的映射
    let map = [
      [1, 3],
      [0, 2, 4],
      [1, 5],
      [0, 4],
      [1, 3, 5],
      [2, 4],
    ];

    let index = board.indexOf("0"); // 找到 0 位置索引
    // 遍历 0 位置索引的领居位置,获得board的邻居节点
    let neighbors = [];
    for (let n of map[index]) {
      neighbors.push(swap(board, index, n));
    }
    return neighbors;
  }
  /**
   * @param {string} board 当前棋盘的字符串表示
   */
  function swap(board, i, j) {
    let chars = board.split("");
    [chars[i], chars[j]] = [chars[j], chars[i]];
    return chars.join("");
  }
};
// @lc code=end

// your test code here
slidingPuzzle([
  [1, 2, 3],
  [4, 0, 5],
]);
/*
// @lcpr case=start
// [[1,2,3],[4,0,5]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3],[5,4,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[4,1,2],[5,0,3]]\n
// @lcpr case=end

 */
