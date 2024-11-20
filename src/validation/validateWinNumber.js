import { throwWoowaError } from "../util/error.js";
import { validateNumber } from "./validateNumber.js";

export const validateWinNumber = (numbers) => {
  numbers.forEach((number) => {
    validateNumber(number);
  });
  if (numbers.length !== 6) {
    throwWoowaError("로또 수량은 6개여야 한다.");
  }

  if (new Set(numbers).size !== numbers.length) {
    throwWoowaError("중복된 숫자는 입력하지 못한다.");
  }
};
