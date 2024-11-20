import { Console } from '@woowacourse/mission-utils';
import { validateAmount } from '../validation/validateAmount.js';

class InputView {
  static async getAmount() {
    try {
      const input = await Console.readLineAsync('구입금액을 입력해 주세요.');
      validateAmount(input);

      return Number(input);
    } catch (error) {
      Console.print(error.message);
      await this.getAmount();
    }

    return null;
  }

  static async getWinNumber() {
    const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.');
  }
}

export default InputView;
