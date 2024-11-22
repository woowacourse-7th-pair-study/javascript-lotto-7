class LottoResult {
  #lottoResult;

  constructor() {
    this.#lottoResult = new Map([
      [6, 0], // 6개 일치
      [5.5, 0], // 5개 보너스 일치
      [5, 0], // 5개 일치
      [4, 0], // 4개 일치
      [3, 0], // 3개 일치
    ]);
  }

  calculate(issuedLotto, winningLottoNumbers, bonusNumber) {
    issuedLotto.forEach((lotto) => {
      const matchCount = this.#calculateMatchCount(lotto, winningLottoNumbers);
      const isBonusMatch = lotto.includes(bonusNumber);

      const matchRank = this.#getMatchRank(matchCount, isBonusMatch);
      if (matchRank >= 3) this.#lottoResult.set(matchRank, this.#lottoResult.get(matchRank) + 1);
    });
  }

  #calculateMatchCount(lotto, winningLottoNumbers) {
    return winningLottoNumbers.filter((number) => lotto.includes(number)).length;
  }

  #getMatchRank(matchCount, isBonusMatch) {
    if (matchCount === 5 && isBonusMatch) return 5.5;
    return matchCount;
  }

  getLottoResult() {
    return this.#lottoResult;
  }
}

export default LottoResult;
