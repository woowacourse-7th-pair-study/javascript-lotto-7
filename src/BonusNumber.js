import { ERROR_MESSAGE } from './constant/messgae.js';

class BonusNumber {
  #bonusNumber;

  constructor(number, winningLotto) {
    this.#validateNumber(number, winningLotto);
    this.#bonusNumber = number;
  }

  #validateNumber(number, winningLotto) {
    if (Number.isNaN(Number(number))) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }
    if (!Number.isInteger(number)) {
      throw new Error(ERROR_MESSAGE.NOT_INTEGER);
    }
    if (number < 1 || number > 45) {
      throw new Error(ERROR_MESSAGE.NOT_IN_RANGE);
    }
    if (winningLotto.hasNumber(number)) {
      throw new Error(ERROR_MESSAGE.NO_DUPLICATE_NUMBER);
    }
  }

  hasMatch(lotto) {
    return lotto.hasNumber(this.#bonusNumber);
  }
}

export default BonusNumber;
