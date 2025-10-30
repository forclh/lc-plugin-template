/*
 * @lc app=leetcode.cn id=1620 lang=javascript
 * @lcpr version=30203
 *
 * [1620] 网络信号最好的坐标
 */

// import {ListNode} from "../common/listNode.js";
// import {TreeNode} from "../common/treeNode.js";

// @lc code=start

/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
let bestCoordinate = function (towers, radius) {
  // 1. 确定遍历的区域
  // 2. 遍历区域内的每一个坐标点，计算其信号强度
  // 3. 不断更新最强信号和对应的坐标
  let maxX = Math.max(0, Math.max(...towers.map((t) => t[0])) + radius);
  let minX = Math.max(0, Math.min(...towers.map((t) => t[0])) - radius);

  let maxY = Math.max(0, Math.max(...towers.map((t) => t[1])) + radius);
  let minY = Math.max(0, Math.min(...towers.map((t) => t[1])) - radius);

  let bestPower = 0;
  let [bestX, bestY] = [towers[0][0], towers[0][1]];

  for (let i = minX; i <= maxX; i++) {
    for (let j = minY; j <= maxY; j++) {
      let power = 0;

      for (let [x, y, p] of towers) {
        let distance = Math.sqrt((x - i) ** 2 + (y - j) ** 2);
        if (distance > radius) continue;
        power += Math.floor(p / (1 + distance));
      }
      // 比较并更新最大信号强度及坐标
      // 注意：当信号强度相同时，选择字典序更小的坐标（x较小，若x相同则y较小）
      if (
        power > bestPower ||
        (power === bestPower && (i < bestX || (i === bestX && j < bestY)))
      ) {
        bestPower = power;
        bestX = i;
        bestY = j;
      }
    }
  }
  if (bestPower === 0) return [0, 0];
  return [bestX, bestY];
};

// @lc code=end

// your test code here
bestCoordinate(
  [
    [30, 34, 31],
    [10, 44, 24],
    [14, 28, 23],
    [50, 38, 1],
    [40, 13, 6],
    [16, 27, 9],
    [2, 22, 23],
    [1, 6, 41],
    [34, 22, 40],
    [40, 10, 11],
  ],
  20
);
/*
// @lcpr case=start
// [[1,2,5],[2,1,7],[3,1,9]]\n2\n
// @lcpr case=end

// @lcpr case=start
// [[23,11,21]]\n9\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,13],[2,1,7],[0,1,9]]\n2\n
// @lcpr case=end

 */
