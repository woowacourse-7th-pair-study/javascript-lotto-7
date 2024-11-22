import { Console } from '@woowacourse/mission-utils';
import { LOTTO_RANK_INFO } from '../constants.js';
const OutputView = {
  printLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);

    lottos.forEach((lotto) => {
      Console.print(lotto.numbers);
    });
  },
  printRank(lottoResult) {
    Console.print('\n당첨 통계');
    Console.print('---------');

    for (const rank of Object.keys(LOTTO_RANK_INFO).reverse()) {
      const { matchCount, prize, matchBonus } = LOTTO_RANK_INFO[rank];

      if (matchBonus) {
        Console.print(
          `${matchCount}개 일치, 보너스 볼 일치 (${prize.toLocaleString()}원) - ${
            lottoResult[rank]
          }개`,
        );
      } else {
        Console.print(
          `${matchCount}개 일치 (${prize.toLocaleString()}원) - ${
            lottoResult[rank]
          }개`,
        );
      }
    }
  },
  printEarningsRate(rate) {
    Console.print(`총 수익률은 ${rate}%입니다.`);
  },
};

export default OutputView;
