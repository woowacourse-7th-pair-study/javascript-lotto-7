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
  }

  checkMatchWithWinner(winNumbers) {
    let count = 0;
    winNumbers.forEach((number) => {
      if (this.#numbers.includes(number)) count += 1;
    });

    return count;
  }

  checkBonus(bonus) {
    return this.#numbers.includes(bonus);
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
