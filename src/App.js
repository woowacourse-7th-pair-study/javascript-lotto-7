import InputView from './view/InputView.js';
import tryInput from './util/tryInput.js';
import parser from './util/parser.js';
import {
  validateAmount,
  validateBonusNumber,
  validateWinningNumbers,
} from './util/validation.js';
import generateLotto from './util/generateLotto.js';
import Lotto from './model/Lotto.js';
import OutputView from './view/OutputView.js';
import LottoStatistics from './model/LottoStatistics.js';
import LottoCalculator from './model/LottoCalculator.js';

class App {
  async run() {
    const amount = await tryInput(() => this.#getAmount());

    const lottoInstanceArray = this.#buyLotto(amount);

    const winningNumbers = await tryInput(() => this.#getWinningNumbers());
    const bonusNumber = await tryInput(() =>
      this.#getBonusNumber(winningNumbers),
    );

    const lottoStatistics = new LottoStatistics();
    const statistics = this.#getStatistics(
      lottoInstanceArray,
      winningNumbers,
      bonusNumber,
      lottoStatistics,
    );

    OutputView.printStatistics(statistics);

    const lottoCalculator = new LottoCalculator(statistics, amount);
    OutputView.printProfitRate(lottoCalculator.getProfitRate());
  }

  #getStatistics(
    lottoInstanceArray,
    winningNumbers,
    bonusNumber,
    lottoStatistics,
  ) {
    lottoInstanceArray.forEach((lottoInstance) => {
      const winningRank = lottoInstance.getWinningRank(
        winningNumbers,
        bonusNumber,
      );
      lottoStatistics.addRankCount(winningRank);
    });

    return lottoStatistics.getLottoStatistics();
  }

  #buyLotto(amount) {
    // 로또 발행하기
    const issuedLottos = generateLotto(amount);
    OutputView.printIssuedLottos(issuedLottos);

    return issuedLottos.map((lotto) => new Lotto(lotto));
  }

  async #getAmount() {
    const amount = await InputView.readAmount();

    const parsedAmount = parser.stringToNumber(amount);
    validateAmount(parsedAmount);

    return parsedAmount;
  }

  async #getWinningNumbers() {
    const winningNumbers = await InputView.readWinningNumbers();

    const parsedWinningNumbers = parser.stringToArray(winningNumbers);
    validateWinningNumbers(parsedWinningNumbers);

    return parsedWinningNumbers;
  }

  async #getBonusNumber(winningNumbers) {
    const bonusNumber = await InputView.readBonusNumber();

    const parsedBonusNumber = parser.stringToNumber(bonusNumber);
    validateBonusNumber(parsedBonusNumber, winningNumbers);

    return parsedBonusNumber;
  }
}

export default App;
