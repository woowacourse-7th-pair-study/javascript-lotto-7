import { Random } from "@woowacourse/mission-utils";
import { LOTTO_BOUNDARY, SERVICE_CONSTANTS } from "../constants.js";

class LottoMachine {
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  generateLotto(amount) {
    const count = amount / SERVICE_CONSTANTS.initial_amount;

    for (let i = 0; i < count; i += 1) {
      const lotto = Random.pickUniqueNumbersInRange(
        LOTTO_BOUNDARY.min,
        LOTTO_BOUNDARY.max,
        LOTTO_BOUNDARY.length
      );
      lotto.sort((a, b) => a - b);

      this.#lottos.push(lotto);
    }
  }

  get lottos() {
    return this.#lottos;
  }
}

export default LottoMachine;
