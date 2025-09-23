/*
 * @lc app=leetcode.cn id=853 lang=javascript
 * @lcpr version=30203
 *
 * [853] 车队
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 单调栈
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
let carFleet = function (target, position, speed) {
  // 形成车队的条件：
  // 起始位置靠前的车到达终点的时间大于起始位置靠后的车，就会形成车队
  // 到达终点的时间为起始位置靠前的需要的时间
  let n = position.length;
  let cars = new Array(n);
  for (let i = 0; i < n; i++) {
    cars[i] = [position[i], speed[i]];
  }
  // 按照初始位置，从小到大排序
  cars.sort((a, b) => a[0] - b[0]);
  // 计算每辆车到达终点的时间
  let time = new Array(n);
  for (let i = 0; i < n; i++) {
    let [p, s] = cars[i];
    time[i] = (target - p) / s;
  }

  // 使用单调栈：上一个最大元素
  // let stack = [];
  // for (let t of time) {
  //   while (stack.length !== 0 && t >= stack[stack.length - 1]) {
  //     stack.pop();
  //   }
  //   stack.push(t);
  // }
  // return stack.length;

  // 避免使用栈模拟，倒序遍历取递增序列就是答案
  let res = 0;
  maxTime = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (time[i] > maxTime) {
      maxTime = time[i];
      res++;
    }
  }
  return res;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 12\n[10,8,0,5,3]\n[2,4,1,1,3]\n
// @lcpr case=end

// @lcpr case=start
// 10\n[3]\n[3]\n
// @lcpr case=end

// @lcpr case=start
// 100\n[0,2,4]\n[4,2,1]\n
// @lcpr case=end

 */
