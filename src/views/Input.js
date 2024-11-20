import { Console } from '@woowacourse/mission-utils';

const InputView = {
  readAmountInput: async () => {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return Number(input);
  },
  readWinningNumbersInput: async () => {
    const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    return input.split(',').map(Number);
  },

  readBounsNumberInput: async () => {
    const input = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    return Number(input);
  },
};

export default InputView;
