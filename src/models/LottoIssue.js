import { Random } from "@woowacourse/mission-utils";
import validation from "../utils/validation";

class LottoIssue {
  #issuedLotto = [];

  constructor(lottoPurchase) {
    this.#validateLottoPurchase(lottoPurchase);
    this.#issueLotto(lottoPurchase);
  }

  getIssuedLotto() {
    return this.#issuedLotto;
  }

  #issueLotto(lottoPurchase) {
    const lottoCount = lottoPurchase / 1_000;

    for (let count = 0; count < lottoCount; count++) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#issuedLotto.push(lottoNumbers);
    }
  }

  #validateLottoPurchase(lottoPurchase) {
    const parsedLottoPurchase = Number(lottoPurchase);
    if (validation.isNumber(parsedLottoPurchase)) {
      throw new Error("[ERROR] 숫자가 아닙니다. 다시 입력해주세요.");
    }

    if (validation.isInteger(parsedLottoPurchase)) {
      throw new Error("[ERROR] 정수가 아닙니다. 다시 입력해주세요.");
    }

    if (parsedLottoPurchase % 1_000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위가 아닙니다. 다시 입력해주세요.");
    }

    if (parsedLottoPurchase < 1_000 || parsedLottoPurchase > 100_000) {
      throw new Error("[ERROR] 1,000원 이상 100,000원 이하여야 합니다. 다시 입력해주세요.");
    }
  }
}

export default LottoIssue;
