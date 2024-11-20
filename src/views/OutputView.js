import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printIssuedLotto(issuedLotto) {
    Console.print(`\n${issuedLotto.length}개를 구매했습니다.`);
    issuedLotto.forEach((lottoNumber) => {
      Console.print(`[${lottoNumber.join(", ")}]`);
    });
  },
  printMessage(message) {
    Console.print(message);
  },
};

export default OutputView;
