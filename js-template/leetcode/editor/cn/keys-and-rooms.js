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
 * v1 DFS
 * @param {number[][]} rooms
 * @return {boolean}
 */
let canVisitAllRooms = function (rooms) {
  const n = rooms.length;
  const visited = new Array(n).fill(false);

  const dfs = (room) => {
    if (visited[room]) return;
    //  前序位置，标记房间已访问
    visited[room] = true;
    for (const key of rooms[room]) {
      dfs(key);
    }
  };

  dfs(0);

  return visited.every((item) => item);
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
