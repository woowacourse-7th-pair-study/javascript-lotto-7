import Lotto from "./Lotto.js";
import LottoMachine from "./models/LottoMachine.js";
import {
  amountValidator,
  bonusNumberValidator,
  winningNumbersValidator,
} from "./utils/Validation.js";
import InputView from "./views/Input.js";
import OutputView from "./views/Output.js";
import { inputHandler } from "./utils/inputHandler.js";
import LottoCalculator from "./models/LottoCalculator.js";

class App {
  #lottoMachine;
  #lottoResult;

  #lottoCalculator;

  constructor() {
    this.#lottoMachine = new LottoMachine();
    this.#lottoResult = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    this.#lottoCalculator = new LottoCalculator();
  }

  async run() {
    const amount = await inputHandler(() => this.getAmountInput());

    const lottos = this.buyLotto(amount);

    OutputView.printLottos(lottos);

    const winningNumbers = await inputHandler(() => this.getWinningNumbers());
    const bonusNumber = await inputHandler(() =>
      this.getBonusNumber(winningNumbers)
    );

    this.calculateLottoRank(lottos, winningNumbers, bonusNumber);
    OutputView.printRank(this.#lottoResult);

    this.#lottoCalculator.calculateTotalPrize(this.#lottoResult);
    const earningRate = this.#lottoCalculator.calculateEarningRate(amount);

    OutputView.printEarningsRate(earningRate);
  }

  async getAmountInput() {
    const amount = await InputView.readAmountInput();

    amountValidator(amount);

    return amount;
  }

  async getWinningNumbers() {
    const winningNumbers = await InputView.readWinningNumbersInput();

    winningNumbersValidator(winningNumbers);
    return winningNumbers;
  }

  async getBonusNumber(winningNumbers) {
    const bonusNumber = await InputView.readBounsNumberInput();

    bonusNumberValidator(winningNumbers, bonusNumber);
    return bonusNumber;
  }

  buyLotto(amount) {
    this.#lottoMachine.generateLotto(amount);

    const lottos = this.#lottoMachine.lottos;

    return lottos.map((lotto) => new Lotto(lotto));
  }

  calculateLottoRank(lottos, winningNumbers, bonusNumber) {
    lottos.forEach((lotto) => {
      const rank = lotto.calculateMatch(winningNumbers, bonusNumber);
      this.#lottoResult[rank] += 1;
    });
  }
}

export default App;
