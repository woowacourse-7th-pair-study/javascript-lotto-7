import { throwWoowaError } from "../util/error.js";
import { validateNumber } from "./validateNumber.js";
export const validateBonusNumber = (bonusNumber, winNumbers) => {
  validateNumber(bonusNumber);
  if (winNumbers.includes(bonusNumber)) {
    throwWoowaError("보너스 번호와 당첨 번호는 중복되면 안됩니다.");
  }
};
