import Lotto from "./Lotto.js";
import LottoMachine from "./models/LottoMachine.js";
import { AmountValidator } from "./utils/Validation.js";
import InputView from "./views/Input.js";
import OutputView from "./views/Output.js";

class App {
  #lottoMachine;

  constructor() {
    this.#lottoMachine = new LottoMachine();
  }

  async run() {
    const amount = await this.getAmountInput();

    const lottos = this.buyLotto(amount);

    OutputView.printLottos(lottos);

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber();
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

    lottos.map((lotto) => new Lotto(lotto));

    return lottos;
  }
}

export default App;
