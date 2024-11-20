import { Console } from "@woowacourse/mission-utils";
export default class OutputView {
  static printCount(count) {
    Console.print(`${count}개를 구매했습니다`);
  }
  static printLottos(lottoStrings) {
    lottoStrings.forEach((lottoString) => {
      Console.print(lottoString);
    });
  }
}
