import { Console } from "@woowacourse/mission-utils";
class InputView {
  static async getAmount() {
    const amount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");

    return amount;
  }

  static async getWinNumbers() {
    const winNumbers = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );

    return winNumbers;
  }
  static async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );

    return bonusNumber;
  }
}

export default InputView;
