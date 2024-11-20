import parser from "../utils/parser.js";
import validation from "../utils/validation.js";

class BonusNumber {
  #bonusNumber;

  constructor(number, winningLottoNums) {
    const parsedNumber = parser.stringToNumber(number);
    this.#validate(parsedNumber, winningLottoNums);
    this.#bonusNumber = parsedNumber;
  }

  #validate(parsedNumber, winningLottoNums) {
    if (!validation.isNumber(parsedNumber)) {
      throw new Error("[ERROR] 숫자가 아닙니다. 다시 입력해주세요.");
    }

    if (!validation.isInteger(parsedNumber)) {
      throw new Error("[ERROR] 정수가 아닙니다. 다시 입력해주세요.");
    }

    if (winningLottoNums.includes(parsedNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다. 다시 입력해주세요.");
    }

    if (!validation.isInRange(parsedNumber)) {
      throw new Error("[ERROR] 로또 번호는 1 이상 45 이하의 숫자만 가능합니다. 다시 입력해주세요.");
    }
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default BonusNumber;
