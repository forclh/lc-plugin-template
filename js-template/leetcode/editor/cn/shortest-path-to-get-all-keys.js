/*
 * @lc app=leetcode.cn id=864 lang=javascript
 * @lcpr version=30304
 *
 * [864] 获取所有钥匙的最短路径
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 BFS
 *
 * @param {string[]} grid
 * @return {number}
 */
const shortestPathAllKeys = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const visited = new Set();
  const queue = [];

  let start = null;
  let keyCount = 0;
  const keysToIndex = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
  };
  const locksToIndex = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "@") {
        start = [i, j];
      }
      if (keysToIndex[grid[i][j]] !== undefined) {
        keyCount++;
      }
    }
  }
  start.push(new Array(keyCount).fill("0").join(""));
  queue.push(start);
  visited.add(start.join("-"));

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let step = 0;
  const target = new Array(keyCount).fill("1").join("");
  while (queue.length > 0) {
    const sz = queue.length;
    for (let i = 0; i < sz; i++) {
      const [x, y, keys] = queue.shift();
      // 找到全部钥匙
      if (keys === target) {
        return step;
      }

      for (const [dx, dy] of directions) {
        const nextX = x + dx;
        const nextY = y + dy;
        // 索引越界
        if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n) {
          continue;
        }

        if (visited.has([nextX, nextY, keys].join("-"))) {
          continue;
        }

        const item = grid[nextX][nextY];

        // 遇到墙
        if (item === "#") {
          continue;
        }
        // 遇到锁但是没钥匙
        const index = locksToIndex[item];
        if (index !== undefined && keys[index] === "0") {
          continue;
        }

        // 遇到钥匙
        if (keysToIndex[item] !== undefined) {
          const next = [nextX, nextY, updateKeys(keys, keysToIndex[item])];
          queue.push(next);
          visited.add(next.join("-"));
        } else {
          // 遇到墙或者遇到锁且有钥匙
          const next = [nextX, nextY, keys];
          queue.push(next);
          visited.add(next.join("-"));
        }
      }
    }
    step++;
  }

  return -1;
};

function updateKeys(keys, index) {
  keys = keys.split("");
  keys[index] = "1";
  return keys.join("");
}
// @lc code=end

// your test code here
// shortestPathAllKeys(["@.a..", "###.#", "b.A.B"]);
shortestPathAllKeys(["@Aa"]);
/*
// @lcpr case=start
// ["@.a..","###.#","b.A.B"]\n
// @lcpr case=end

// @lcpr case=start
// ["@..aA","..B#.","....b"]\n
// @lcpr case=end

// @lcpr case=start
// ["@Aa"]\n
// @lcpr case=end

 */
