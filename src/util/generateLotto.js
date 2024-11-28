import { Random } from '@woowacourse/mission-utils';
import { LOTTO_RULE } from '../constant/lotto.js';

const generateLotto = (amount) => {
  const issuedLottos = [];
  const lottoCount = amount / LOTTO_RULE.UNIT;

  for (let count = 0; count < lottoCount; count++) {
    const randomLotto = Random.pickUniqueNumbersInRange(
      LOTTO_RULE.MIN_RANGE, 
      LOTTO_RULE.MAX_RANGE, 
      LOTTO_RULE.LENGTH
    );
    issuedLottos.push(randomLotto.sort((a, b) => a - b));
  }

  return issuedLottos;
}

export default generateLotto;
