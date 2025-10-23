/*
 * @lc app=leetcode.cn id=433 lang=javascript
 * @lcpr version=30300
 *
 * [433] 最小基因变化
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 BFS
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
const minMutation = function (startGene, endGene, bank) {
  const visited = new Set();
  const q = [startGene];
  visited.add(startGene);
  let step = 0;
  while (q.length > 0) {
    const sz = q.length;

    for (let i = 0; i < sz; i++) {
      const curGene = q.shift();
      if (curGene === endGene) return step;
      for (const gene of getNeighbor(curGene)) {
        if (visited.has(gene) || !bank.includes(gene)) continue;
        visited.add(gene);
        q.push(gene);
      }
    }
    step++;
  }

  return -1;
};
/**
 *
 * @param {string} gene
 * @returns
 */
const getNeighbor = (gene) => {
  const res = [];
  for (let i = 0; i < 8; i++) {
    for (const g of ["A", "C", "G", "T"]) {
      if (g === gene[i]) continue;
      res.push(gene.slice(0, i) + g + gene.slice(i + 1));
    }
  }

  return res;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "AACCGGTT"\n"AACCGGTA"\n["AACCGGTA"]\n
// @lcpr case=end

// @lcpr case=start
// "AACCGGTT"\n"AAACGGTA"\n["AACCGGTA","AACCGCTA","AAACGGTA"]\n
// @lcpr case=end

// @lcpr case=start
// "AAAAACCC"\n"AACCCCCC"\n["AAAACCCC","AAACCCCC","AACCCCCC"]\n
// @lcpr case=end

 */
