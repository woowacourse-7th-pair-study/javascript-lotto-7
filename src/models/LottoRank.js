import { LOTTO_INFO } from "../Constants";
export default class LottoRank {
  #lottoResult;
  constructor() {
    this.#lottoResult = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
    };
  }

  calculateRank(lotto, winNumbers, bonusNumber) {
    const curMatchCount = lotto.checkMatchWithWinner(winNumbers);
    const curMatchBonus = lotto.checkBonus(bonusNumber);

    for (let i = Object.keys(LOTTO_INFO).length; i > 0; i--) {
      const { matchCount } = LOTTO_INFO[i];
      if (matchCount == curMatchCount) {
        if (curMatchCount == 5 && curMatchBonus == true) {
          return 2;
        }
        return i;
      }
    }
    return 6;
  }

  calculateLottoResult(lottos, winNumbers, bonusNumber) {
    lottos.forEach((lotto) => {
      const rank = this.calculateRank(lotto, winNumbers, bonusNumber);
      this.#lottoResult[rank] += 1;
    });
  }
  get lottoResult() {
    return this.#lottoResult;
  }
}
