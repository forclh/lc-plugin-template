/*
 * @lc app=leetcode.cn id=721 lang=javascript
 * @lcpr version=30300
 *
 * [721] 账户合并
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 BFS
 * @param {string[][]} accounts
 * @return {string[][]}
 */
const accountsMerge = function (accounts) {
  // 统计邮箱对应的账户索引
  const emailToIndex = new Map();
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    for (let j = 1; j < account.length; j++) {
      const email = account[j];
      if (!emailToIndex.has(email)) {
        emailToIndex.set(email, []);
      }
      emailToIndex.get(email).push(i);
    }
  }

  const res = [];
  const visitedEmails = new Set();
  // 遍历当前邮箱关联账号对应的所有邮箱，统计合并后的邮箱列表
  for (const email of emailToIndex.keys()) {
    if (visitedEmails.has(email)) {
      continue;
    }
    const mergedEmails = [];
    const q = [email];
    visitedEmails.add(email);
    // BFS(邮箱的关联关系是树状结构)
    while (q.length > 0) {
      const curEmail = q.shift();
      mergedEmails.push(curEmail);
      let indexes = emailToIndex.get(curEmail);
      // 遍历当前email对应的所有账户
      for (let index of indexes) {
        const account = accounts[index];
        // 遍历当前账户对应的所有email
        for (let j = 1; j < account.length; j++) {
          let nextEmail = account[j];
          if (visitedEmails.has(nextEmail)) {
            continue;
          }
          visitedEmails.add(nextEmail);
          q.push(nextEmail);
        }
      }
    }

    const username = accounts[emailToIndex.get(email)[0]][0];
    // mergedEmail 是 userName 的所有邮箱
    mergedEmails.sort();
    mergedEmails.unshift(username);
    res.push([...mergedEmails]);
  }

  return res;
};
// @lc code=end

// your test code here
accountsMerge([
  ["Alex", "Alex5@m.co", "Alex4@m.co", "Alex0@m.co"],
  ["Ethan", "Ethan3@m.co", "Ethan3@m.co", "Ethan0@m.co"],
  ["Kevin", "Kevin4@m.co", "Kevin2@m.co", "Kevin2@m.co"],
  ["Gabe", "Gabe0@m.co", "Gabe3@m.co", "Gabe2@m.co"],
  ["Gabe", "Gabe3@m.co", "Gabe4@m.co", "Gabe2@m.co"],
]);
/*
// @lcpr case=start
// [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John",\n"johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]\n
// @lcpr case=end

// @lcpr case=start
// \n[["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]\n
// @lcpr case=end

 */
