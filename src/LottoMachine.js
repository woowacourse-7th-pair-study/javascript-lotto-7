import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { LOTTO_PRIZE_INFO } from "./constant/lottoRule.js";

class LottoMachine {
  #lottoCount;
  #lottos = [];
  #result;

  constructor(amount) {
    this.#validatePurchaseAmount(amount);
    this.#lottoCount = amount / 1000;
  }

  #validatePurchaseAmount(amount) {
    if (Number.isNaN(amount)) {
      throw new Error("[ERROR] 숫자가 아닙니다. 다시 입력해주세요.");
    }
    if (!Number.isInteger(amount)) {
      throw new Error("[ERROR] 정수가 아닙니다. 다시 입력해주세요.");
    }
    if (amount < 1000) {
      throw new Error("[ERROR] 1,000원 이상 입력 가능합니다. 다시 입력해주세요.");
    }
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위로 다시 입력해주세요.");
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
    return `3개 일치 (5,000원) - ${this.#result[5]}개
4개 일치 (50,000원) - ${this.#result[4]}개
5개 일치 (1,500,000원) - ${this.#result[3]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#result[2]}개
6개 일치 (2,000,000,000원) - ${this.#result[1]}개`;
  }

  getProfitRate() {
    const purchaseAmount = this.#lottoCount * 1000;

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
