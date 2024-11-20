import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoMachine {
  #lottos;
  #count;

  constructor() {
    this.#lottos = [];
  }

  generateLotto(amount) {
    const count = amount / 1000;
    this.#count = count;

    for (let i = 0; i < count; i++) {
      const generatedLotto = new Lotto([1, 2, 3, 4, 5, 6]);

      this.#lottos.push(generatedLotto);
    }
  }

  generateRandomNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);

    return randomNumbers;
  }

  get count() {
    return this.#count;
  }
  getLottosNumberString() {
    return this.#lottos.map((lotto) => {
      return lotto.getNumberString();
    });
  }
}

export default LottoMachine;
