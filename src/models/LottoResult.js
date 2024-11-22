class LottoResult {
  #lottoResult;

  constructor() {
    this.#lottoResult = new Map([
      [6, { count: 0, amount: 2_000_000_000 }], // 6개 일치
      [5.5, { count: 0, amount: 30_000_000 }], // 5개 보너스 일치
      [5, { count: 0, amount: 1_500_000 }], // 5개 일치
      [4, { count: 0, amount: 50_000 }], // 4개 일치
      [3, { count: 0, amount: 5_000 }], // 3개 일치
    ]);
  }

  calculateLottoResult(issuedLotto, winningLottoNumbers, bonusNumber) {
    issuedLotto.forEach((lotto) => {
      const matchCount = this.#calculateMatchCount(lotto, winningLottoNumbers);
      const isBonusMatch = lotto.includes(bonusNumber);

      const matchRank = this.#getMatchRank(matchCount, isBonusMatch);
      const getMatchRankValue = this.#lottoResult.get(matchRank);
      if (matchRank >= 3)
        this.#lottoResult.set(matchRank, {
          ...getMatchRankValue,
          count: getMatchRankValue.count + 1,
        });
    });
  }

  calculateProfitRate(issuedLotto) {
    const lottoPurchase = issuedLotto.length * 1_000;
    const totalProfit = this.#calculateProfit();
    return ((totalProfit / lottoPurchase) * 100).toLocaleString("ko-KR", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  }

  #calculateProfit() {
    return Array.from(this.#lottoResult).reduce((acc, [_, { count, amount }]) => {
      return (acc += count * amount);
    }, 0);
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
