class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다. 다시 입력해주세요.");
    }

    numbers.forEach((num) => {
      if (Number.isNaN(Number(num))) {
        throw new Error("[ERROR] 숫자가 아닙니다. 다시 입력해주세요.");
      }
      if (!Number.isInteger(num)) {
        throw new Error("[ERROR] 정수가 아닙니다. 다시 입력해주세요.");
      }
      if (num < 1 || num > 45) {
        throw new Error("[ERROR] 로또 번호는 1~45 범위 내로만 입력 가능합니다. 다시 입력해주세요.");
      }
    });
  }

  getNumberForPrint() {
    return `[${this.#numbers.join(", ")}]`;
  }

  hasNumber(number) {
    return this.#numbers.includes(number);
  }

  getMatchCount(lotto) {
    return this.#numbers.filter((val) => lotto.hasNumber(val)).length;
  }
}

export default Lotto;
