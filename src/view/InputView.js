import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readAmount() {
    const input = await Console.readLineAsync('\n구입금액을 입력해 주세요.\n');

    return input;
  },

  async readWinningNumbers() {
    const input = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');

    return input;
  },

  async readBonusNumber() {
    const input = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');

    return input;
  },
};

export default InputView;
