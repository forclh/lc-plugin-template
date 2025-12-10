// 0-1 背包问题

/**
 * v2 动态规划（自底向上+滚动数组）
 *
 * 时间复杂度: O(N * W)
 * 空间复杂度: O(W)
 * @param {*} N 背包最多装 N 件物品
 * @param {*} W 背包的最大重量 W
 * @param {number[]} weight 物品的重量数组
 * @param {number[]} value 物品的价值数组
 */
let bag = function (N, W, weight, value) {
  // dp[j]表示当背包容量为j时能够装的最大价值
  const dp = new Array(W + 1).fill(0);
  // 遍历物品
  for (let i = 0; i < N; i++) {
    // 倒序遍历容量
    for (let j = W; j >= weight[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
    }
  }
  return dp[W];
};

// 为什么需要倒序？
// 如果正序遍历 (0 -> W)：在计算 dp[j] 时，dp[j - weight[i]] 已经是当前层(第i个物品)更新过的值了。
// 这意味着我们可能会多次使用同一个物品（即完全背包问题）。
//
// 倒序遍历 (W -> 0)：在计算 dp[j] 时，dp[j - weight[i]] 还是上一层(第i-1个物品)的状态。
// 这保证了每个物品在每个容量下只被考虑一次（即0-1背包问题）。

bag(3, 4, [2, 1, 3], [4, 2, 3]);
