
class LottoStatistics {
  #statistics;

  constructor() {
    // index: 0, rank: 1등, count: 6개
    // index: 1, rank: 2등, count: 5개 + bonus
    // index: 2, rank: 3등, count: 5개
    // index: 3, rank: 4등, count: 4개
    // index: 4, rank: 5등, count: 3개
    this.#statistics = new Array(5).fill(0);
  }

  getLottoStatistics() {
    return this.#statistics;
  }

  /**
   * 해당 등수에 대한 값을 +1 해준다.
   * @param {number} winningRank 
   */
  addRankCount(winningRank) {
    if (winningRank !== -1) {
      this.#statistics[winningRank - 1] += 1;
    }
  }
}

export default LottoStatistics;
