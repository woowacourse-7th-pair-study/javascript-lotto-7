import { LOTTO_RANK_PRIZE } from '../constant/lotto.js';

class LottoCalculator {
  #profitRate;

  constructor(statistics, amount) {
    this.#profitRate = this.#calculateProfitRate(statistics, amount);
  }

  getProfitRate() {
    return this.#profitRate;
  }

  #calculateTotalWinningPrize(statistics) {
    return statistics.reduce(
      (arr, cur, idx) => (arr += LOTTO_RANK_PRIZE[idx] * cur),
      0,
    );
  }

  #calculateProfitRate(statistics, amount) {
    const totalWinningPrize = this.#calculateTotalWinningPrize(statistics);

    return ((totalWinningPrize / amount) * 100).toLocaleString('ko-KR', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  }
}

export default LottoCalculator;
