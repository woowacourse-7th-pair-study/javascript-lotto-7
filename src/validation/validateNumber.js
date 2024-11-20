import { throwWoowaError } from "../util/error.js";
export const validateNumber = (number) => {
  if (Number.isNaN(number)) {
    throwWoowaError("당첨번호는 숫자여야 합니다");
  }
  if (!Number.isInteger(number)) {
    throwWoowaError("당첨 번호는 정수여야합니다");
  }
  if (number < 1 || number > 45) {
    throwWoowaError("당첨 번호는 1~45 사이의 값이여야 합니다");
  }
};
