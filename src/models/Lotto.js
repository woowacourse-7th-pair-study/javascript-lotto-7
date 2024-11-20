import parser from "../utils/parser.js";
import validation from "../utils/validation.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    const parsedNumbers = parser.stringToNumArray(numbers);
    this.#validate(parsedNumbers);
    this.#numbers = parsedNumbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    numbers.forEach((num) => {
      if (!validation.isNumber(num)) {
        throw new Error("[ERROR] 숫자가 아닙니다. 다시 입력해주세요.");
      }

      if (!validation.isInteger(num)) {
        throw new Error("[ERROR] 정수가 아닙니다. 다시 입력해주세요.");
      }

      if (!validation.isInRange(num)) {
        throw new Error(
          "[ERROR] 로또 번호는 1 이상 45 이하의 숫자만 가능합니다. 다시 입력해주세요."
        );
      }
    });

    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 당첨 번호는 중복될 수 없습니다. 다시 입력해주세요.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
