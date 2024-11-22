import { LOTTO_RANK_INFO } from "../constants.js";

class LottoCalculator {
  #totalPrize;

  constructor() {
    this.#totalPrize = 0;
  }

  calculateTotalPrize(result) {
    for (const rank in LOTTO_RANK_INFO) {
      this.#totalPrize += result[rank] * LOTTO_RANK_INFO[rank].prize;
    }
  }

  calculateEarningRate(amount) {
    const earningRate = (this.#totalPrize / amount) * 100;

    return earningRate.toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  }
}

export default LottoCalculator;
