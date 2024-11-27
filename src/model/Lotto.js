class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  getWinningRank(winningNumbers, bonusNumber) {
    let count = 0;

    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(number)) {
        count += 1;
      }
    });

    if (count === 5) {
      count = this.#checkBonusNumber(bonusNumber);
    }

    return this.#checkLottoRank(count);
  }

  #checkBonusNumber(bonusNumber) {
    const hasBonusNumber = this.#numbers.includes(bonusNumber);
    if (hasBonusNumber) return 5.5;

    return 5;
  }

  #checkLottoRank(count) {
    switch (count) {
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        return 3;
      case 5.5:
        return 2;
      case 6:
        return 1;
    }
  }
}

export default Lotto;
