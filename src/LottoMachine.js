import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { LOTTO_PRICE, LOTTO_PRIZE_INFO } from "./constant/lottoRule.js";
import { ERROR_MESSAGE } from "./constant/messgae.js";

class LottoMachine {
  #lottoCount;
  #lottos = [];
  #result;

  constructor(amount) {
    this.#validatePurchaseAmount(amount);
    this.#lottoCount = amount / LOTTO_PRICE;
  }

  #validatePurchaseAmount(amount) {
    if (Number.isNaN(amount)) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }
    if (!Number.isInteger(amount)) {
      throw new Error(ERROR_MESSAGE.NOT_INTEGER);
    }
    if (amount < LOTTO_PRICE) {
      throw new Error(ERROR_MESSAGE.UNDER_LOTTO_PRICE);
    }
    if (amount % LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.NOT_DIVIDED);
    }
  }

  createLottos() {
    for (let i = 0; i < this.#lottoCount; i += 1) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      const lotto = new Lotto(lottoNumbers);
      this.#lottos.push(lotto);
    }
  }

  getLottosForPrint() {
    return {
      count: this.#lottoCount,
      lottoStrings: this.#lottos.map((lotto) => lotto.getNumberForPrint()),
    };
  }

  calculateResult(winningLotto, bonusNumber) {
    this.#result = Object.fromEntries(Object.keys(LOTTO_PRIZE_INFO).map((key) => [key, 0]));

    this.#lottos.forEach((lotto) => {
      const matchCount = lotto.getMatchCount(winningLotto);
      const isBonusMatch = bonusNumber.hasMatch(lotto);
      const rank = this.#getRank(matchCount, isBonusMatch);
      if (rank) this.#result[rank] += 1;
    });
    console.log(this.#result);
  }

  #getRank(matchCount, isBonusMatch) {
    if (matchCount === 6) return 1;
    if (matchCount === 5) {
      if (isBonusMatch) return 2;
      return 3;
    }
    if (matchCount === 4) return 4;
    if (matchCount === 3) return 5;
    return null;
  }

  getResultForPrint() {
    return Object.entries(this.#result).map(([key, count]) => ({
      string: LOTTO_PRIZE_INFO[key].string,
      price: LOTTO_PRIZE_INFO[key].price,
      count,
    }));
  }

  getProfitRate() {
    const purchaseAmount = this.#lottoCount * LOTTO_PRICE;

    const profit = Object.entries(this.#result).reduce(
      (acc, [key, count]) => acc + count * LOTTO_PRIZE_INFO[key].price,
      0
    );

    return ((profit / purchaseAmount) * 100).toLocaleString("ko-KR", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  }
}

export default LottoMachine;
