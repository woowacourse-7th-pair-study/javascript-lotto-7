import { Console } from "@woowacourse/mission-utils";
import { LOTTO_RANK_INFO, MESSAGE } from "../constants.js";

const OutputView = {
  printLottos(lottos) {
    Console.print(MESSAGE.quantity(lottos.length));

    lottos.forEach((lotto) => {
      Console.print(lotto.numbers);
    });
  },
  printRank(lottoResult) {
    Console.print(MESSAGE.result_header);
    Console.print(MESSAGE.bars);

    for (const rank of Object.keys(LOTTO_RANK_INFO).reverse()) {
      const { matchCount, prize, matchBonus } = LOTTO_RANK_INFO[rank];

      if (matchBonus) {
        Console.print(
          MESSAGE.win_second(
            matchCount,
            prize.toLocaleString(),
            lottoResult[rank]
          )
        );
      } else {
        Console.print(
          MESSAGE.win_else(
            matchCount,
            prize.toLocaleString(),
            lottoResult[rank]
          )
        );
      }
    }
  },
  printEarningsRate(rate) {
    Console.print(MESSAGE.earning_rate(rate));
  },
};

export default OutputView;
