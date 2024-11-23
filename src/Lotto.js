class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  getNumberString() {
    const numberString = `[${this.#numbers.join(',')}]`;
    return numberString;
  }

  getMatchCount(winNumbers) {
    let count = 0;

    this.#numbers.forEach((lottoNumber) => {
      if (winNumbers.includes(lottoNumber)) count += 1;
    });

    return count;
  }

  getIsMatchBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
