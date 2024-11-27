import { Console } from '@woowacourse/mission-utils';

const View = {
  async inputPurchaseAmount() {
    return await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  },

  async inputWinningNumbers() {
    return await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
  },

  async inputBonusNumber() {
    return await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
  },

  printError(message) {
    Console.print(message);
  },

  printLotto({ count, lottoStrings }) {
    Console.print(`\n${count}개를 구매했습니다.`);
    lottoStrings.forEach((lottoString) => {
      Console.print(lottoString);
    });
  },

  printResult(resultString) {
    Console.print('당첨 통계\n---\n');
    Console.print(resultString);
  },

  printProfitRate(rate) {
    Console.print(`총 수익률은 ${rate}%입니다.`);
  },
};
export default View;
