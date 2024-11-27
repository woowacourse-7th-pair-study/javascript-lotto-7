class BonusNumber {
  #bonusNumber;

  constructor(number, winningLotto) {
    this.#validateNumber(number, winningLotto);
  }

  #validateNumber(number, winningLotto) {
    if (Number.isNaN(Number(number))) {
      throw new Error("[ERROR] 숫자가 아닙니다. 다시 입력해주세요.");
    }
    if (!Number.isInteger(number)) {
      throw new Error("[ERROR] 정수가 아닙니다. 다시 입력해주세요.");
    }
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 로또 번호는 1~45 범위 내로만 입력 가능합니다. 다시 입력해주세요.");
    }
    if (winningLotto.hasNumber(number)) {
      throw new Error("[ERROR] 당첨 번호와 중복됩니다. 다시 입력해주세요.");
    }
  }

  hasMatch(lotto) {
    return lotto.hasNumber(this.#bonusNumber);
  }
}

export default BonusNumber;
