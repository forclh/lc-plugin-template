/*
 * @lc app=leetcode.cn id=752 lang=javascript
 * @lcpr version=30203
 *
 * [752] 打开转盘锁
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 BFS 最短路径 图
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
let openLock = function (deadends, target) {
  let start = "0000";
  if (start === target) return 0;
  let deadSet = new Set(deadends); // 转换为Set提高查询效率
  if (deadSet.has(start)) return -1;

  let visited = new Set(); // 保存遍历过的节点,防止环
  let queue = [start];
  visited.add(start);
  let step = 0; // 记录步数

  while (queue.length !== 0) {
    let sz = queue.length;
    for (let i = 0; i < sz; i++) {
      let cur = queue.shift();

      if (cur === target) {
        return step;
      }
      // 找领居
      let neighbors = getNeighbors(cur);
      for (let n of neighbors) {
        // 将一个节点的合法相邻节点加入队列(也可以在初始化的时候在visited中加入deadends))
        if (!visited.has(n) && !deadSet.has(n)) {
          queue.push(n);
          visited.add(n);
        }
      }
    }
    step++;
  }
  return -1;
};

function getNeighbors(cur) {
  let neighbors = [];
  for (let i = 0; i < cur.length; i++) {
    let digit = parseInt(cur[i]);
    // 向上旋转
    let up = (digit + 1) % 10;
    neighbors.push(cur.substring(0, i) + up + cur.substring(i + 1)); // 拼接字符串
    // 向下旋转
    let down = (digit - 1 + 10) % 10;
    neighbors.push(cur.substring(0, i) + down + cur.substring(i + 1)); // 拼接字符串
  }
  return neighbors;
}
// @lc code=end

// your test code here
// openLock(["0201", "0101", "0102", "1212", "2002"], "0202");
/*
// @lcpr case=start
// ["0201","0101","0102","1212","2002"]\n"0202"\n
// @lcpr case=end

// @lcpr case=start
// ["8888"]\n"0009"\n
// @lcpr case=end

// @lcpr case=start
// ["8887","8889","8878","8898","8788","8988","7888","9888"]\n"8888"\n
// @lcpr case=end

 */
