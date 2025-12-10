// 0-1 背包问题

/**
 * v1 动态规划（自顶向下 + 备忘录）
 * 在不超过背包容量的前提下，最多能装的价值是多少
 * @param {*} N 背包最多装 N 件物品
 * @param {*} W 背包的最大重量 W
 * @param {number[]} weight 物品的重量数组
 * @param {number[]} value 物品的价值数组
 */
let bag = function (N, W, weight, value) {
  let memo = Array.from({ length: N + 1 }, () => new Array(W + 1).fill(-1));
  return dp(N, W, weight, value, memo);
};

// 定义：返回表示当背包的容量为 w 时，只从前 n 个物品中选择的最大价值
let dp = function (n, w, weight, value, memo) {
  // 基础情况
  if (n === 0 || w === 0) return 0;

  // 检查备忘录
  if (memo[n][w] !== -1) return memo[n][w];

  // 核心逻辑：决策是否放入第n个物品（索引为n-1）
  if (weight[n - 1] > w) {
    // 如果第n个物品重量超过当前背包容量，则不能放入
    memo[n][w] = dp(n - 1, w, weight, value, memo);
  } else {
    // 否则选择价值更高的一种策略：放入或不放入第n个物品
    memo[n][w] = Math.max(
      dp(n - 1, w, weight, value, memo), // 不放入第n个物品
      value[n - 1] + dp(n - 1, w - weight[n - 1], weight, value, memo) // 放入第n个物品
    );
  }

  return memo[n][w];
};
