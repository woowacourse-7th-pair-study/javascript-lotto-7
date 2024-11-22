

class LottoResult {
  #lottoResult;

  constructor() {
    this.#lottoResult = new Map([
      [1, 0], // 6개 일치
      [2, 0], // 5개 보너스 일치
      [3, 0], // 5개 일치
      [4, 0], // 4개 일치
      [5, 0], // 3개 일치
    ]);
  }

  calculate(issuedLotto, winningLottoNumbers, bonusNumber) {
    issuedLotto.forEach((lotto) => {
      const matchNumber = winningLottoNumbers.filter((number) => lotto.includes(number));
    });
  }
}

export default LottoResult;
