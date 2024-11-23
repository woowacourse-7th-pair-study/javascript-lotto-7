import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

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
      const randomNumbers = this.#generateRandomNumbers();
      const generatedLotto = new Lotto(randomNumbers);

      this.#lottos.push(generatedLotto);
    }
  }

  #generateRandomNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);

    return randomNumbers;
  }

  get count() {
    return this.#count;
  }

  get lottos() {
    return this.#lottos;
  }

  getLottosNumberString() {
    return this.#lottos.map((lotto) => lotto.getNumberString());
  }
}

export default LottoMachine;
