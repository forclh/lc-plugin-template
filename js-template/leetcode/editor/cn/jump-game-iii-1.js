/*
 * @lc app=leetcode.cn id=1306 lang=javascript
 * @lcpr version=30300
 *
 * [1306] 跳跃游戏 III
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 BFS
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
const canReach = function (arr, start) {
  const n = arr.length;
  // 记录访问过的索引，防止重复访问导致死循环
  const visited = new Array(n).fill(false);
  // 初始化队列，将起始位置加入队列
  const queue = [start];
  visited[start] = true;

  while (queue.length > 0) {
    const cur = queue.shift(); // 取出当前位置

    // 如果当前位置的值为 0，说明找到了目标，返回 true
    if (arr[cur] === 0) return true;

    // 遍历当前位置能跳到的两个方向：向右跳 (cur + arr[cur]) 和 向左跳 (cur - arr[cur])
    for (const next of [cur + arr[cur], cur - arr[cur]]) {
      // 检查边界条件：索引不能越界，且未被访问过
      if (next < 0 || next >= n || visited[next]) continue;

      // 标记为已访问并加入队列
      visited[next] = true;
      queue.push(next);
    }
  }

  // 如果遍历完所有可能的路径都无法到达值为 0 的位置，返回 false
  return false;
};
// @lc code=end

// your test code here
canReach([4, 2, 3, 0, 3, 1, 2], 5);
/*
// @lcpr case=start
// [4,2,3,0,3,1,2]\n5\n
// @lcpr case=end

// @lcpr case=start
// [4,2,3,0,3,1,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [3,0,2,1,2]\n2\n
// @lcpr case=end

 */
