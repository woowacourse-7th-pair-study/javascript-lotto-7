import Lotto from './Lotto.js';
import LottoMachine from './models/LottoMachine.js';
import { AmountValidator, NumbersValidator } from './utils/Validation.js';
import InputView from './views/Input.js';
import OutputView from './views/Output.js';
import { LOTTO_RANK_INFO } from './constants.js';
import { Intersection } from './utils/Intersection.js';
import { inputHandler } from './utils/inputHandler.js';

class App {
  #lottoMachine;
  #lottoResult;

  constructor() {
    this.#lottoMachine = new LottoMachine();
    this.#lottoResult = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  }

  async run() {
    const amount = await inputHandler(() => this.getAmountInput());

    const lottos = this.buyLotto(amount);

    OutputView.printLottos(lottos);

    const winningNumbers = await inputHandler(() => this.getWinningNumbers());
    const bonusNumber = await inputHandler(() =>
      this.getBonusNumber(winningNumbers),
    );

    this.calculateLottoRank(lottos, winningNumbers, bonusNumber);
    OutputView.printRank(this.#lottoResult);
    const earningRate = this.calculateEarningRate(amount);
    OutputView.printEarningsRate(earningRate);
  }

  async getAmountInput() {
    const amount = await InputView.readAmountInput();

    AmountValidator.amount(amount);

    return amount;
  }

  async getWinningNumbers() {
    const winningNumbers = await InputView.readWinningNumbersInput();

    NumbersValidator.winningNumbers(winningNumbers);
    return winningNumbers;
  }

  async getBonusNumber(winningNumbers) {
    const bonusNumber = await InputView.readBounsNumberInput();

    NumbersValidator.number(winningNumbers, bonusNumber);
    return bonusNumber;
  }

  buyLotto(amount) {
    this.#lottoMachine.generateLotto(amount);

    const lottos = this.#lottoMachine.lottos;

    return lottos.map((lotto) => new Lotto(lotto));
  }

  calculateLottoRank(lottos, winningNumbers, bonusNumber) {
    lottos.forEach((lotto) => {
      this.matchRank(lotto, winningNumbers, bonusNumber);
    });
  }

  matchRank(lotto, winningNumbers, bonusNumber) {
    const userMatchCount = Intersection(lotto.numbers, winningNumbers);
    const userMatchBonus = lotto.numbers.includes(bonusNumber);

    if (userMatchCount === 0) return;

    for (const rank in LOTTO_RANK_INFO) {
      const { matchCount, matchBonus } = LOTTO_RANK_INFO[rank];
      if (matchCount === userMatchCount) {
        if (userMatchCount === 5 && userMatchBonus === matchBonus) {
          this.#lottoResult[2] += 1;
          return;
        } else {
          this.#lottoResult[rank] += 1;
          return;
        }
      }
    }
  }
  calculateEarningRate(amount) {
    let totalPrize = 0;
    for (const rank in LOTTO_RANK_INFO) {
      totalPrize += this.#lottoResult[rank] * LOTTO_RANK_INFO[rank].prize;
    }

    const earningRate = (totalPrize / amount) * 100;

    return earningRate.toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  }
}

export default App;
