import { Console } from "@woowacourse/mission-utils";
import { validateAmount } from "../validation/validateAmount.js";
import { validateWinNumber } from "../validation/validateWinNumber.js";
import { validateBonusNumber } from "../validation/validateBonusNumber.js";
class InputView {
  static async getAmount() {
    try {
      const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      const numberInput = Number(input);
      validateAmount(numberInput);

      return Number(input);
    } catch (error) {
      Console.print(error.message);
      await this.getAmount();
    }

    return null;
  }

  static async getWinNumber() {
    try {
      const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.");
      const numbersArr = input.split(",").map((number) => {
        return Number(number);
      });
      validateWinNumber(numbersArr);
      return numbersArr;
    } catch (error) {
      Console.print(error.message);
      await this.getWinNumber();
    }
  }
  static async getBonusNumber(winNumbers) {
    try {
      const input = await Console.readLineAsync("보너스번호를 입력해주세요");
      const numberInput = Number(input);
      validateBonusNumber(numberInput, winNumbers);
      return numberInput;
    } catch (error) {
      Console.print(error.message);
      await this.getBonusNumber();
    }
  }
}

export default InputView;
