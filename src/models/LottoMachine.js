import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

export default class LottoMachine {
  static generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedRandomNumbers = randomNumbers.sort((a, b) => a - b);
      const newLotto = new Lotto(sortedRandomNumbers);
      lottos.push(newLotto);
    }
    return lottos;
  }
}
