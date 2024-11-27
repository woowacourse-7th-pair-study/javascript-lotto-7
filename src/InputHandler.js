import Validate from "./Validate.js";
import InputView from "./Views/InputView.js";
import { Console } from "@woowacourse/mission-utils";

export default class InputHandler {
  static async amount() {
    try {
      const amountString = await InputView.getAmount();
      const amount = Number(amountString);
      Validate.checkAmount(amount);
      return amount;
    } catch (error) {
      Console.print(error);
      this.amount();
    }
  }

  static async winNumbers() {
    try {
      const winNumbersString = await InputView.getWinNumbers();
      const winNumbers = winNumbersString
        .split(",")
        .map((number) => Number(number));
      Validate.checkWinnNumbers(winNumbers);
      return winNumbers;
    } catch (error) {
      Console.print(error);
      this.winNumbers();
    }
  }

  static async bonusNumber(winNumbers) {
    try {
      const bonusNumberString = await InputView.getBonusNumber();
      const bonusNumber = Number(bonusNumberString);
      Validate.checkBonusNumber(bonusNumber, winNumbers);
      return bonusNumber;
    } catch (error) {
      Console.print(error);
      this.bonusNumber();
    }
  }
}
