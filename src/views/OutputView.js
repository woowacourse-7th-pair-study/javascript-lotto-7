import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printIssuedLotto(issuedLotto) {
    Console.print(`${issuedLotto.length}개를 구매했습니다.`);
    issuedLotto.forEach((lottoNumber) => {
      Console.print(`[${lottoNumber.join(", ")}]`);
    });
  },
};

export default OutputView;
