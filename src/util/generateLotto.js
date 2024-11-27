import { Random } from '@woowacourse/mission-utils';

const generateLotto = (amount) => {
  const issuedLottos = [];
  const lottoCount = amount / 1_000;

  for (let count = 0; count < lottoCount; count++) {
    const randomLotto = Random.pickUniqueNumbersInRange(1, 45, 6);
    issuedLottos.push(randomLotto.sort((a, b) => a - b));
  }

  return issuedLottos;
}

export default generateLotto;
