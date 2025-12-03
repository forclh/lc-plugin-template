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
 * v1 DFS
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
const canReach = function (arr, start) {
  let n = arr.length;
  const visited = new Array(n).fill(false);
  let canArrive = false;

  const dfs = (start) => {
    // 索引越界、已经遍历过、已经找到了
    if (start < 0 || start >= n || visited[start] || canArrive) return;
    visited[start] = true;
    const step = arr[start];
    if (step === 0) {
      canArrive = true;
    }
    dfs(start - step);
    dfs(start + step);
  };

  dfs(start);

  // 无法到达目标
  return canArrive;
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
