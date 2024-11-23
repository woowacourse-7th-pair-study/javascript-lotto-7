import { WIN_AMOUNT } from "./constants.js";
class LottoResult {
  #winNumber;
  #bonusNumber;
  #result;

  constructor(winNumber, bonusNumber) {
    this.#winNumber = winNumber;
    this.#bonusNumber = bonusNumber;
    this.#result = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  }

  matchCount(lottos) {
    return lottos.map((lotto) => {
      const count = lotto.getMatchCount(this.#winNumber);
      const matchBonusNumber = lotto.getIsMatchBonusNumber(this.#bonusNumber);
      return { count, matchBonusNumber };
    });
  }

  generateResult(matchCounts) {
    matchCounts.forEach(({ count, matchBonusNumber }) => {
      const rank = this.#countToRank(count, matchBonusNumber);
      this.#result[rank] += 1;
    });
  }

  #countToRank(count, matchBonusNumber) {
    if (count === 3) return 5;
    if (count === 4) return 4;
    if (count === 5) {
      if (matchBonusNumber) return 2;
      return 3;
    }
    if (count === 6) return 1;
    return 6;
  }

  get result() {
    return this.#result;
  }

  calculateWinAmount() {
    let winAmount = 0;
    Object.keys(this.#result).forEach((key) => {
      winAmount += WIN_AMOUNT[key] * this.#result[key];
    });
    return winAmount;
  }
}

export default LottoResult;
