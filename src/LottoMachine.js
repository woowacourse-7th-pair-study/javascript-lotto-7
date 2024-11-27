import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoMachine {
  #lottoCount;
  #lottos;

  constructor(amount) {
    const purchaseAmount = Number(amount);
    this.#validatePurchaseAmount(purchaseAmount);
    this.#lottoCount = purchaseAmount / 1000;
  }

  #validatePurchaseAmount(amount) {
    // - [ ] 숫자가 아닌 경우 예외
    if (Number.isNaN(amount)) {
      throw new Error("[ERROR] 숫자가 아닙니다. 다시 입력해주세요.");
    }
    // - [ ] 정수가 아닌 경우 예외
    if (!Number.isInteger(amount)) {
      throw new Error("[ERROR] 정수가 아닙니다. 다시 입력해주세요.");
    }
    // - [ ] 1,000 이상 이어야 함
    if (amount < 1000) {
      throw new Error("[ERROR] 1,000원 이상 입력 가능합니다. 다시 입력해주세요.");
    }
    // - [ ] 1,000으로 나눠떨어져야 함
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위로 다시 입력해주세요.");
    }
  }

  createLottos() {
    for (let i = 0; i < this.#lottoCount; i += 1) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(lottoNumbers);
      this.#lottos.push(lotto);
    }
  }
}

export default LottoMachine;
