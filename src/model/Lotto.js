import { LOTTO_RANK_INDEX } from '../constant/lotto.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  getWinningRank(winningNumbers, bonusNumber) {
    let count = 0;

    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(number)) count += 1
    });

    if (count === 5) count = this.#checkBonusNumber(bonusNumber);

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
        return LOTTO_RANK_INDEX.fifth;
      case 4:
        return LOTTO_RANK_INDEX.fourth;
      case 5:
        return LOTTO_RANK_INDEX.third;
      case 5.5:
        return LOTTO_RANK_INDEX.second;
      case 6:
        return LOTTO_RANK_INDEX.first;
      default: 
        return LOTTO_RANK_INDEX.lose;
    }
  }
}

export default Lotto;
