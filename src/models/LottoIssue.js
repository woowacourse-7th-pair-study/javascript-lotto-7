import { Random } from "@woowacourse/mission-utils";
import validation from "../utils/validation.js";
import parser from "../utils/parser.js";

class LottoIssue {
  #issuedLotto = [];

  constructor(lottoPurchase) {
    const parsedLottoPurchase = parser.stringToNumber(lottoPurchase);
    this.#validateLottoPurchase(parsedLottoPurchase);
    this.#issueLotto(parsedLottoPurchase);
  }

  getIssuedLotto() {
    return this.#issuedLotto;
  }

  #issueLotto(lottoPurchase) {
    const lottoCount = lottoPurchase / 1_000;

    for (let count = 0; count < lottoCount; count++) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumbers.sort((a, b) => a - b);
      this.#issuedLotto.push(lottoNumbers);
    }
  }

  #validateLottoPurchase(lottoPurchase) {
    if (!validation.isNumber(lottoPurchase)) {
      throw new Error("[ERROR] 숫자가 아닙니다. 다시 입력해주세요.");
    }

    if (!validation.isInteger(lottoPurchase)) {
      throw new Error("[ERROR] 정수가 아닙니다. 다시 입력해주세요.");
    }

    if (lottoPurchase % 1_000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위가 아닙니다. 다시 입력해주세요.");
    }

    if (lottoPurchase < 1_000 || lottoPurchase > 100_000) {
      throw new Error("[ERROR] 1,000원 이상 100,000원 이하여야 합니다. 다시 입력해주세요.");
    }
  }
}

export default LottoIssue;
