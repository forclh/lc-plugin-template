/*
 * @lc app=leetcode.cn id=130 lang=javascript
 * @lcpr version=30203
 *
 * [130] 被围绕的区域
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * 解题思路：
 * 1. 本题可以转化为连通性问题：
 *    - 与边界相连的'O'永远不会被'X'包围
 *    - 所有未被包围的'O'都直接或间接与边界'O'相连
 *
 * 2. 使用并查集解决：
 *    - 创建一个虚拟节点dummy，作为所有边界'O'的根节点
 *    - 所有能与dummy连通的'O'都是不被包围的
 *    - 其余的'O'都是被包围的，需要变成'X'
 *
 * 3. 算法步骤：
 *    a) 将所有边界上的'O'与dummy连通
 *    b) 将内部的'O'与相邻的'O'连通
 *    c) 检查每个'O'是否与dummy连通，不连通则替换为'X'
 * @param {character[][]} board 输入的字符矩阵
 * @return {void} 直接修改输入矩阵，不返回值
 */
let solve = function (board) {
  let m = board.length;
  let n = board[0].length;

  // 虚拟节点 dummy 的索引设置为 m*n，确保不会与其他节点的索引冲突
  let dummy = m * n;
  // 创建大小为 m*n+1 的并查集，额外的1个位置用于 dummy 节点
  let union = new UF(m * n + 1);

  // 步骤1：处理边界情况
  // 将四个边界上的'O'都与 dummy 节点连通
  // 处理左右边界
  for (let i = 0; i < m; i++) {
    if (board[i][0] === "O") {
      // 左边界上的'O'
      union.union(getIndex(i, 0), dummy);
    }
    if (board[i][n - 1] === "O") {
      // 右边界上的'O'
      union.union(getIndex(i, n - 1), dummy);
    }
  }
  // 处理上下边界
  for (let i = 0; i < n; i++) {
    if (board[0][i] === "O") {
      // 上边界上的'O'
      union.union(getIndex(0, i), dummy);
    }
    if (board[m - 1][i] === "O") {
      // 下边界上的'O'
      union.union(getIndex(m - 1, i), dummy);
    }
  }

  // 定义四个方向：上、下、左、右
  let direction = [
    [-1, 0], // 上
    [1, 0], // 下
    [0, -1], // 左
    [0, 1], // 右
  ];

  // 步骤2：处理内部节点
  // 遍历除边界外的所有格子
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (board[i][j] === "O") {
        // 对于每个'O'，检查其四个方向
        for (let dir of direction) {
          let x = i + dir[0];
          let y = j + dir[1];
          // 如果相邻位置也是'O'，则将两个位置连通
          if (board[x][y] === "O") {
            union.union(getIndex(i, j), getIndex(x, y));
          }
        }
      }
    }
  }

  // 步骤3：替换被包围的'O'
  // 遍历除边界外的所有格子
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (board[i][j] === "O") {
        // 如果一个'O'和 dummy 不连通，说明它被包围了
        if (!union.connected(getIndex(i, j), dummy)) {
          board[i][j] = "X";
        }
      }
    }
  }

  function getIndex(i, j) {
    return i * n + j;
  }
};

class UF {
  // n 为图中节点的个数
  constructor(n) {
    // 连通分量个数
    this._count = n;
    // 存储每个节点的父节点
    this.parent = Array.from({ length: n }, (_, index) => index);
  }

  // 将节点 p 和节点 q 连通
  union(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);

    if (rootP === rootQ) {
      return;
    }

    this.parent[rootQ] = rootP;
    // 两个连通分量合并成一个连通分量
    this._count--;
  }

  // 判断节点 p 和节点 q 是否连通
  connected(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);
    return rootP === rootQ;
  }

  // !路径压缩
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  // 返回图中的连通分量个数
  count() {
    return this._count;
  }
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [['X','X','X','X'],['X','O','O','X'],['X','X','O','X'],['X','O','X','X']]\n
// @lcpr case=end

// @lcpr case=start
// [['X']]\n
// @lcpr case=end

 */
