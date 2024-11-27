import { LOTTO_LENGTH, LOTTO_NUMBER_RANGE } from './constant/lottoRule.js';
import { ERROR_MESSAGE } from './constant/messgae.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_LENGTH) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_LENGTH);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.NO_DUPLICATE_NUMBER);
    }

    numbers.forEach((num) => {
      this.#validateEachNumber(num);
    });
  }

  #validateEachNumber(num) {
    if (Number.isNaN(Number(num))) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }
    if (!Number.isInteger(num)) {
      throw new Error(ERROR_MESSAGE.NOT_INTEGER);
    }
    if (num < LOTTO_NUMBER_RANGE.min || num > LOTTO_NUMBER_RANGE.max) {
      throw new Error(ERROR_MESSAGE.NOT_IN_RANGE);
    }
  }

  getNumberForPrint() {
    return `[${this.#numbers.join(', ')}]`;
  }

  hasNumber(number) {
    return this.#numbers.includes(number);
  }

  getMatchCount(lotto) {
    return this.#numbers.filter((val) => lotto.hasNumber(val)).length;
  }
}

export default Lotto;
