import Lotto from './Lotto.js';
import LottoMachine from './models/LottoMachine.js';
import { AmountValidator } from './utils/Validation.js';
import InputView from './views/Input.js';
import OutputView from './views/Output.js';
import { LOTTO_RANK_INFO } from './constants.js';
import { Intersection } from './utils/Intersection.js';

class App {
  #lottoMachine;
  #lottoResult;

  constructor() {
    this.#lottoMachine = new LottoMachine();
    this.#lottoResult = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  }

  async run() {
    const amount = await this.getAmountInput();

    const lottos = this.buyLotto(amount);

    OutputView.printLottos(lottos);

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber();

    this.calculateLottoRank(lottos, winningNumbers, bonusNumber);
    console.log(this.#lottoResult);
    OutputView.printRank(this.#lottoResult);
  }

  async getAmountInput() {
    const amount = await InputView.readAmountInput();

    AmountValidator.amount(amount);

    return amount;
  }

  async getWinningNumbers() {
    const winningNumbers = await InputView.readWinningNumbersInput();

    //validation
    return winningNumbers;
  }

  async getBonusNumber() {
    const bonusNumber = await InputView.readBounsNumberInput();
    //validation
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
    console.log(userMatchBonus);

    if (userMatchCount === 0) return;

    for (const rank in LOTTO_RANK_INFO) {
      const { matchCount } = LOTTO_RANK_INFO[rank];
      if (matchCount === userMatchCount) {
        if (userMatchCount === 5 && userMatchBonus) {
          this.#lottoResult[2] += 1;
        } else {
          this.#lottoResult[rank] += 1;
        }
      }
    }
  }
}

export default App;
