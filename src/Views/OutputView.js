import { Console } from "@woowacourse/mission-utils";
import { LOTTO_INFO } from "../Constants";
class OutputView {
  static printLottoCount(count) {
    Console.print(`${count}개를 구매했습니다.`);
  }

  static printLottos(lottoNumbers) {
    lottoNumbers.forEach((lotto) => {
      Console.print(lotto);
    });
  }

  static printLottoResult(lottoResult) {
    Console.print("\n당첨 통계\n");
    Console.print("---\n");

    Object.keys(LOTTO_INFO)
      .reverse()
      .forEach((rank) => {
        const [matchCount, matchBonus, prize] = LOTTO_INFO[rank];

        if (matchBonus) {
          Console.print(
            `${matchCount}개 일치, 보너스 볼 일치 (${prize.toLocaleString()}원) - ${
              lottoResult[rank]
            }개\n`
          );
        } else {
          Console.print(
            `${matchCount}개 일치 (${prize.toLocaleString()}원) - ${
              lottoResult[rank]
            }개\n`
          );
        }
      });
  }

  static printEarningRate(earningRate) {
    const rateString = earningRate.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    Console.print(`총 수익률은 ${rateString}% 입니다.`);
  }
}

export default OutputView;
