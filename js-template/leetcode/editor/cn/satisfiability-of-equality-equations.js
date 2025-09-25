/*
 * @lc app=leetcode.cn id=990 lang=javascript
 * @lcpr version=30203
 *
 * [990] 等式方程的可满足性
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * 等式方程的可满足性问题
 *
 * 1. 问题分析：
 *    - 输入是一个字符串数组，表示等式或不等式
 *    - 每个等式形如 "a==b" 或 "a!=b"
 *    - 变量是小写字母，需要判断这些等式是否能同时成立
 *
 * 2. 解题思路：
 *    - 利用并查集处理传递关系
 *    - 先处理所有相等关系，将相等的变量放入同一个连通分量
 *    - 再检查不等关系，看是否与已建立的相等关系冲突
 *
 * 3. 算法步骤：
 *    a) 创建并查集，大小为26（对应26个字母）
 *    b) 遍历所有 "==" 等式，将相等的字母合并到同一个集合
 *    c) 遍历所有 "!=" 不等式，检查两个字母是否在同一个集合
 *       - 如果在同一个集合，说明产生矛盾，返回false
 *    d) 如果所有检查都通过，返回true
 *
 * 4. 复杂度分析：
 *    时间复杂度：O(N·α(26))，其中 N 是等式数量，α 是阿克曼函数的反函数
 *    空间复杂度：O(1)，只需要存储26个字母的并查集
 *
 * @param {string[]} equations 等式数组，每个等式形如 "a==b" 或 "a!=b"
 * @return {boolean} 返回这些等式是否能同时成立
 */
let equationsPossible = function (equations) {
  // 创建并查集，大小为26（对应26个小写字母）
  let union = new UF(26);

  // 第一步：处理所有相等关系
  for (let equ of equations) {
    if (equ[1] === "=") {
      // 检查是否是相等关系
      // 将字母转换为0-25的索引
      let x = equ.charCodeAt(0) - "a".charCodeAt(0);
      let y = equ.charCodeAt(3) - "a".charCodeAt(0);
      // 将相等字母构成连通分量
      union.union(x, y);
    }
  }

  // 第二步：检查所有不等关系是否与已建立的相等关系冲突
  for (let equ of equations) {
    if (equ[1] === "!") {
      // 检查是否是不等关系
      let x = equ.charCodeAt(0) - "a".charCodeAt(0);
      let y = equ.charCodeAt(3) - "a".charCodeAt(0);
      // 如果不等关系的两个变量连通，说明产生矛盾
      if (union.connected(x, y)) {
        return false; // 发现矛盾，返回false
      }
    }
  }
  return true;
};

class UF {
  constructor(n) {
    // 连通分量的个数，初始时每个元素自成一个连通分量
    this._count = n;
    // 存储每个节点的父节点，初始时指向自己
    this.parent = Array.from({ length: n }, (_, index) => index);
  }

  union(p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);
    if (rootP === rootQ) {
      return;
    }

    // 将p所在的树连接到q所在的树
    this.parent[rootP] = rootQ;
    // 两个连通分量合并成一个连通分量
    this._count--;
  }

  connected(p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);
    return rootP === rootQ;
  }

  find(p) {
    if (this.parent[p] !== p) {
      // 路径压缩：将沿路的所有节点都直接指向根节点
      this.parent[p] = this.find(this.parent[p]);
    }
    return this.parent[p];
  }

  count() {
    return this._count;
  }
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// b"\na"]\n
// @lcpr case=end

// @lcpr case=start
// a"\nb"]\n
// @lcpr case=end

// @lcpr case=start
// b"\nc"\nc"]\n
// @lcpr case=end

// @lcpr case=start
// b"\nc"\na"]\n
// @lcpr case=end

// @lcpr case=start
// c"\nd"\nz"]\n
// @lcpr case=end

 */
