import { LOTTO_BOUNDARY, LOTTO_RANK_INFO } from "./constants.js";
import { Intersection } from "./utils/Intersection.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_BOUNDARY.length) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  calculateMatch(winningNumbers, bonusNumber) {
    const userMatchCount = Intersection(this.#numbers, winningNumbers);
    const userMatchBonus = this.#numbers.includes(bonusNumber);

    for (const rank in LOTTO_RANK_INFO) {
      const { matchCount, matchBonus } = LOTTO_RANK_INFO[rank];
      if (matchCount === userMatchCount) {
        if (userMatchCount === 5 && userMatchBonus === matchBonus) {
          return 2;
        } else {
          return rank;
        }
      }
    }
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
