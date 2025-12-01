/*
 * @lc app=leetcode.cn id=841 lang=javascript
 * @lcpr version=30300
 *
 * [841] 钥匙和房间
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 BFS
 * @param {number[][]} rooms
 * @return {boolean}
 */
let canVisitAllRooms = function (rooms) {
  const n = rooms.length;
  const visited = new Array(n).fill(false);
  bfs(0);
  // 如果visited数组存在为遍历过的房间，则无法进入所有房间
  return visited.every((item) => item);

  function bfs(s) {
    const queue = [s];
    visited[s] = true;

    while (queue.length > 0) {
      const cur = queue.shift();
      for (const next of rooms[cur]) {
        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      }
    }
  }
};
// @lc code=end

// your test code here
canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]);
/*
// @lcpr case=start
// [[1],[2],[3],[]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,3],[3,0,1],[2],[0]]\n
// @lcpr case=end

 */
