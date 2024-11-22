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

  printResult(lottoResult) {
    Console.print(`3개 일치 (5,000원) - ${lottoResult.get(3)}개
4개 일치 (50,000원) - ${lottoResult.get(4)}개
5개 일치 (1,500,000원) - ${lottoResult.get(5)}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResult.get(5.5)}개
6개 일치 (2,000,000,000원) - ${lottoResult.get(6)}개`);
  },
};

export default OutputView;
