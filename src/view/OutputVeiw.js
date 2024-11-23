import { Console } from "@woowacourse/mission-utils";
import { RESULT_HISTORY } from "../constants.js";
export default class OutputView {
  static printCount(count) {
    Console.print(`${count}개를 구매했습니다`);
  }
  static printLottos(lottoStrings) {
    lottoStrings.forEach((lottoString) => {
      Console.print(lottoString);
    });
  }
  static printResult(result) {
    RESULT_HISTORY.forEach((string, index) => {
      Console.print(`${string + "-" + result[5 - index] + "개"}`);
    });
  }
  static printWinRate(winAmount, amount) {
    Console.print(
      `총 수익률은 ${((winAmount / amount) * 100).toFixed(1)}%입니다.`
    );
  }
}
