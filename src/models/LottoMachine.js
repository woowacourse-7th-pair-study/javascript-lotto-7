import { Random } from '@woowacourse/mission-utils';

class LottoMachine {
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  generateLotto(amount) {
    const count = amount / 1000;

    for (let i = 0; i < count; i += 1) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      lotto.sort((a, b) => a - b);

      this.#lottos.push(lotto);
    }
  }

  get lottos() {
    return this.#lottos;
  }
}

export default LottoMachine;
