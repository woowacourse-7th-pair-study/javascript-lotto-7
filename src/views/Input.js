import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants.js";

const InputView = {
  readAmountInput: async () => {
    const input = await Console.readLineAsync(MESSAGE.amount);
    return Number(input);
  },
  readWinningNumbersInput: async () => {
    const input = await Console.readLineAsync(MESSAGE.winnig_number);
    return input.split(",").map(Number);
  },

  readBounsNumberInput: async () => {
    const input = await Console.readLineAsync(MESSAGE.bonus);
    return Number(input);
  },
};

export default InputView;
